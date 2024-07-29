import React from 'react'
import './assets/header.css'

const Header = () => {
  return (
    <>
    <header>
        <div className="log">Shan</div>
        <nav>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
        <div className="mode">Mode</div>
      </header>
    </>
  )
}

export default Header