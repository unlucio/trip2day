import Link from "next/link";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import TopNavBar from './TopNavbar'
import Header from './Header'

function MyPhotos() {
    return (
        <div>
            <TopNavBar />
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
