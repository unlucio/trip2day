import TopNavBar from "./TopNavbar";
import Header from "./Header";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Link from "next/link";
import { AddCardViaggio } from "./addCardViaggio";

function NewTrip() {
  return (
    <div>
      <TopNavBar />
      <Header />

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Choose your destination"
          aria-label="Choose your destination"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <Link href="./Suggestions">Send request of suggestions</Link>
          </Button>
          <AddCardViaggio />
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default NewTrip;
