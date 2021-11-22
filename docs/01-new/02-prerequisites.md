# 环境准备

## 安装 Docker

参考官方文档 https://docs.microsoft.com/zh-cn/virtualization/windowscontainers/quick-start/set-up-environment?tabs=Windows-10#install-docker

> 我们主要采用Linux容器，而非Windows容器。

## 安装 Dapr CLI

Dapr CLI 是您用于各种 Dapr 相关任务的主要工具。 您可以使用它来运行一个Dapr sidecar的应用程序， 以及查看sidecar日志，列出运行服务，并运行 Dapr 仪表板。 Dapr CLI 同时使用 自托管 和 Kubernetes 环境。

开始下载并安装 Dapr CLI：
```shell
powershell -Command "iwr -useb https://raw.githubusercontent.com/dapr/cli/master/install/install.ps1 | iex"
```

```shell
Installing Dapr...
Creating c:\dapr directory
Downloading https://api.github.com/repos/dapr/cli/releases/assets/49209969 ...
Extracting c:\dapr\dapr_windows_amd64.zip...
CLI version: 1.5.0
Runtime version: n/a
Clean up c:\dapr\dapr_windows_amd64.zip...
Try to add c:\dapr to User Path Environment variable...
Added c:\dapr to User Path 

Dapr CLI is installed successfully.
To get started with Dapr, please visit https://docs.dapr.io/new/ .
Ensure that Docker Desktop is set to Linux containers mode when you run Dapr in self hosted mode.
```

您可以通过重新启动您的终端/命令提示和运行以下操作来验证CLI：
```shell
PS C:\Users\zhurong> dapr

         __
    ____/ /___ _____  _____
   / __  / __ '/ __ \/ ___/
  / /_/ / /_/ / /_/ / /
  \__,_/\__,_/ .___/_/
              /_/

===============================
Distributed Application Runtime

Usage:
  dapr [command]

Available Commands:
  build-info     Print build info of Dapr CLI and runtime
  completion     Generates shell completion scripts
  components     List all Dapr components. Supported platforms: Kubernetes
  configurations List all Dapr configurations. Supported platforms: Kubernetes
  dashboard      Start Dapr dashboard. Supported platforms: Kubernetes and self-hosted
  help           Help about any command
  init           Install Dapr on supported hosting platforms. Supported platforms: Kubernetes and self-hosted
  invoke         Invoke a method on a given Dapr application. Supported platforms: Self-hosted
  list           List all Dapr instances. Supported platforms: Kubernetes and self-hosted
  logs           Get Dapr sidecar logs for an application. Supported platforms: Kubernetes
  mtls           Check if mTLS is enabled. Supported platforms: Kubernetes
  publish        Publish a pub-sub event. Supported platforms: Self-hosted
  run            Run Dapr and (optionally) your application side by side. Supported platforms: Self-hosted
  status         Show the health status of Dapr services. Supported platforms: Kubernetes
  stop           Stop Dapr instances and their associated apps. Supported platforms: Self-hosted
  uninstall      Uninstall Dapr runtime. Supported platforms: Kubernetes and self-hosted
  upgrade        Upgrades or downgrades a Dapr control plane installation in a cluster. Supported platforms: Kubernetes

Flags:
  -h, --help          help for dapr
      --log-as-json   Log output in JSON format
  -v, --version       version for dapr

Use "dapr [command] --help" for more information about a command.
```

## 初始化 Dapr

Dapr 与您的应用程序一起作为sidecar运行，在自托管模式下，这意味着它是您本地机器上的一个进程。 因此，初始化 Dapr 包括获取 Dapr sidecar 二进制文件并将其安装到本地。

此外，默认初始化过程还创建了一个开发环境，帮助简化 Dapr 的应用开发。 这包括下列步骤：

1. 运行 Redis container 实例 将被用作本地的 状态存储 和 消息代理
1. 运行一个 Zipkin 容器实例 用于观测性
1. 创建具有上述组件定义的 默认组件文件夹
1. 运行用于本地演员支持的Dapr placement服务容器实例

### 1. 运行初始化命令

```shell
PS C:\Users\zhurong> dapr init

Making the jump to hyperspace...
Failed to get runtime version: 'https://api.github.com/repos/dapr/dapr/releases - 403 Forbidden'. Trying secondary source
Installing runtime version 1.5.0
cannot get the latest dashboard version: 'https://api.github.com/repos/dapr/dashboard/releases - 403 Forbidden'. Try specifying --dashboard-version=<desired_version>
continuing, but dashboard will be unavailable
Downloading binaries and setting up components...
Downloaded binaries and completed components set up.
daprd binary has been installed to C:\Users\zhurong\.dapr\bin.
dapr_placement container is running.
dapr_redis container is running.
dapr_zipkin container is running.
Use `docker ps` to check running containers.
Success! Dapr is up and running. To get started, go here: https://aka.ms/dapr-new
```

### 2. 验证容器正在运行

```
PS C:\Users\zhurong> docker ps
CONTAINER ID   IMAGE               COMMAND                  CREATED              STATUS                    PORTS                              NAMES
f6794a86ae2a   daprio/dapr:1.5.0   "./placement"            41 seconds ago       Up 39 seconds             0.0.0.0:6050->50005/tcp            dapr_placement
30a956da7a11   openzipkin/zipkin   "start-zipkin"           44 seconds ago       Up 42 seconds (healthy)   9410/tcp, 0.0.0.0:9411->9411/tcp   dapr_zipkin
9e9adbdb6497   redis               "docker-entrypoint.s…"   About a minute ago   Up About a minute         0.0.0.0:6379->6379/tcp             dapr_redis
```

### 3. 验证组件目录已初始化

在 dapr init时，CLI 还创建了一个默认组件文件夹，其中包括几个 YAML 文件，其中包含state store、elevated 和 zipkin。 Dapr sidecar, 将读取这些文件。 告诉它使用Redis容器进行状态管理和消息传递，以及Zipkin容器来收集跟踪。

* 在 Linux/MacOS 中 Dapr 使用默认组件和文件的路径是 $HOME.dapr。
* Windows 中，Dapr 初始化路径到 %USERPROFILE%\.dapr\

```shell
PS C:\Users\zhurong> ls C:\Users\zhurong\.dapr


    目录: C:\Users\zhurong\.dapr


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        2021/5/12     11:37                bin
d-----        2021/5/12     11:37                components
-a----        2021/5/12     11:37            187 config.yaml


PS C:\Users\zhurong>
```

## 升级 Dapr

1. 卸载当前的Dapr部署：

> 这将删除默认 $HOME/.dapr 目录、 二进制文件和所有容器 (dapr_redis、 dapr_placement 和 dapr_zipkin)。 如果docker 命令需要sudo，Linux 用户需要运行 sudo 。

```
dapr uninstall --all
```

2. 参考上面的步骤安装最新的 Dapr CLI 。

3. 初始化 Dapr 运行时：
```
dapr init
```

4. 再次查看版本：
```
$ dapr --version

CLI version: 1.5.0
Runtime version: 1.5.0
```

