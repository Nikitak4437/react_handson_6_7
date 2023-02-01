import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentDetails(props) { 
  const navigate = useNavigate();
  
  
  return (<>
  <h1>EMPLOYEE FEED BACK DATA</h1>
  <button
        onClick={() => {
          navigate("/student");
        }}
        type="button"
      >
        Add New Student
      </button>

          <div className="row">
            {props.detailsList.map((details, i) => (
              <p key={i}>
                Name : {details.name} | Department {details.department} | Rating
                :{details.rating}  <Link to={"/editDetails/"+i} state={{data:i}}>Edit</Link> | <Link to={"/delete/"+i}>Delete</Link>
              </p>
            ))}
          </div>
          </>);
}
