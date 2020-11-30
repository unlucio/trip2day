import { Image, Button, ButtonGroup } from 'react-bootstrap'
// import styles from '../../styles/header.module.css'
import Link from 'next/link'

function Header() {
    return (
        <div className='contenitore'>

            <br />
            <img className='images' src="https://i.pinimg.com/originals/ac/b9/6b/acb96bd45aa8123f05757b16666cd45d.jpg" width="200px" />

            <br />

            <div className='Description'>
                <h1 className='ProfileName'> Cristina Munuz </h1>
                <p className='MyStory'> Ciao sono Cristina, mi piace molto viaggiare da quando ad Amsterdam
                ho incontrato la mia anima gemella. non lo dimenticherò mai. Ho amato Gianpaolo dal primo momento.
                Era entrato nel locale per un "massaggio" con sorpresa ed io era la sua massaggiatrice.
                </p>
            </div>

            <br />

            <div className='ButtonPosition'>
                <button className='ButtonToTrip'> <a className='ButtonText' href='./NewTrip'> Plan your next trip </a> </button>
            </div>

            <br />
            <div className='text-center'>
                <ButtonGroup aria-label="Basic example">

                    <Button
                        style={{ color: 'white', backgroundColor: '#455753' }}
                        variant="secondary">
                        <Link href="./MyTrips">My Trips</Link></Button>

                    <Button
                        variant="secondary"
                        style={{ color: 'white', backgroundColor: '#455753' }}>
                        <Link href="./MyPlannedTrips">My Planned Trips</Link>
                    </Button>

                    <Button
                        style={{ color: 'white', backgroundColor: '#455753' }}
                        variant="secondary">
                        <Link href="./MyPhotos">My Photos</Link>
                    </Button>

                </ButtonGroup>
            </div>
        </div>


    )
}

export default Header