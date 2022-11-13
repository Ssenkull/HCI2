import Card from "../UI/Card";
import classes from "./File.module.css";

import { Send, LogOut, CheckCircle } from "react-feather";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

const File = (props) => {
  const notifyFn = (title, message) => {
    return function () {
      if (!props.isMessageAvailable) return;
      props.onNotify(title, message);
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
        menuButton={<button className={classes.button}>File</button>}
        menuClassName={menuClassName}
      >
        <MenuItem
          className={classes.item}
          onClick={notifyFn(`Just my message`, `Just my text to my message `)}
        >
          <Send className={classes.icon} size={16}></Send> Message
          <span> Ctrl + M</span>
        </MenuItem>
        <MenuItem className={classes.item} onClick={props.onCheck}>
          <CheckCircle className={classes.icon} size={16}></CheckCircle> Check
          <span> Ctrl + C</span>
        </MenuItem>
        <MenuItem className={classes.item} onClick={props.onExit}>
          <LogOut className={classes.icon} size={16} />
          Exit
          <span> Ctrl + E</span>
        </MenuItem>
      </Menu>
    </Card>
  );
};
export default File;
