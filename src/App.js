import React, {useState}from "react";
//import HelloReact from "./components/React";
import useFetchUsers from "./useFetchUsers";
import { Container } from "react-bootstrap"
import User from "./User"


function App() {
  const [params, setParams]= useState({})
  const [page, setPage]= useState(1)
  const {users, loading, error} = useFetchUsers(params, page)
  return(
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {users.map(job => {
        return <User key={user.id} user={user}/>
      })}
    </Container>
  )
}

export default App;
