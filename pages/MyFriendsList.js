import { ListGroup } from "react-bootstrap"
import TopNavbar from './components/TopNavbar'
import Header from './components/Header'
import { useRouter } from 'next/router'
import Link from "next/link";


export default function MyFriendsList() {
    const router = useRouter()
    const query = { "pid": "abc" }
    return (
        <div>
            <TopNavbar />
            <Header />
            <h1>Ciao, sono l'elenco dei tuoi amici</h1>
            <h3>Clicca sul mio nome per vedere che viaggi ho fatto</h3>
            <ListGroup>
                <ListGroup.Item><button onClick={() => router.push('/post/Frangesualdo')}>Frangesualdo</button></ListGroup.Item>
                <ListGroup.Item>Giancarmelo</ListGroup.Item>
                <ListGroup.Item>Massimilienia</ListGroup.Item>
                <ListGroup.Item>Giovannando</ListGroup.Item>
                <ListGroup.Item>Martinadia</ListGroup.Item>
            </ListGroup>
        </div>
    );
}
