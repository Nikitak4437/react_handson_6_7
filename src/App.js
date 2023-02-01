import { useState } from "react";
import "./App.css";
import Forms from "./forms";
function App() {
  const [detailsList, setDetailsList] = useState([]);
  const [handelDiv, setHandelDiv] = useState(false);
  const add_details = (details,index) => {
    // console.log(index);
    console.log("Add functon call " + index);
    if(index==null || index=='undefined'){
      console.log("addd");
      setDetailsList([...detailsList, details]);
      // setHandelDiv(true);
    }else{
      detailsList[index].name = details.name;
      detailsList[index].department = details.department;
      detailsList[index].rating = details.rating;
      console.log("update");
      // var temp = detailsList;
      // temp[index]=details;
      // setDetailsList(temp);
    }
    console.log(details);
    
  };
  return (
    <div className="App">
      {handelDiv ? (
        <>
          <h1>EMPLOYEE FEED BACK DATA</h1>
          <div className="row">
            {detailsList.map((details, i) => (
              <p key={i}>
                Name : {details.name} | Department {details.department} | Rating
                :{details.rating}
              </p>
            ))}
          </div>
          <button
            onClick={() => {
              setHandelDiv(false);
            }}
            type="button"
          >
            GO BACK
          </button>
        </>
      ) : (
        <>
          <Forms add_details={add_details} />
        </>
      )}
    </div>
  );
}
export default App;
