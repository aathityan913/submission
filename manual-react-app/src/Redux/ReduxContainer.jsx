import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import LoginForm from "../components/ReduxFormComponents/LoginFormRedux";
import DisplayFormData from "../components/ReduxFormComponents/DisplayFormRedux";
import "./ReduxContainer.css";

const ReduxContainer = () => {
  return (
    <Provider store={store}>
      <div className="redux-container">
        <div className="form-section">
          <LoginForm />
        </div>
        <div className="display-section">
          <DisplayFormData />
        </div>
      </div>
    </Provider>
  );
};

export default ReduxContainer;
