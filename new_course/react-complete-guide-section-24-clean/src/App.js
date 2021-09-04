import { Transition } from "react-transition-group";
import { useState } from "react";

import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";

import "./App.css";

function App() {
  const [showBlock, setShowBlock] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleBlock = () => {
    setShowBlock((prevState) => !prevState);
  };

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleBlockTiming = 1000;

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className="Button" onClick={toggleBlock}>
        Toggle
      </button>
      <Transition
        in={showBlock}
        timeout={toggleBlockTiming}
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log("onEnter")}
        onEntering={() => console.log("onEntering")}
        onEntered={() => console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
      >
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition>
      <br />
      <Modal show={modalIsOpen} closed={closeModal} />
      {modalIsOpen ? <Backdrop show={modalIsOpen} /> : null}
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
