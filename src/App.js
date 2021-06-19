import React from "react";
//import HelloReact from "./components/React";
import useFetchUsers from "./useFetchUsers";
import { Container } from "react-bootstrap"


function App() {
  const {users, loading, error} = useFetchUsers()
  return(
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {users && <h1>{users.length}</h1>}
    </Container>
  )
}

export default App;
