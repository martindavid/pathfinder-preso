import type { NextPage, NextPageContext } from "next";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";
import Link from "next/link";

interface User {
  id: number;
  name: string;
}

const RouteOne: NextPage<{ users: User[] }> = ({ users }) => {
  return (
    <Layout>
      <h1 className={styles.title}>Route One</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/data/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const response = await fetch("http://localhost:3000/api/data");
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}

export default RouteOne;
