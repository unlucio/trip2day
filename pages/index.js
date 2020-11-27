import Head from "next/head";
import LoginPage from "./LoginPage"

export default function Home() {

  return (
    <>
      <Head>
        <title>Trip2Day</title>
        <link rel="icon" href="/charizard.ico" />
      </Head>

      <LoginPage />

    </>
  );
}
