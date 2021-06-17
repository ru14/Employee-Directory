import React from "react";
import { Container } from "react-bootstrap";
import HelloReact from "./components/React";
import useFetchUsers from "./useFetchUsers";

function App() {
  const {users, loading, error} = useFetchUsers()
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      <h1>{users.length}</h1>
    </Container>
  )
}

export default App;
