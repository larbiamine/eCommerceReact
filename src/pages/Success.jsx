import React from 'react'
import {useLocation} from "react-router"

function Success() {
    const location = useLocation();
    console.log(location);
  return (
    <div>Success</div>
  )
}

export default Success