import React from "react"
import layoutStyles from "./layout.module.css"
import NavLink from "../components/navLink"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layoutParent}>
      <aside>
        <nav>
          <NavLink destination="/" name="home" />
        </nav>
      </aside>

      {children}
    </div>
  )
}
