import TopNavBar from "./TopNavbar";
import {Image, Card, Button} from 'react-bootstrap'

function Suggestions() {
    return(
    <div>
        <TopNavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Image src="trip2day_logo.png" width="846px" fluid />
        <br />
        <br />
        <br />
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>)
}

export default Suggestions