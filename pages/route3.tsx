import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

const RouteThree: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const data = await response.json();

      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h1 className={styles.title}>Route Three</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default RouteThree;
