import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';


import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={ clsx('hero hero--primary', styles.heroBanner) }>
      <div className="container">
        <h1 className="hero__title">
          <img src={ useBaseUrl('/img/mystic_rodeo_trans_small.png') } width="50px" height="50px" style={ { verticalAlign: 'middle', marginBottom: '10px' } } />
          { siteConfig.title }
        </h1>
        <p className="hero__subtitle">{ siteConfig.tagline }</p>
        <div className={ styles.buttons }>
          <Link
            className="button button--secondary button--lg"
            to="/projects">
            View Projects 🏋🏼⚒
          </Link>
        </div>
        <div className={ styles.buttons }>
          <Link
            className="button button--secondary button--lg"
            to="/essays">
            Read Essays 📜
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={ `gazzini.com` }
      description="// welcome to my website">
      <HomepageHeader />
    </Layout>
  );
}
