import { Button, ButtonGroup } from "react-bootstrap";
import TopNavbar from './components/TopNavbar'
import Header from './components/Header'
import Link from "next/link";

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
