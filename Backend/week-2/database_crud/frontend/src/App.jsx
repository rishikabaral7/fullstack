import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "./graphql/queries";

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (data) {
    console.log("data",data);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data.getTasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
};

export default App;