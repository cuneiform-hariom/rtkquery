import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/studentlist">Student List</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
