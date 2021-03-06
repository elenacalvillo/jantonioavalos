import React from "react";
import { Link } from "gatsby";
import { RiMenu3Line, RiCloseLine, RiExternalLinkLine } from "react-icons/ri";

const CV = "https://drive.google.com/file/d/1ZfNZ1HIsfiVUxY3YC9FSLt4bQMf6A0X6/view?usp=sharing";

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
    {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/resources",
    title: "Resources",
  },
  // {
  //   path: CV,
  //   title: "Resume",
  // }
];

const ListLink = (props) => (
  <li>
    {props.to == CV ?  //Make general, when ext links
      <a href={props.to} target="_blank">{props.children}<small> <RiExternalLinkLine className="label" /></small></a>
      : <Link to={props.to}>{props.children}</Link>
    }  
  </li>
);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showMenu: !state.showMenu,
    }));
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ));
    return (
      <nav className="site-navigation">
        <button
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <ul>{listMenuItems}</ul>
        {/* <Link to={CV} target="_blank" className="button -banner">
          <RiDownloadCloud2Line className="label" />
          Resume
        </Link> */}
      </nav>
    );
  }
}

export default Navigation;
