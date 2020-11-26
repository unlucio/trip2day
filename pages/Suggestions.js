import TopNavBar from "./TopNavbar";
import {
  Image,
  Modal,
  Button,
  Nav,
  FormControl,
  InputGroup,
} from "react-bootstrap";

function Suggestions() {
  return (
    <div>
      <TopNavBar />
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="./DailyPlanner">DAILY PLANNER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="./Suggestions">SUGGESTIONS</Nav.Link>
        </Nav.Item>
      </Nav>

      <Image src="trip2day_logo.png" width="846px"  />

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Name Surname</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup>
            <FormControl aria-label="Text input with radio button" />
            <FormControl aria-label="Text input with radio button" />
            <InputGroup.Prepend>
              <InputGroup.Radio aria-label="Radio button for following text input" />
            </InputGroup.Prepend>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save suggestions</Button>
        </Modal.Footer>
      </Modal.Dialog>
      
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Name Surname</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup>
            <FormControl aria-label="Text input with radio button" />
            <FormControl aria-label="Text input with radio button" />
            <InputGroup.Prepend>
              <InputGroup.Radio aria-label="Radio button for following text input" />
            </InputGroup.Prepend>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save suggestions</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Suggestions;
