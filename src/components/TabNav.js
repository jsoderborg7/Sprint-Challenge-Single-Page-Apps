import React from "react";
import { Tab, Menu, Icon, MenuItem } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
  return(
    <div>
      <Menu>
      <Menu.Item>
          <NavLink exact to="/" className="nav-links">Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/character" className="nav-links">Characters</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/location" className="nav-links">Locations</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/episode" className="nav-links">Episodes</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  )
}


