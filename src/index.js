import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NavigationLinks from "./pages/NavigationLinks";
import Home from "./pages/Home";
// import Blogs from "./pages/Student";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Student from "./pages/Student";
import StudentDetails from "./pages/StudentDetails";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [detailsList, setDetailsList] = useState([
    {name:"Nikit Patil",department:"IT",rateing:"10"},{name:"Demo anme",department:"DEMO",rateing:"10"}]);

  const add_details = (details,index) => {
    console.log(details);
    console.log("Add functon call " + index);
    if(index==null || index=='undefined'){
      console.log("addd");
      setDetailsList([...detailsList, details]);
    }else{
      console.log("update");
      var temp = detailsList;
      temp[index]=details;
      setDetailsList(temp);
    }
    console.log(details);
    // setHandelDiv(true);
    
  };
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<NavigationLinks />}>
          <Route index element={<Home />} />
          <Route path="student" element={<Student add_details={add_details}  />} />
          <Route path="studentDetails" element={<StudentDetails detailsList={detailsList} />} />  
          <Route path="ContactUs" element={<Home name={"Contact Us"}/>} />
                  
          <Route path="editDetails/:id"  
          element={<Student  add_details={add_details} detailsList={detailsList} setDetailsList={setDetailsList} />}
        />        
        <Route path="delete/:id"
        element={<Home name={"Deleted"} detailsList={detailsList} setDetailsList={setDetailsList} />}
      />                            
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
