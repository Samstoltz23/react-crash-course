import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from "../components/User.jsx"
import { Link } from "react-router-dom";
function Home(){
  const [Users, setUsers] = useState([])
  
  async function fetchUsers(){
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data)
    console.log(data)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, [])

  const pixels = "2px";

  return(
    <div>
      {Users.map((user) => (
        <Link to={`/${user.id}`}>
         <User 
          key={user.id}
          id={user.id} 
          name={user.name} 
          email={user.email} 
          username={user.username} 
        /> 
        </Link>
        
      ))}
    </div> 
  ) ;
}

export default Home