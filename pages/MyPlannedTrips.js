import { Button, ButtonGroup, Card } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Header from './components/Header'
import Link from "next/link";
import { useState, useEffect } from 'react'
import { CardViaggioList } from './listCardViaggio'
import {AddCardViaggio} from './addCardViaggio.js'


function MyPlannedTrips() {
  const [cardList, setList] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3001/").then((response) => {
          response.json().then((content) => {
              setList([...content.cardViaggio]);
          });
      });
  }, []);
  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function renderCard() {
    return cardList.map((cardList, index) => {
      const { location, photo } = cardList
      return (<Card className="photo" key={index}>
        <Card.Img variant="top" /><img src={photo} width="200px" overflow="hidden"></img>
        <Card.Body>
          <Card.Title>{location}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button><Link href="./NewTrip">Cross</Link></Button>
        </Card.Body>
      </Card>
      )
    })
  }
  function chooseLocation() {

  }
  console.log(value);

  return (
    <div>
      <TopNavbar />
      <Header />
      <h1>Ciao, sono l'elenco dei tuoi viaggi pianificati</h1>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">
          <Link href="./MyTrips">My Trips</Link>
        </Button>
        <Button variant="secondary">My Planned Trips </Button>
        <Button variant="secondary">
          <Link href="./MyPhotos">My Photos</Link>
        </Button>
      </ButtonGroup>

      <div className="flexcontainer">
        <button onClick={renderCard}>Aggiungi viaggio</button>
        <div>{renderCard()}</div>

        <Card className="photo">

          <Card.Img variant="top" /><img src="/Tokyo.jpg" width="200px" overflow="hidden"></img>
          <Card.Body>
            <Card.Title>Plan your next trip</Card.Title>
            <Card.Text>

            </Card.Text>
            <Button onClick={renderCard}><Link href="./NewTrip">+</Link></Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" /><img src="/Parigi.jpg" width="200px" overflow="hidden"></img>
          <Card.Body>
            <Card.Title>Parigi</Card.Title>
            <Card.Text>

            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" /><img src="/Formentera.jpg" width="200px" overflow="hidden"></img>
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
