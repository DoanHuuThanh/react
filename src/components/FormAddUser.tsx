import React, { useState } from "react";
import { User } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function FormAddUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { loading, error }] = useMutation(User);

  const addUser = async () => {
    try {
      const { data } = await createUser({
        variables: {
          input: {
            email: email,
            password: password,
          },
        },
      });

      // Handle success, e.g., show a success message or redirect
      console.log("User created successfully:", data.createUser.user);
    } catch (error: any) {
      // Handle error
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={addUser} disabled={loading}>
        {loading ? "Creating User..." : "Create User"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default FormAddUser;
