import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open source, community driven',
    Svg: require('../../static/img/undraw_community.svg').default,
    description: (
      <>
        Dapr is an open source project hosted on GitHub with a welcoming, engaged and growing community of contributors. Issues, fixes and features come from a diverse group of developers from around the world all collaborating to define the roadmap.
      </>
    ),
  },
  {
    title: 'Any language, anywhere',
    Svg: require('../../static/img/undraw_any.svg').default,
    description: (
      <>
        Use Dapr with your language of choice by leveraging an SDK or making simple HTTP or gRPC calls. Dapr is language agnostic and can run on any hosting environment including local development machines, Kubernetes, and public clouds such as AWS, Azure and GCP.
      </>
    ),
  },
  {
    title: 'Turnkey observability and security',
    Svg: require('../../static/img/undraw_security.svg').default,
    description: (
      <>
        The Dapr sidecar collects traces so your application is instrumented with no additional code. Dapr is built with security in mind so using Dapr helps you harden your application.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
