# 执行组件

## 前言

> Actors 为最低级别的“计算单元”。

在单应用时代，我们可以很方便的通过lock等关键字，去规避多线程访问导致的数据不安全等问题；而一旦我们的应用需要以集群的方式部署时，上面的那些方案都会失效或者会导致高昂的成本。这个时候往往需要引入一些分布式锁来解决，这也是分布式系统比较常用的数据一致性方案。

Actor 提出了一个新的在分布式环境下解决多线程并发操作的思路。当代码处理一条消息时，它可以向其他参与者发送一条或多条消息，或者创建新的 Actors。 底层运行时将管理每个 actor 的运行方式，时机和位置，并在 Actors 之间传递消息。换句话说，您在一个独立的单元（称为actor）中编写代码，该单元接收消息并一次处理一个消息，没有任何并发或线程。大量 Actors 可以同时执行，而 Actors 可以相互独立执行。

:::tip 简言之
并行转串行！
:::

## 开发

### 配置组件

这里的配置与状态管理的配置共用，参考[这里](state#配置状态存储)

需要注意的是这个
```
- name: actorStateStore
  value: "true"
```

### 创建 Actor

```
dotnet add package Dapr.Actors --version 1.5.0
```

定义 `IScoreActor` 接口，需要继承自 `IActor`

```js  title="IScoreActor.cs"
using Dapr.Actors;

public interface IScoreActor : IActor
{
    Task<int> IncrementScoreAsync();

    Task<int> GetScoreAsync();
}
```

:::caution 注意
执行组件方法的返回类型必须为 `Task` 或 `Task<T>` 。此外，执行组件方法最多只能有一个参数。 返回类型和参数都必须可 `System.Text.Json` 序列化。
:::

定义OrderStatusActor实现IOrderStatusActor，并继承自Actor

```js title="ScoreActor.cs"
using Dapr.Actors.Runtime;

[Actor(TypeName = "MyActor")]
public class ScoreActor : Actor, IScoreActor
{
    public ScoreActor(ActorHost host) : base(host)
    {

    }

    public Task<int> IncrementScoreAsync()
    {
        return StateManager.AddOrUpdateStateAsync("score", 1, (key, currentScore) => currentScore + 1);
    }

    public async Task<int> GetScoreAsync()
    {
        var scoreValue = await StateManager.TryGetStateAsync<int>("score");
        if (scoreValue.HasValue)
        {
            return scoreValue.Value;
        }

        return 0;
    }
}
```

### 注册 Actor

```
dotnet add package Dapr.Actors.AspNetCore --version 1.5.0
```

```js title="Program.cs"
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddDapr(); 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddActors(options =>
{
    options.Actors.RegisterActor<ScoreActor>(); // +
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Urls.Add("http://localhost:5000");

app.UseAuthorization();

app.MapControllers();
app.MapActorsHandlers(); // +

app.Run();
```

执行组件终结点是必需的， `Dapr sidecar` 与执行组件实例进行交互。

:::caution 注意
请确保你的 `Startup` 类不包含 app.UseHttpsRedirection 将客户端重定向到 HTTPS 终结点的调用。这不适用于执行组件。 按照设计，默认情况下，Dapr sidecar 通过未加密的 HTTP 发送请求。启用后，HTTPS 中间件会阻止这些请求。
:::


### 调用 Actor

下面的示例演示了控制台客户端应用程序如何对 `ScoreActor` 实例调用 `IncrementScoreAsync` 操作：

```js title="Program.cs"
using Dapr.Actors;
using Dapr.Actors.Client;

Console.WriteLine("Hello, World!");

var actorId = new ActorId("scoreActor1");

var proxy = ActorProxy.Create<IScoreActor>(actorId, "ScoreActor");

var score = await proxy.IncrementScoreAsync();

Console.WriteLine($"Current score: {score}");
```

`ActorId` 是执行组件实例的唯一标识。 还可以通过调用 `ActorId.CreateRandom()` 来生成随机 id 。


:::tip

该id下的执行组件实例，在整个系统中，将保持单线执行。

:::


如果客户端应用程序是 `ASP.NET Core` 应用程序，则应使用 `IActorProxyFactory` 接口创建执行组件代理。
```js title="WeatherForecastController.cs"
using Dapr.Actors;
using Dapr.Actors.Client;
using Dapr.Client;
using Microsoft.AspNetCore.Mvc;

namespace WebApi1.Controllers
{
    [Route("[controller]/[action]")]
    public class WeatherForecastController : Controller
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DaprClient _daprClient;
        private readonly IActorProxyFactory _actorProxyFactory;
        private static string? _key;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, DaprClient daprClient, IActorProxyFactory actorProxyFactory)
        {
            _logger = logger;
            _daprClient = daprClient;
            _actorProxyFactory = actorProxyFactory;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> GetWeatherForecast()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpPut("{scoreId}")]
        public Task<int> IncrementAsync(string scoreId)
        {
            _key = scoreId;
            var scoreActor = _actorProxyFactory.CreateActorProxy<IScoreActor>(new ActorId(_key), "MyActor");
            return scoreActor.IncrementScoreAsync();
        }

        [HttpGet]
        public Task<int> GetScoreAsync()
        {
            var scoreActor = _actorProxyFactory.CreateActorProxy<IScoreActor>(new ActorId(_key), "MyActor");
            return scoreActor.GetScoreAsync();
        }

    }
}
```

使用 Redis 控制台工具，在 Redis 缓存中查看 Redis 状态存储组件如何持久保存数据：
```
$ docker exec -ti dapr_redis redis-cli

127.0.0.1:6379> KEYS *
1) "WebApplication1||guid"
2) "dream||keyPrefix-test"     
3) "WebApi1||MyActor||666||score"
127.0.0.1:6379>

```
可以发现actor数据的命名规则是 `appName||ActorName||ActorId||key`

主要优点在于您可以在一个集中的位置管理配置执行组件，比如：

```js
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddActors(options =>
{
    var jsonSerializerOptions = new JsonSerializerOptions()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        PropertyNameCaseInsensitive = true
    };

    options.JsonSerializerOptions = jsonSerializerOptions;
    options.Actors.RegisterActor<ScoreActor>();
});
```

## Actor timers

你可以通过 `timer` 在 `Actor` 中启动一个定时任务。

`Dapr Actor` 运行时确保任务方法被顺序调用，而非并发调用。 这意味着，在此任务完成执行之前，不会有其他任务被执行。

`timer` 的下一个周期在当前任务完成执行后开始计算。这意味着 `timer` 在任务执行时停止，并在任务完成时启动。

`Dapr Actor` 运行时在任务完成时保存对 `Actor` 的状态所作的更改。 如果在保存状态时发生错误，那么将取消激活该 `Actor` 对象，并且将激活新实例。

当 `Actor` 作为垃圾回收(GC)的一部分被停用时，所有 `timer` 都会停止。 在此之后，将不会再调用 `timer` 的任务。 

此外，`Dapr Actor` 运行时不会保留有关在失活之前运行的 `timer` 的任何信息。 也就是说，重新启动 `Actor` 后将会激活的 `timer` 完全取决于注册时登记的 `timer` 。

下面的例子展示了如何编写一个 `timer` :

```js title="ITimerActor.cs"
using Dapr.Actors;

public interface ITimerActor : IActor
{
    Task StartTimerAsync(string name, string text);
}

```

```js title="TimerActor.cs"
using Dapr.Actors.Runtime;
using System.Text;

public class TimerActor : Actor, ITimerActor
{
    public TimerActor(ActorHost host) : base(host)
    {
    }

    public Task StartTimerAsync(string name, string text)
    {
        return RegisterTimerAsync(
            name,
            nameof(Timer2LoggerAsync),
            Encoding.UTF8.GetBytes(text),
            TimeSpan.Zero,
            TimeSpan.FromSeconds(1));
    }

    public Task Timer2LoggerAsync(byte[] state)
    {
        var text = Encoding.UTF8.GetString(state);

        Logger.LogInformation($"Timer fired: {text}");

        return Task.CompletedTask;
    }

    public Task Stop2LoggerAsync(string name)
    {
        return UnregisterTimerAsync(name);
    }
}
```

```js title="Program.cs"
......

builder.Services.AddActors(options =>
{
    options.Actors.RegisterActor<ScoreActor>(); // +
    options.Actors.RegisterActor<TimerActor>(); // +
});

......
```

```js title="WeatherForecastController.cs"
......

[HttpGet]
public Task StartTimerAsync()
{
    var timerActor = _actorProxyFactory.CreateActorProxy<ITimerActor>(ActorId.CreateRandom(), nameof(TimerActor));
    return timerActor.StartTimerAsync("mytimer", "hello timer");
}

......
```

RegisterTimerAsync 采用五个参数：

1. 计时器的名称;
2. 触发计时器时要调用的方法的名称;
3. 要传递给回调方法的状态;
4. 首次调用回调方法之前要等待的时间;
5. 回调方法调用之间的时间间隔。

## Actor reminders

`reminders` 的功能类似于 `timer`，但与 `timer` 不同，在所有情况下 `reminders` 都会触发，直到 `actor` 显式取消注册 `reminders` 或删除 `actor` 。`reminders` 会在所有 `actor` **失活和故障** 时也会触发，因为 `Dapr Actors` 运行时会将 `reminders` 信息持久化到 `Dapr Actors` 状态提供者中。


下面的例子展示了如何编写一个 `reminder` :

```js title="IDoNotForgetActor.cs"
using Dapr.Actors;

public interface IDoNotForgetActor: IActor
{
    Task SetReminderAsync(string text);
}
```
```js title="DoNotForgetActor.cs"
using Dapr.Actors.Runtime;
using System.Text;

public class DoNotForgetActor : Actor, IDoNotForgetActor, IRemindable
{
    public DoNotForgetActor(ActorHost host) : base(host)
    {
    }

    public Task SetReminderAsync(string text)
    {
        return RegisterReminderAsync(
            "DoNotForget",
            Encoding.UTF8.GetBytes(text),
            TimeSpan.Zero,
            TimeSpan.FromSeconds(1));
    }

    public Task ReceiveReminderAsync(string reminderName, byte[] state, TimeSpan dueTime, TimeSpan period)
    {
        if (reminderName == "DoNotForget")
        {
            var text = Encoding.UTF8.GetString(state);

            Logger.LogInformation($"Don't forget: {text}");
        }

        return Task.CompletedTask;
    }
}
```
`RegisterReminderAsync` 方法类似于 `RegisterTimerAsync` ，但不必显式指定回调方法。
如上面的示例所示，实现 `IRemindable.ReceiveReminderAsync` 以处理触发的 `reminder` 。
`reminder` 同时重置空闲计时器和持久性。即使执行组件已停用，也会在触发提醒时重新激活。


```js title="Program.cs"
......

builder.Services.AddActors(options =>
{
    options.Actors.RegisterActor<ScoreActor>(); // +
    options.Actors.RegisterActor<TimerActor>(); // +
    options.Actors.RegisterActor<DoNotForgetActor>(); // +
});

......
```
```js title="WeatherForecastController.cs"
......

[HttpGet]
public Task DoNotForgetMeAsync()
{
    var donotActor = _actorProxyFactory.CreateActorProxy<IDoNotForgetActor>(ActorId.CreateRandom(), nameof(DoNotForgetActor));
    return donotActor.SetReminderAsync("me");
}

......
```




