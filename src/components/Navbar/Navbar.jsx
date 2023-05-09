import "./Navbar.css"
import {Burger, Close} from "../../icons/index.js"
import {useEffect, useState} from "react";
import classNames from "classnames";
import {ProgressBar} from "../index.js";
import { motion, useScroll } from "framer-motion"

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

  const [ lastYPos, setLastYPos ] = useState()
  const [ shouldShowActions, setShouldShowActions ] = useState(true)

  useEffect(() => {
    let lastYPos = window.scrollY;
    const handleScroll = () => {
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos

      setShouldShowActions(isScrollingUp)
      setLastYPos(yPos => yPos);
      lastYPos = yPos;
    }

    window.addEventListener("scroll", handleScroll, false)

    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [lastYPos])

  return (
    <div className="header">
      <ProgressBar />
      <div className="wrapper">
        <motion.div
          className={headerTopClasses}
          initial={{
            height: 80,
            opacity: 1
          }}
          animate={{
            height: shouldShowActions ? 80 : 0,
            opacity: shouldShowActions ? 1 : 0
          }}
          transition={{ opacity: {duration: .3} }}

        >
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
        </motion.div>

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