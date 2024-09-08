import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations </li>
                <li> Legal Notices</li>
                <li>Help Center</li>
                <li> Jobs</li>
                <li> Cookies Preference</li>
                <li>Gift Cards</li>
                <li>Terms Of Use</li>
                <li> Corporate Information</li>
                <li>Media Center</li>
                <li> Privacy</li>
                <li> Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="service_code">
            <p>Service Code </p>
          </div>
          <div className="copy_write"> &copy;1997-2024 Netflix,inc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
