import Navbar from './Navbar'
import Header from './Header'
import MyTrips from './MyTrips'

function MyTravelBook() {
    return(
    <div>
        <Navbar />
        <Header />
        <h1>Ciao, sono il tuo diario di viaggio</h1>
        <MyTrips />
    </div>)
}

export default MyTravelBook