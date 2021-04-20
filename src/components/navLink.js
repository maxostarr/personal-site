import React from "react"
import { Link } from "gatsby"
import Styles from "./navLink.module.css"
import ArrowRight from "../../assets/keyboard_arrow_right-24px.svg"
const NavLink = ({ destination, name }) => {
  return (
    <div>
      <ArrowRight />
      <Link to={destination} className={Styles.link}>
        {" "}
        {name}{" "}
      </Link>
    </div>
  )
}

export default NavLink
