import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'NFT Minting and Listing 🎨',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Transform your creativity into digital assets! Easily mint and list your unique artworks as NFTs on our platform. 🚀
      </>
    ),
  },
  {
    title: 'Secure Wallet Integration 🔐',
    Svg: require('@site/static/img/svgviewer-output(3).svg').default,
    description: (
      <>
        Your digital treasure deserves the best protection. Seamlessly connect secure wallets for safe transactions and ownership control. 💼
      </>
    ),
  },
  {
    title: 'Real-time Bidding and Auctions 🏁',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Ready to compete for the extraordinary? Engage in thrilling real-time auctions, where you can bid and win exclusive NFTs. ⚡️
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
