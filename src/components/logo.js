import React from "react"
import { Link } from "gatsby"
import logotipo from "../../static/assets/logo-80.svg"

const Logo = props => (
  <div className="site-logo">
    {/* <Link to="/">{props.title}</Link> */}
    <Link to="/">
      <img src={logotipo} alt="Logo" width="45%" />
    </Link>
  </div>
)

export default Logo
