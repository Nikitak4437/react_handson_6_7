import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Student = (props) => {
  const { id } = useParams();   
  console.log(id);
  const navigate = useNavigate();

  // const location = useLocation(); // returns the location object 

  //returns the :id
// console.log(location);
  const [details, setDetails] = useState({
    name: "",
    department: "",
    rating: "",
  });
  useEffect(() => {
    if(id == null || id=="undefined"){
      console.log("ID NOT FOUND");
      setDetails({
        name: "",
        department: "",
        rating: "",
      });
    }else{
      console.log("ID FOUND");
      
        if(props.detailsList?.length>0){
    
        console.log("CALL ID CONDITION");
        console.log(props.detailsList);
        setDetails(props.detailsList[id]);
      }
      // console.log(props.detailsList.length);
    }
      
  }, []);

  const updateInput = (event, ch) => {
    details[ch] = event.target.value;
    setDetails(details);
  };
  const refForm = useRef(null);
  return (
    <div>
      <form ref={refForm}>
        <div>
          <h1>EMPLOYEE FORM HANDLING</h1>
          <label>
            Name :
            <input
              className="name"
              // value={details.name}
              defaultValue={details.name}
              onChange={(event) => updateInput(event, "name")}
            />
          </label>
          <br />
          <label>
            Department :
            <input
              className="department"
              defaultValue={details.department}

              //     value={details.department}
              onChange={(event) => updateInput(event, "department")}
            />
          </label>
          <br />
          <label>
            Rating :
            <input
              className="rating"
              defaultValue={details.rating}
              // value={details.rating}
              onChange={(event) => updateInput(event, "rating")}
            />
          </label>
          <br />
          <button
            onClick={() => {
              props.add_details(details,id);
              setDetails({
                name: "",
                department: "",
                rating: "",
              });
              refForm.current.reset();
              navigate("/studentDetails");
            }}
            type="button"
          >
            {(details.name=="")?"Add":"Update"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Student;
