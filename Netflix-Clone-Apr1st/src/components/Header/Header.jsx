import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            {/* <li> 
               <img src={Netflixlogo} alt="Netflix logo" width="100" /> 
            </li>  */}
            <li>Home </li>
            <li>TVShow </li>
            <li>Movies</li>
            <li>New & Popular </li>
            <li>MyList</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />{" "}
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxOutlinedIcon />
            </li>
            <li>
              <ArrowDropDownOutlinedIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
