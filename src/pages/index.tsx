import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Guilherme Bafica</title>
        <link rel="icon" type="image/png" href="/public/logo.png"></link>
      </Head>

      <h1>PortFolio</h1>
    </div>
  )
}
