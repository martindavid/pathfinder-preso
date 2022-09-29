import type { NextPage, NextPageContext } from "next";
import styles from "../../styles/Home.module.css";
import { Layout } from "../../components/Layout";
import Link from "next/link";

interface User {
  id: number;
  name: string;
}

const DataDetail: NextPage<{ user: User }> = ({ user }) => {
  return (
    <Layout>
      <h1 className={styles.title}>Detail</h1>
      <h2>Name: {user.name}</h2>
      <Link href="/route1">Back</Link>
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const response = await fetch("http://localhost:3000/api/data");
  const users = await response.json();
  const user = (users as User[]).find(
    (user: User) => user.id === Number(query.id as string)
  );
  console.log({ user });
  return {
    props: {
      user,
    },
  };
}

export default DataDetail;
