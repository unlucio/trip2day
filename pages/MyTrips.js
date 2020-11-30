import { Button, ButtonGroup } from "react-bootstrap";
import TopNavbar from './components/TopNavbar'
import Header from './components/Header'
import LoginPage from './loginPage'
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/client'


function MyTrips() {

  return (
    <div>
      <TopNavbar />
      <Header />
      {/* <h1>Ciao, sono l'elenco dei tuoi viaggi</h1> */}
    </div>
  );

}
export default MyTrips
