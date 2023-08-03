import Image from "next/image";
import styles from "@/styles/Projects.module.css";
const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>THESE ARE SOME OF OUR PERFECT MATCHES</h1>

        <p className="para">
          We are driven not only by exciting projects but also by the people who
          bring them to life. Our clients are not just clients; they are our
          partners, collaborators, and friends throughout all stages of the
          project. Let's take a look at some instances where CandorBees proved
          to be the ideal teammate for our valued customers.
        </p>
      </div>

      <div className={styles.container1}>
        <div className={styles.container2}>
          {/* <img src={Project5} alt="" className="home_image" /> */}
          <Image
            src="/image/project5.png"
            width="200"
            height="200"
            alt=""
            className={styles.home_image}
          />
          <div className={styles.container3}>
            <p className="para">Production Scheduler</p>
            <h3>JOB MANAGEMENT PLATFORM</h3>
            <p className="parat">Country: India</p>
            <p className="para">Technologies : React, Node.js, PostgreSQL</p>
            <p className="para">Time together: 6 months till now</p>
            <p className="para">
              <Image src="/image/arrow.png" alt="" width="20" height="20" />
              {/* <img src={Arrow} alt="" className="home_image1" /> */}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container1a}>
        <div className={styles.container2}>
          <Image src="/image/project1.png" width="200" height="200" alt="" />
          {/* <img src={project1} alt="" className="home_image" /> */}

          <div className={styles.container3}>
            <p className="para">Santa Surprise</p>
            <h3>A GIFT EXCHANGE PROGRAM</h3>
            <p className="parat">Country: India</p>
            <p className="para">Technologies: React, Node.js, MongoDB</p>
            <p className="para">Time together: 3 months till now</p>
            <p className="para">
              <Image src="/image/arrow.png" alt="" width="20" height="20" />
              {/* <img src={Arrow} alt="" className="home_image1" /> */}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.button}>EXPLORE MORE CASES</div>
    </div>
  );
};

export default Projects;
