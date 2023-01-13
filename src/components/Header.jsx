import { MdMovie } from "react-icons/md";
import {  NavLink } from "react-router-dom";

const Header = function () {
  // let activeStyle = {
  //   textDecoration: "underline",
  // };
  return (
    <header>
       <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ?  undefined:"NavLink"
            }
          >
      <h1>
        Movies & Series <MdMovie />
      </h1>
            
          </NavLink>
      {/* <Link to='/' >
      
      </Link> */}
    </header>
  );
};

export default Header;
