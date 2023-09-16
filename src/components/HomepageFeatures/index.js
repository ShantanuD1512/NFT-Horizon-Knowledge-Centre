import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Smart Contract 📝",
    Svg: require('@site/static/img/Smart_Contract.svg').default,
    description: (
      <>
        The maestro behind NFT magic, ensuring trust and transparency in every blockchain performance.
      </>
    ),
  },
  {
    title: 'Secure Wallet Integration 🔐',
    Svg: require('@site/static/img/Secure Wallet.svg').default,
    description: (
      <>
        Your treasure chest for digital assets, securely integrated into every NFT journey.
      </>
    ),
  },
  {
    title: 'Search & Discovery 🔍',
    Svg: require('@site/static/img/Search_Discovery.svg').default,
    description: (
      <>
        Unearth the extraordinary with our NFT compass, revealing hidden gems in the vast digital art terrain.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
