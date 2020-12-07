import React, { useState } from 'react'
import UsersList from './UsersList'

export default function Home(){

    const [click , setClick] = useState(false)
   
   function handleClick(){
       setClick(true);
   }
    function UserL(){
       
     if(click)
       return <UsersList/>
       else
       return <h1> click is false</h1>
    }
    return(
   <div>
    <h1>Home Page</h1>
    
    <button onClick ={handleClick} >abc</button>
   <UserL/>
    
   </div>

)}
