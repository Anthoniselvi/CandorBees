import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
// import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  //   const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* <div className={styles.callButton}> */}
        <div className={styles.text}>CANDORBEES</div>
        {/* </div> */}
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>WHAT WE DO</li>
          </Link>
          <li className={styles.listItem}>PROJECTS</li>
          <li className={styles.listItem}>TEAM</li>
          <li className={styles.listItem}>GET IN TOUCH</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
