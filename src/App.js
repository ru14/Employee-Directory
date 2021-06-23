import React, { useState } from "react";
//import HelloReact from "./components/React";
import useFetchUsers from "./useFetchUsers";
import { Container } from "react-bootstrap"
import User from "./User"
import SearchForm from "./SearchForm";

function App() {
  const [params, setParams] = useState({})
  const [page] = useState(1)
  const { users, loading, error } = useFetchUsers(params, page)

  function handleParamChange(e){
    const param = e.target.name
    const value = e.target.value
    setParams(prevParams =>{
      return{...prevParams, [param]: value}
    })
  }


  return (
    <Container className="my-4">
      <h1 className="mb-4 p-3 text-center bg-info text-white">Employee Directory</h1>
      <SearchForm params={params} onParamChange={handleParamChange}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {users.map(user => {
        console.log(user)
        return <User key={user.id} user={user} />
      })}
    </Container>
  )
}

export default App;
