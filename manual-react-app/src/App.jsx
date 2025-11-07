import React from "react";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Thoughts from "./components/Thoughts";
import TodoList from "./components/TodoList";
import FIX_ERROR_01 from "./components/FIX_ERROR_01";
import ItemPacking from "./components/itemPacking";
const App = () => {
  return (
    <div
      className=""
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        marginTop: "50px",
        lineHeight: "1.6",
      }}
    >
      <Greeting />
      <Welcome />
      <Thoughts />
      <TodoList />
      FIXED THE ERROR OF THE EXISING CODE
      <FIX_ERROR_01/>
      PACKAGE LIST
      <ItemPacking/>
      <br></br>
     
      
    </div>

    


  );
};

export default App;
