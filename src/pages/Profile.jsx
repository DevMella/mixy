import React from "react";
import {useParams} from 'react-router-dom'

const Profile = ()=>{
    let {user} = useParams()
    console.log(user);
    
  return(
   <div>{user}Profile</div>
  )
}

export default Profile