import Head from "next/head";
import LoginPage from "./loginPage"

export default function Home() {
 
  return (
    <>
        <Head>
          <title>Trip2Day</title>
          <link rel="icon" href="/charizard.ico" />
        </Head>

        <LoginPage />
     
        <footer>
          <p>ciao, sono il copyright del sito</p>
        </footer>
    </>
  );
}
