
import { Button, ButtonGroup } from "react-bootstrap";
import TopNavbar from './components/TopNavbar'
import Header from './components/Header'
import Link from "next/link";

function MyPhotos() {
    return (
        <div>
            <TopNavbar />
            <Header />
            <h1>Ecco le tue foto</h1>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">
                <Link href="./MyTrips">My Trips</Link>
                </Button>
                <Button variant="secondary">
                    <Link href="./MyPlannedTrips">My Planned Trips</Link>
                </Button>
                <Button variant="secondary">
                    <Link href="./MyPhotos">My Photos</Link>
                </Button>
            </ButtonGroup>
        </div>
    );
}
export default MyPhotos
