import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <>
      <div>
        <Head>
          <title>Trip2Day</title>
          <link rel="icon" href="/charizard.ico" />
        </Head>

        <main>
          <div class='media'>
          <img class="align-self-start mr-3" src="sasha.jpg"></img>
          <div class="media-body">
            <div class="mt-0">
            <img class="" src="trip2day_logo.png"></img>

            <h1>Welcome to Trip2Day</h1>

            <>
              {!session && (
                <>Not signed in <br />
                  <button onClick={() => signIn("facebook",
                    { callbackUrl: "http://localhost:3000/MyTravelBook" })}>Sign in</button>
                </>
              )}
              {session && (
                <><div
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
                  <button onClick={() =>
                    signOut({ callbackUrl: "http://localhost:3000" })}>Sign out</button>
                </>
              )}
            </>

          </div>
          </div>
          </div>
        </main>

        <footer>
          <p>ciao, sono il copyright del sito</p>
        </footer>
      </div>
    </>
  );
}
