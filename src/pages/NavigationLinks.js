import { Outlet, Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/studentDetails">Student</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavigationLinks;
