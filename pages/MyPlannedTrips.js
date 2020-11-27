import Link from "next/link";
import TopNavBar from "./TopNavbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Header from './Header'
import styles from '../styles/MyPlannedTrips.module.css'
import { useState } from 'react'
import { CardViaggioList } from './listCardViaggio'
import {AddCardViaggio} from './addCardViaggio.js'

function MyPlannedTrips() {
  const [list, setList] = useState([]);
  const trip = {
    id: "Tokyo",
    location: "Tokyo",
    photo: "/Tokyo.jpg"
  }

  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  const [cardViaggio, setcardViaggio] = useState([trip])

  function addCard() {
    const cardList = cardViaggio.slice();
    const newCardViaggio = trip;
    cardList.push(newCardViaggio);
    setcardViaggio(cardList);
  }

  function renderCard() {
    return cardViaggio.map((cardViaggio, index) => {
      const { location, photo } = cardViaggio
      return (<Card className={styles.foto} key={index}>
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
      <TopNavBar />
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



      <div className={styles.flexcontainer}>
        <form id="input" onSubmit={chooseLocation}>
          <label>choose location</label>
          <input type="text" placeholder="la 1 la 2 o la 3" value={value} onChange={handleChange} />
          <input type="submit" value="Viaggia!"></input>
        </form>
        <CardViaggioList list={list}/>
        <button onClick={addCard}>Aggiungi viaggio</button>
        <div>{renderCard()}</div>
        <Card className={styles.foto}>
          <Card.Img variant="top" /><img src="/Tokyo.jpg" width="200px" overflow="hidden"></img>
          <Card.Body>
            <Card.Title>Tokyo</Card.Title>
            <Card.Text>

            </Card.Text>
            <Button><Link href="./NewTrip">Cross</Link></Button>
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
