import React from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'

const Navbar = () => {

  return (
    <div className='navbar'>
      <span className="logo">Chats</span>
      <div className="user">
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar