import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gulgul celebrations</title>
        <meta name="description" content="Gulgul celebrations" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️</text></svg>" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ❤️ גוגול ❤️
        </h1>
        <br/>

        <h2 className={styles.subtitle}>
          ❤️ אהבה ❤️
        </h2>
        <br/>

        <h3 className={styles.subsubtitle}>
        🎉מזל טוב!🎉
        </h3>

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

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <p className={styles.description}>
          אגב, הטבעת כבר אצלי והולכים מחר להופעה של גידי גוב.
          יכולת לגלות את זה כבר לפני תקופה אם רק היית גוללת קצת...
          ❤️
        </p>
      </main>
    </div>
  )
}
