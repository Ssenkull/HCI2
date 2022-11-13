import Card from "../UI/Card";

import { HelpCircle } from "react-feather";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

import classes from "./Help.module.css";

const Help = (props) => {
  const notifyFn = (title, message, width = 250) => {
    return function () {
      props.onNotify(title, message, width);
    };
  };

  const menuClassName = ({ state }) =>
    state === "opening"
      ? classes.menuOpening
      : state === "closing"
      ? classes.menuClosing
      : classes.menu;

  return (
    <Card>
      <Menu
        menuButton={<button className={classes.button}>Help</button>}
        menuClassName={menuClassName}
      >
        <MenuItem
          className={classes.item}
          onClick={notifyFn(
            `About`,
            `It's an app where you can see using context menus and other features! `,
            350
          )}
        >
          <HelpCircle className={classes.icon} size={16}></HelpCircle> About
          <span> Ctrl + A</span>
        </MenuItem>
      </Menu>
    </Card>
  );
};

export default Help;
