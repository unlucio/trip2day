import { Image, Modal, Button, Nav, FormControl, InputGroup, Dropdown} from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import { useState } from "react";

function Suggestions() {
  function renderSuggestion() {
    return museumSuggestions.map((museumSuggestions, index) => {
      const { Author, sug } = museumSuggestions;
      //return <h1>{Author}</h1>;
      console.log(Author);
    });
  }

  const museumSuggestions = [
    {
      id: 1,
      Author: "A",
      sug: "Louvre",
    },
    {
      id: 2,
      Author: "B",
      sug: "Musei Vaticani",
    },
    {
      id: 3,
      Author: "C",
      sug: "British Museum",
    },
  ];

  function handleChange(event) {
    setValue(event.target.value);
  }
  const [value, setValue] = useState("");

  return (
    <div>
      <TopNavbar />

      <p>Ti serve un suggerimento? Scegli tra queste categorie:</p>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onChange={handleChange} onclick={renderSuggestion()}>Museums</Dropdown.Item>
          <Dropdown.Item>Restaurants</Dropdown.Item>
          <Dropdown.Item>Hotels</Dropdown.Item>
          <Dropdown.Item>Best places to discover</Dropdown.Item>
          <Dropdown.Item>Tours to takes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
    </div>
  );
}

export default Suggestions;
