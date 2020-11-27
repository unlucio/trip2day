import { Image, Button } from 'react-bootstrap'
import styles from '../../styles/header.module.css'
import Link from 'next/link'

function Header() {
    return (
        <div className={styles.contenitore}>

            <Image className={styles.images} src="https://i.pinimg.com/originals/ac/b9/6b/acb96bd45aa8123f05757b16666cd45d.jpg" roundedCircle width="200px" />

            <div className={styles.Description}>
                <h1 className={styles.ProfileName}> Cristina Munuz </h1>
                <p className={styles.MyStory}> bifhriuvherjfnekiurhfieurhfkjenrfikvjehri uhfeiurhvierjgnkejrgv efugrhfierugbve riufbeirjb ifeirfubweif
                wefcb9wi4urfbie w9eufhi3u4fhbiwue
                </p>

                <>
                    <Button className={styles.ButtonToTrip} variant="success"> <Link href='./NewTrip'> PLAN YOUR NEXT TRIP </Link> </Button>{''}
                </>

            </div>
        </div>
    )
}

export default Header