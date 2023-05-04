import "./Navbar.css"
import {Burger, Close} from "../../icons/index.js"
import {useEffect, useState} from "react";
import classNames from "classnames";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const burgerIcon = document.querySelector('.burger-wrapper')

    const handleClick = () => {
      setMenuOpen(!menuOpen)
    }

    burgerIcon.addEventListener('click', handleClick)

    return () => {
      burgerIcon.removeEventListener('click', handleClick)
    }
  })

  const headerTopClasses = classNames('header-top', {'mobile-menu': menuOpen})
  const burgerClasses = classNames('burger-menu', {'hide': menuOpen})
  const closeClasses = classNames('close-menu', {'hide': !menuOpen})
  const subscribeClasses = classNames('subscribe', {'mobile-menu': menuOpen})

  return (
    <div className="header">
      <div className="wrapper">
        <div className={headerTopClasses}>
          <h2>Code Better</h2>
          <div className="burger-wrapper">
            <div className={burgerClasses}>
              <Burger />
            </div>
            <div className={closeClasses}>
              <Close />
            </div>
          </div>
          <div className={subscribeClasses}>
            <p className="subscribe-text">3,000+ engineers community worldwide</p>
            <div className="subscribe-button">Subscribe</div>
          </div>
        </div>

        <ul className="navbar">
          <li>Typescript</li>
          <li>React Native</li>
          <li>Gatsby</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar