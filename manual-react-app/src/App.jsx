import React, { useState } from "react";
import "./App.css"; // import the CSS
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import TodoList from "./components/TodoList";
import FIX_ERROR_01 from "./components/FIX_ERROR_01";
import ItemPacking from "./components/itemPacking";
import Popup from "./components/popup/popup"; 
import Parent from './components/parentChild/parent';

const App = () => {
  const [popups, setPopups] = useState({
    popup1: { show: false, count: 0 },
    popup2: { show: false, count: 0 },
  });

  const handlePopup = (popupKey, isOpen) => {
    setPopups((prev) => ({
      ...prev,
      [popupKey]: {
        ...prev[popupKey],
        show: isOpen,
        count: isOpen ? prev[popupKey].count + 1 : prev[popupKey].count,
      },
    }));
  };

  return (
    <div className="app-container">
      <div className="component-box" style={{height:"100%"}}><Greeting/></div>
      <div className="component-box" style={{height:"100%"}}><Welcome /></div>
      <div className="component-box">
        <Thoughts />
        <TodoList/>
        </div>
      <div className="component-box"><FIX_ERROR_01 /></div>
      <div className="component-box"><ItemPacking /></div>

      <div className="component-box">
        <h1>React Popup (Button Shows Click Count)</h1>

        <button
          className="popup-button"
          onClick={() => handlePopup("popup1", true)}
        >
          Open HelloWorld Popup 1 (Pressed {popups.popup1.count} times)
        </button>

        <Popup
          show={popups.popup1.show}
          onClose={() => handlePopup("popup1", false)}
          title="Hello World Popup 1"
        >
          <p>Hello World - This is Popup 1</p>
        </Popup>
        <Parent/>
        <button
          className="popup-button"
          onClick={() => handlePopup("popup2", true)}
        >
          Open HelloWorld Popup 2 (Pressed {popups.popup2.count} times)
        </button>

        <Popup
          show={popups.popup2.show}
          onClose={() => handlePopup("popup2", false)}
          title="Hello World Popup 2"
        >
          <p>Hello World - This is Popup 2</p>
        </Popup>
      </div>
    </div>
  );
};

export default App;
