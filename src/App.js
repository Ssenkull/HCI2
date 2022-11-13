import { useState } from "react";
import ContentModal from "./components/ContentModal/ContentModal";
import "./App.css";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const manageModalHandler = () => {
    setIsModalOpen((curState) => !curState);
  };

  return (
    <div className="wrapper">
      <ReactNotifications />
      {isModalOpen && <ContentModal onClose={manageModalHandler} />}
      {!isModalOpen && (
        <button onClick={manageModalHandler}> Open form </button>
      )}
    </div>
  );
}

export default App;
