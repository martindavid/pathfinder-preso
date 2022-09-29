import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </Layout>
  );
};

export default Home;
