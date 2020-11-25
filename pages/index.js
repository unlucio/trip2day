import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import Navbar from './Navbar'


export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Trip2Day</title>
        <link rel="icon" href="/charizard.ico" />
      </Head>

      <main className={styles.main}>

        <Navbar />

        <h1 className={styles.title}>Welcome to Trip2Day</h1>

        <>
          {!session && (
            <>
              Not signed in <br />
              <button
                onClick={() =>
                  signIn("facebook", {
                    callbackUrl: "http://localhost:3000",
                  })
                }
              >
                Sign in
      </button>
            </>
          )}
          {session && (
            <>
              <div
                style={{
                  width: "400px",
                  margin: "auto",
                  background: "#f4f4f4",
                  padding: "20px",
                  color: "#000",
                }}
              >
                <img src={session.user.image} alt={session.user.name} />
                <h2>Welcome {session.user.name}!</h2>
              </div>{" "}
              <br />
              <button
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000" })
                }
              >
                Sign out
      </button>
            </>
          )}
        </>
      </main>

      <footer className={styles.footer}>
        <p>ciao, sono il copyright del sito</p>

      </footer>
    </div>
  );
}
