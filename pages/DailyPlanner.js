import { Nav, Table } from "react-bootstrap";
import TopNavbar from "./components/TopNavbar";
import WeeklyScheduler from 'react-week-scheduler';
import 'react-week-scheduler/react-week-scheduler.css';

function DailyPlanner() {
  return (
    <div>
      <TopNavbar />
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="./DailyPlanner">DAILY PLANNER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="./Suggestions">SUGGESTIONS</Nav.Link>
        </Nav.Item>
      </Nav>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th> </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Suggestions</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Hotel</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Restaurant</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Museum</td>
          </tr>
        </tbody>
      </Table>
     


    </div>
    

  );

 


}

export default DailyPlanner;



  


 