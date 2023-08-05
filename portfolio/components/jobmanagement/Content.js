import React from "react";

export default function Content() {
  return (
    <div className="Project3Page1-Container">
      <div className="Project3Page1-Container-Content">
        <div className="Project3Page1-Container-Content1">
          <motion.div
            className="box"
            ref={ref1}
            initial="hidden"
            variants={boxVariant}
            animate={control1}
          >
            <h1> OVERVIEW</h1>
          </motion.div>
          <motion.div
            className="box"
            ref={ref1}
            initial="hidden"
            variants={boxVariant}
            animate={control1}
            // className="parat1"
          >
            <p className="parat1">
              The Production Scheduler is a web based application aims to
              address the operational challenges faced by a manufacturing client
              through the development of a comprehensive software application.
              The client currently relies on a manual system for managing
              machine operations and productivity tracking, which is inefficient
              and prone to errors.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref2}
            initial="hidden"
            variants={boxVariant}
            animate={control2}
            // className="parat1"
          >
            <p className="parat1">
              To enhance efficiency, accuracy, and decision-making, our team
              developed the Production Scheduler application. This user-friendly
              solution enables machine operators to plan, schedule, and monitor
              jobs, while providing real-time dashboards and report generation
              capabilities.
            </p>
          </motion.div>
          <p className="parat1">&#160;</p>

          {/* <p className="para">&#160;</p> */}

          <motion.div
            className="box"
            ref={ref3}
            initial="hidden"
            variants={boxVariant}
            animate={control3}
          >
            <h1>
              {/* <span ></span> */}
              PURPOSE AND NEED
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref4}
            initial="hidden"
            variants={boxVariant}
            animate={control4}
          >
            <p className="parat1">
              The manufacturing client operates a wide range of machines within
              their factory, each responsible for producing different tools.
              However, the manual process of managing these machines and
              tracking their productivity hampers operational efficiency. The
              client approached our company seeking a solution that would
              automate and streamline these processes.
            </p>
          </motion.div>
          <motion.div
            className="box"
            ref={ref5}
            initial="hidden"
            variants={boxVariant}
            animate={control5}
          >
            <p className="parat1">
              In response, we developed the Production Scheduler application to
              empower machine operators to efficiently plan and schedule jobs,
              monitor machine statuses, and generate insightful reports. By
              replacing the manual system, the application improves
              productivity, accuracy, and overall operational performance.
            </p>
          </motion.div>
          <p className="parat1">&#160;</p>

          <motion.div
            className="box"
            ref={ref6}
            initial="hidden"
            variants={boxVariant}
            animate={control6}
          >
            <h1>
              {/* <span id="work">                </span> */}
              WORKFLOW
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref7}
            initial="hidden"
            variants={boxVariant}
            animate={control7}
          >
            <p className="parat1">
              The Production Scheduler application revolutionizes the client's
              workflow by providing a centralized platform for managing machine
              operations and productivity tracking. Machine operators can
              utilize the application to plan and schedule jobs, assign specific
              tools to individual machines, and make adjustments as needed.
            </p>
          </motion.div>

          <p className="parat1">&#160;</p>

          <motion.div
            className="box"
            ref={ref8}
            initial="hidden"
            variants={boxVariant}
            animate={control8}
          >
            <h1>
              {/* <span ></span> */}
              TECHNOLOGY
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref9}
            initial="hidden"
            variants={boxVariant}
            animate={control9}
          >
            <p className="parat1">
              The application's real-time dashboard offers comprehensive
              visibility into machine statuses, enabling operators to monitor
              progress effectively. Furthermore, the application facilitates
              report generation, providing valuable insights for analysis,
              performance evaluation, and informed decision-making.
            </p>
          </motion.div>

          <p className="parat1">&#160;</p>

          <motion.div
            className="box"
            ref={ref10}
            initial="hidden"
            variants={boxVariant}
            animate={control10}
          >
            <h1>
              {/* <span ></span> */}
              STRUCTURE AND FEATURES
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref11}
            initial="hidden"
            variants={boxVariant}
            animate={control11}
          >
            <p className="parat1">
              The Production Scheduler application is structured to provide
              seamless and efficient management of machine operations. Key
              features include:
            </p>
          </motion.div>

          <motion.div
            className="box"
            ref={ref12}
            initial="hidden"
            variants={boxVariant}
            animate={control12}
          >
            <div className="List1">
              <ul>
                <ol>
                  1. Job Planning and Scheduling: Machine operators can easily
                  plan and schedule jobs, assigning specific tools to individual
                  machines and making adjustments as necessary.
                </ol>
                <ol>
                  2. Real-time Dashboard: The application offers a comprehensive
                  dashboard, providing real-time updates on machine statuses,
                  such as running, idle, or stopped.
                </ol>
                <ol>
                  3. Data Visualization: Machine data is presented in an
                  intuitive and visually appealing manner, enabling operators to
                  monitor productivity trends and identify bottlenecks.
                </ol>
                <ol>
                  4. Report Generation: The application allows users to generate
                  detailed reports based on the collected machine data,
                  facilitating analysis, performance evaluation, and informed
                  decision-making.
                </ol>
              </ul>
            </div>
          </motion.div>
          <p className="parat1">&#160;</p>
          <motion.div
            className="box"
            ref={ref13}
            initial="hidden"
            variants={boxVariant}
            animate={control13}
          >
            <img src="./image/project1.png" alt="" className="image" />
          </motion.div>

          <p className="parat1">&#160;</p>

          <motion.div
            className="box"
            ref={ref14}
            initial="hidden"
            variants={boxVariant}
            animate={control14}
          >
            <h1>
              {/* <span id="res"></span> */}
              RESULTS
            </h1>
          </motion.div>

          <motion.div
            className="box"
            ref={ref15}
            initial="hidden"
            variants={boxVariant}
            animate={control15}
          >
            <p className="parat1">
              After the successful release of the product, our team continues to
              work on the project, provide support and work with feedback to
              improve the functionality of Production Scheduler.
            </p>
          </motion.div>
        </div>
        <div className="Project3Page1-Container-Content1"></div>
      </div>
      {/* <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible,
          }}
        > */}
      <div className="Project3Page-Container1-Content">
        <motion.div
          className="box"
          ref={ref16}
          initial="hidden"
          variants={boxVariant}
          animate={control16}
        >
          <h1>THESE ARE SOME OF OUR PERFECT MATCHES</h1>
        </motion.div>

        <motion.div
          className="box"
          ref={ref17}
          initial="hidden"
          variants={boxVariant}
          animate={control17}
        >
          <p className="para">
            We are burning not only with cool projects, but also with the people
            behind them. And a perfect team match truly matters. Our clients are
            our partners, co-authors, and friends at all project stages. Here
            are some examples of times when CandorBees became a best-fit
            teammate for our customers.
          </p>
        </motion.div>
      </div>
      {/* </motion.div> */}
    </div>
  );
}
