import React from "react";
import {useNavigate, useLocation} from 'react-router-dom'

const NotFound = ()=>{
  let navigate = useNavigate()
  navigate()
  useLocation()
  return(
   <div>NotFound</div>
  )
}

export default NotFound