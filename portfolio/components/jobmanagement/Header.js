import React from "react";

export default function Header() {
  return (
    <div className="Project2Page1-Container">
      <div className="Project2Page1-Container1">
        <motion.div
          className="box"
          ref={ref1}
          initial="hidden"
          variants={boxVariant}
          animate={control1}
        >
          <div>
            {/* {console.log("project5 : " + Project5)} */}
            <img src={Project5} alt="" className="home_image" />
          </div>
        </motion.div>
        <motion.div
          className="box"
          ref={ref2}
          initial="hidden"
          variants={boxVariant}
          animate={control2}
        >
          <div className="Project2Page1-Container3">
            <h2>Production Scheduler</h2>
            <h3>JOB MANAGEMENT PLATFORM</h3>
            <p className="parat">Country: India</p>
            <p className="para">Technologies : React, Node.js, PostgreSQL</p>
            <p className="para">Time together: 6 months till now</p>
            <p className="para">Team : 1 PM, 0.5 BA, 2 developers, 1 QA</p>
            {/* <p className="para">
              <img src="./image/arrow.png" alt="" className="home_image61" />
            </p> */}
          </div>
        </motion.div>
      </div>
      {/* </div> */}
    </div>
  );
}
