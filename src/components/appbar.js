import React from "react"
import Intent from "./link"

export default function Appbar() {
  return (
    <div className="container my-3">
      <ul className="nav justify-content-center">
        <li className="nav-item mx-3">
          <Intent to="/">Home</Intent>
        </li>
        <li className="nav-item mx-3">
          <Intent to="/projects">Projects</Intent>
        </li>
        <li className="nav-item mx-3">
          <Intent to="/oss">OSS</Intent>
        </li>
        <li className="nav-item mx-3">
          <Intent to="">
            <a href="https://drive.google.com/file/d/1_kEA--64uxtnpgAVuVvfTo_Gw2MCF0Mf/view?usp=sharing">CV</a>
          </Intent>
        </li>
      </ul>
    </div>
  )
}
