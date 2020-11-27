import { signIn, signOut, useSession } from "next-auth/client";
import { Container, Row, Col } from "react-Bootstrap"

function LoginPage() {
    const [session, loading] = useSession();
    return (
    <>

<Container fluid>
  <Row>
    <Col className="logincover" style={{backgroundImage:'url("loginpage.jpg")'}}/>
    <div className="loginformcontainer"> 
    <img className="logo" src="trip2day_logo.png" width="100%" />
    
    <div className="loginform">
        {!session && (
                <>Not signed in <br />
                  <button onClick={() => signIn("facebook",
                    { callbackUrl: "http://localhost:3000/MyTrips" })}>Sign in</button>
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
    </div>
    <footer>
        <p>ciao, sono il copyright del sito</p>
    </footer>
    </div>
  </Row>
</Container>

</>
  
   
    );
}
export default LoginPage