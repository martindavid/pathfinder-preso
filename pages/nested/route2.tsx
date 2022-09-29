import type { NextPage, NextPageContext } from "next";
import { Layout } from "../../components/Layout";
import styles from "../../styles/Home.module.css";

interface User {
  id: number;
  name: string;
}

const RouteTwo: NextPage<{ users: User[] }> = ({ users }) => {
  return (
    <Layout>
      <h1 className={styles.title}>Route Two</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const response = await fetch("http://localhost:3000/api/data");
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}

export default RouteTwo;
