import React, { useState, useEffect } from "react";
//import HelloReact from "./components/React";
import useFetchUsers from "./useFetchUsers";
import { Container } from "react-bootstrap"
import User from "./User"
import SearchForm from "./SearchForm";

function App() {
  const [params, setParams] = useState({})
  const [page] = useState(1)
  const { users, loading, error } = useFetchUsers(params, page)
  const [ filteredEmployees, setFilteredEmployees ] = useState(users);
  const [filterToUse , setFilterToUse]= useState("EmployeeName");
  useEffect(()=>{
    setFilteredEmployees(users)
  },[users])
  
  
  function handleFilterValueChange(e){
    console.log("handleFilterValueChange called.")
    const param = e.target.name
    const value = e.target.value    
    
    console.log(`params to add: ${param} ${value}`)    
    if (filterToUse === "EmployeeName"){
      setFilteredEmployees(
      users.filter(person =>
         person.name.first === value
         || person.name.last === value
      ))
    }

    if (filterToUse === "Location"){
      setFilteredEmployees(users.filter(person => person.location.city === value))
    }

    console.log("Total employee count: " + users.length)
    console.log("Filtered employee count: " + filteredEmployees.length)
  }

  function handleFilterChange (e){
    console.log("handleFilterChange called.")    
    setFilterToUse(e.target.value) ;
    console.log(`Filter to use: ${filterToUse}`);
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4 p-3 text-center bg-info text-white">Employee Directory</h1>
      <SearchForm params={params} onFilterChange={handleFilterChange} onFilterValueChange={handleFilterValueChange}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {filteredEmployees.map(user => {
        // console.log(user)
        return <User key={user.email} user={user} />        
      })}
    </Container>
  )
}

export default App;
