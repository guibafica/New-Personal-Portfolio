import { useState } from 'react';
import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Guilherme Bafica</title>
      </Head>

      <h1>Hello World</h1>
    </div>
  )
}
