import Link from "next/link";
import Navbar from "./TopNavbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import styles from '../styles/MyPlannedTrips.module.css'

function MyPlannedTrips() {
  return (
    <div>
      <Navbar />
      <h1>Ciao, sono l'elenco dei tuoi viaggi pianificati</h1>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">
          <Link href="./MyTrips">My Trips</Link>
        </Button>
        <Button variant="secondary">My Planned Trips</Button>
      </ButtonGroup>

    <div className={styles.flexcontainer}>

      <Card className={styles.foto}>
        <Card.Img variant="top"/><img src="/Tokyo.jpg" width="200px"overflow="hidden"></img>
        <Card.Body>
          <Card.Title>Tokyo</Card.Title>
          <Card.Text>
        
          </Card.Text>
          <Button><Link href="./NewTrip">Cross</Link></Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top"/><img src="/Parigi.jpg" width="200px"overflow="hidden"></img>
        <Card.Body>
          <Card.Title>Parigi</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top"/><img src="/Formentera.jpg" width="200px"overflow="hidden"></img>
        <Card.Body>
          <Card.Title>Formentera</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>



    </div>
  );
}

export default MyPlannedTrips
