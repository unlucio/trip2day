import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

export default function TopNavBar() {
  const [session, loading] = useSession();
  return (<>

    <Navbar bg="primary" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src="/trip2day_logo.png"
          height="30"
          className="d-inline-block align-top"
          alt="Trip2Day Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar inline>
          {!session && (
            <>
              <p>Not signed in</p>
              <button onClick={() => signIn("facebook", { callbackUrl: "http://localhost:3000/MyTravelBook" })
                  }> Sign in </button></>)}
          {session && (
            <>
                <p>Signed in as {session.user.name}!</p>
              <button onClick={() => signOut({ callbackUrl: "http://localhost:3000" })
                }> Sign out </button></>)} 
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  </>



  )
};
