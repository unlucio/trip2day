import Link from 'next/link';
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function MyPlannedTrips() {
  return (
    <div>
      <Navbar />
      <h1>Ciao, sono l'elenco dei tuoi viaggi pianificati</h1>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary"><Link href='./MyTrips'>My Trips</Link></Button>
        <Button variant="secondary">My Planned Trips</Button>
      </ButtonGroup>





      
    </div>


    


  );
}

export default MyPlannedTrips;
