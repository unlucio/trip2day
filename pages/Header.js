import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import styles from '../styles/header.module.css'
import Link from 'next/link'

function Header() {
    return (
        <div className={styles.contenitore}>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image className={styles.images} src="https://i.pinimg.com/originals/ac/b9/6b/acb96bd45aa8123f05757b16666cd45d.jpg" roundedCircle width="200px" />
                    </Col>
                </Row>
            </Container>
            <div className={styles.Description}>
                <h1 className={styles.ProfileName}> Cristina Munuz </h1>
                <p className={styles.MyStory}> bifhriuvherjfnekiurhfieurhfkjenrfikvjehri uhfeiurhvierjgnkejrgv efugrhfierugbve riufbeirjb ifeirfubweif
                                               wefcb9wi4urfbie w9eufhi3u4fhbiwue
                </p>
            </div>
            <>

                <Button className={styles.BottonToTrip} variant="success" onClick> <Link href='./NewTrip'> PLAN YOUR NEXT TRIP </Link> </Button>{''}

            </>
        </div>
    )
}

export default Header