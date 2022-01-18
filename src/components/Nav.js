import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../styles/Nav.css'
import toothImg from '../images/tooth.png'

const Nav = () => {
    return (
            <nav>
            <img className="logo" src={toothImg} height="40" alt="logo"></img>
            <h1 className="main-title">Tandartsenpraktijk Den Brugge</h1>
            <ul>
                <li>
                <Link 
                    to="/"
                >Home</Link>
                </li>
                <li>
                <Link to="/calendar">Calendar view</Link>
                </li>
                <li>
                <Link to="/day">Day view</Link>
                </li>
            </ul>
            </nav>
  )
}

export default Nav