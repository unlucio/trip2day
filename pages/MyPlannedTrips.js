import Link from "next/link";
import TopNavBar from "./TopNavbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Header from './Header'

function MyPlannedTrips() {
  return (
    <div>
       <TopNavBar />
            <Header />
      <h1>Ciao, sono l'elenco dei tuoi viaggi pianificati</h1>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">
          <Link href="./MyTrips">My Trips</Link>
        </Button>
        <Button variant="secondary">My Planned Trips</Button>
      </ButtonGroup>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top"/><img src="/Tokyo.jpg" width="200px"overflow="hidden"></img>
        <Card.Body>
          <Card.Title>Tokyo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary"  >Cross</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Sydney</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Formentera</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>




    </div>
  );
}

export default MyPlannedTrips
