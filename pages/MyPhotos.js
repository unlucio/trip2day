
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
        </div>
    );
}
export default MyPhotos
