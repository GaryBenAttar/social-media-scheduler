import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="register">Register</NavLink>
    </div>
  )
}

export default Navigation