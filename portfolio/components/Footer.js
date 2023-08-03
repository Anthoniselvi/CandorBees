import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Footer.module.css";
const Footer = () => {
  const [ishovered, setIsHovered] = useState(false);
  return (
    <div className="HomePage3-Container">
      <div className="HomePage3-Container-Content">
        <div className="HomePage3-Container1-Content">
          <h1>
            <span id="get"></span>
            LET’S MAKE IT TOGETHER
          </h1>

          <form className="my-form">
            <div className="my-form-input">
              <label>Name</label>
              <input required type="text" name="name" />
            </div>
            <div className="my-form-input">
              <label>Email</label>
              <input required type="email" name="email" />
            </div>
            <div className="my-form-input">
              <label>Message</label>
              <textarea required name="message" />
            </div>
            <button
              className="HomePage3-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {ishovered ? (
                <div className="submit-btn">
                  Submit{" "}
                  <ArrowRightAltIcon
                    className="right-arrow"
                    sx={{ fontSize: "35px" }}
                  />
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <div className="HomePage3-Container2-Content">
          <p className="para3">
            WE’RE HERE
            <br />
            14, Ekambaram Street, Chitlapakkam, Chennai 600064.
          </p>
          <p className="para">
            WORKING HOURS
            <br />
            From 9 am to 8 pm(UTC+5.30)
          </p>
          <p className="para">
            DROP US A LINE
            <br />
            <a href="mailto:srilekha.rajasekar@gmail.com">
              <span className="font">srilekha.rajasekar@gmail.com</span>
            </a>
            <br />
            +91 9176856135
          </p>
          <p className="para">
            <a href="https://www.linkedin.com/company/candorbees/">
              {/* <LinkedInIcon sx={{ fontSize: "35px" }} /> */}LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
