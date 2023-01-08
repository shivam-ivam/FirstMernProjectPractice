import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <nav>
        <Link to="/">home</Link><br/>
        <Link to="/login">login</Link><br/>
        <Link to="/signin">signin</Link><br/>
        <Link to="/secret">secret</Link><br/>
    </nav>
    </>
  )
}
