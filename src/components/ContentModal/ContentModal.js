import Modal from "../UI/Modal";
import File from "./File";
import Help from "./Help";

import "react-notifications-component/dist/theme.css";
import "animate.css";

import { Store } from "react-notifications-component";

import classes from "./ContentModal.module.css";
import { useCallback, useEffect, useState } from "react";
import ContextMenu from "./ContextMenu";

const onNotificationCall = (title, message, width = 250) => {
  Store.addNotification({
    title: title || "Title",
    message: message || "Notify message",
    type: "info",
    container: "top-right",
    insert: "top",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 2000,
      showIcon: true,
    },
    width: width,
  });
};

const ContentModal = (props) => {
  const [show, setShow] = useState(false);
  const [isMessageAvailable, setIsMessageAvailable] = useState(true);
  const [isEditShow, setIsEditShow] = useState(false);
  const [isFormatShow, setIsFormatShow] = useState(false);

  useEffect(() => {
    console.log(isMessageAvailable);
  }, [isMessageAvailable]);

  const onExit = () => {
    props.onClose();
  };

  const onMessageAvailableChange = () => {
    setIsMessageAvailable((curState) => !curState);
  };

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setShow(true);
    },
    [setShow]
  );

  const keydownHandler = (e) => {
    e.preventDefault();
    if (e.keyCode === 77 && e.ctrlKey && isMessageAvailable) {
      onNotificationCall(`Just my message`, `Just my text to my message `);
      return;
    }

    if (e.keyCode === 67 && e.ctrlKey) {
      onMessageAvailableChange();
      return;
    }
    if (e.keyCode === 69 && e.ctrlKey) {
      onExit();
      return;
    }
    if (e.keyCode === 65 && e.ctrlKey) {
      onNotificationCall(
        `About`,
        `It's an app where you can use context menus and other features! `,
        350
      );
      return;
    }
    if (e.keyCode === 65) {
      setIsEditShow((curState) => !curState);
      setIsFormatShow(false);
      return;
    }
    if (e.keyCode === 67 && isEditShow) {
      setIsFormatShow((curState) => !curState);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  });

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);
  return (
    <Modal onClose={props.onClose}>
      <div
        className={classes.modal}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
      >
        {show && (
          <ContextMenu
            onNotify={onNotificationCall}
            onExit={onExit}
            onCheck={onMessageAvailableChange}
            isMessageAvailable={isMessageAvailable}
          />
        )}
        <File
          onNotify={onNotificationCall}
          onExit={onExit}
          onCheck={onMessageAvailableChange}
          isMessageAvailable={isMessageAvailable}
        />
        {isEditShow && !isFormatShow && <button> Edit </button>}
        {isFormatShow && isEditShow && <button> Format </button>}
        <Help onNotify={onNotificationCall} />
        {/* <Notification /> */}
      </div>
    </Modal>
  );
};

export default ContentModal;
