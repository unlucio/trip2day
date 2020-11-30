
import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import Link from "next/link";

var daysDiff = dateDiffInDays(new Date(), new Date());

function dateDiffInDays(date1, date2) {
    
    return Math.round((date2-date1)/(1000*60*60*24));
}


function Calendar() {
    return (
      <div>
        <TopNavbar />
        <Header />
        <button onClick=""> </button>
      </div>
    );
  }

  export default Calendar;
