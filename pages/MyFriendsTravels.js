import { Button, ButtonGroup, Card } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import Header from './components/Header'
import Link from "next/link";

export default function MyFriendsTravels() {
    return(
<>
<TopNavbar />
<Header />
<Card className="photo">
<Card.Img variant="top" /><img src="/Tokyo.jpg" width="200px" overflow="hidden"></img>
<Card.Body>
  <Card.Title>Tokyo</Card.Title>
  <Card.Text>

  </Card.Text>
  <Button><Link href="./NewTrip">Cross</Link></Button>
</Card.Body>
</Card>
</>)}