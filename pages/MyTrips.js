import Link from 'next/link'
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function MyTrips() {
    return(
    <div>
        <h1>Ciao, sono l'elenco dei tuoi viaggi</h1>
        <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">My Trips</Button>
        <Button variant="secondary"><Link href='./MyPlannedTrips'>My Planned Trips</Link></Button>
      </ButtonGroup>
    </div>)


export default MyTrips