import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/"><a>Home</a></Link>
            <Link href='./MyTravelBook'><a>Portami al mio diario di viaggio</a></Link>
            <Link href='./MyPlannedTrips'><a>Portami ai miei viaggi pianficati</a></Link>
            <Link href='./NewTrip'><a>Fai un nuovo viaggio</a></Link>
        </nav>
    )
}

export default Navbar