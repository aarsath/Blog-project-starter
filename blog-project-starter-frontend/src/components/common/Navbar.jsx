import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
function Navbar() {
  const navigate = useNavigate()
  const [log,setlog] =useState(false)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setlog(true)
        console.log('User is logged in:', user);
      } else {
        setlog(false)
        console.log('User is logged out');
      }
    }, []);})
    function handleLogout() {
      signOut(auth)
        .then(() => {
          console.log('User logged out successfully');
        });}


    return (
      <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Personal</h2>
        <div className='flex items-center'>
          <Link className='list-none px-5' to={"/home"}>Home</Link>
          <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
          <Link className='list-none px-5' to={"/about"}>About</Link>
          
          {log ? (
            <button className='button-style hidden md:block ' onClick={handleLogout}>Logout</button>
          ) : (
            <button className='button-style hidden md:block ' onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </div>
    )
  }

export default Navbar