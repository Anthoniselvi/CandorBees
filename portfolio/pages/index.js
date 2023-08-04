import Head from "next/head";
import Header from "@/components/Header";
import styles from "../styles/Home.module.css";
import Projects from "@/components/Projects";
import WorkingWayAndStock from "@/components/WorkingWayAndStock";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Candorbees</title>
        {/* <meta name="description" content="Best" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Projects />
      <WorkingWayAndStock />
      <Teams />
    </div>
  );
}
