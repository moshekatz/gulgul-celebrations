import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ❤️ גוגול ❤️
        </h1>

        <h1 className={styles.title}>
          ❤️ אהבה ❤️
        </h1>

        <h1 className={styles.title}>
        🎉מזל טוב!🎉
        </h1>

        <p className={styles.description}>
          תודה שאת קיימת.
        </p>

        <p className={styles.description}>
          לחיי עוד הרבה ימי הולדת.. 🥂
        </p>

        <p className={styles.description}>
          אני אוהב אותך.
        </p>

        <p className={styles.description}>
          גול ❤️
        </p>
      </main>
    </div>
  )
}
