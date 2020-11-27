import { signIn, signOut, useSession } from "next-auth/client";
import { Image, Container, Row, Col } from "react-Bootstrap"

function LoginPage() {
    const [session, loading] = useSession();
    return (
    <>

<Container fluid>
  <Row>
    <Image src="loginpage.jpg" fluid width="50%"/>
    <Col> <img src="trip2day_logo.png" width="100%" /><div>
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
              )}</div>
    </Col>
  </Row>
</Container>

</>
  
   
    );
}
export default LoginPage