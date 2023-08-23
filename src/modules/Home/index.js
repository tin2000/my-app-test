import { useEffect, useState } from "react";
import ListUser from "../../components/ListUser";

function Home() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const json = await response.json();
      setUsers(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ListUser user={users} getData={getData} />
    </>
  );
}

export default Home;
