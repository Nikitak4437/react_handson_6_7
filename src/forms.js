import React, { useRef, useState } from "react";

const Forms = (props) => {
  const [details, setDetails] = useState({
    name: "",
    department: "",
    rating: "",
  });
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
              //value={details.name}
              onChange={(event) => updateInput(event, "name")}
            />
          </label>
          <br />
          <label>
            Department :
            <input
              className="department"
              //     value={details.department}
              onChange={(event) => updateInput(event, "department")}
            />
          </label>
          <br />
          <label>
            Rating :
            <input
              className="rating"
              // value={details.rating}
              onChange={(event) => updateInput(event, "rating")}
            />
          </label>
          <br />
          <button
            onClick={() => {
              props.add_details(details);
              setDetails({
                name: "",
                department: "",
                rating: "",
              });
              refForm.current.reset();
            }}
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Forms;
