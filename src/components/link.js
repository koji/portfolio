import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <AniLink
      cover bg="#218dff"
      className="nav-link"
      to={to}
      activeStyle={{
        color: "white",
      }}
      style={{
        color: "grey",
      }}
    >
      {children}
    </AniLink>
  )
}
