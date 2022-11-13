import classes from "./ContextMenu.module.css";

import { Send, LogOut, CheckCircle } from "react-feather";

const ContextMenu = (props) => {
  const notifyFn = (title, message) => {
    return function () {
      if (!props.isMessageAvailable) return;
      props.onNotify(title, message);
    };
  };

  return (
    <ul className={classes.menu}>
      <li
        className={classes.item}
        onClick={notifyFn(
          `Just contextMenu message`,
          `Just my text to my contextMenu message `
        )}
      >
        <Send className={classes.icon} size={16}></Send> Message
        <span> Ctrl + M</span>
      </li>
      <li className={classes.item} onClick={props.onCheck}>
        <CheckCircle className={classes.icon} size={16}></CheckCircle> Check
        <span> Ctrl + C</span>
      </li>
      <li className={classes.item} onClick={props.onExit}>
        <LogOut className={classes.icon} size={16} />
        Exit
        <span> Ctrl + E</span>
      </li>
    </ul>
  );
};
export default ContextMenu;
