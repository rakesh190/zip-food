import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between border-solid border-2 border-black p-4 m-4">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-blue-600 visited:text-purple-600">
            Online Status: {onlineStatus ? "✅" : "🛑"}
          </li>
          <li className="px-4 text-blue-600 visited:text-purple-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-blue-600 visited:text-purple-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-blue-600 visited:text-purple-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-blue-600 visited:text-purple-600">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-blue-600 visited:text-purple-600">
            {loggedInUser}
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
