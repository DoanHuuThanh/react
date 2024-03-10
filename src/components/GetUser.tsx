import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Data } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(Data);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data.getallUser)) { 
      setUsers(data.getallUser); 
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
      {users.map((user: any) => {
  return (
    <div key={user.id}>
      <p> {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
})}
      </div>
    </>
  );
}

export default GetUsers;
