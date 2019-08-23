import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
const Nav = props => (
  <NavLink exact {...props} activeClassName="active" />
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const homeLabel = createLabel("home", "Home Page")
const charLabel = createLabel("users", "Characters")
const locationsLabel = createLabel("users", "Locations")
const episodesLabel = createLabel("users", "Episodes")

const panes = [
  {menuItem: <Menu.item key="home" as={Nav} to={`/`} content={homeLabel} />},
  {menuItem: <Menu.item key="characters" as={Nav} to={`/`} content={charLabel} />},
  {menuItem: <Menu.item key="locations" as={Nav} to={`/`} content={locationsLabel} />},
  {menuItem: <Menu.item key="episodes" as={Nav} to={`/`} content={episodesLabel} />}
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />
export default TabNav;

