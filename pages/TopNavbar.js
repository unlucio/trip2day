import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import Link from 'next/link'

export default function TopNavBar() {
    return ( <>
<Navbar bg="primary" variant="light" fixed="top" overflow="hidden">
    <Navbar.Brand href="#home"><img src="/trip2day_logo.png" width="200px"overflow="hidden"></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>
    )};
