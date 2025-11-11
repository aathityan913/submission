import React, { useState } from "react";
import "./MainDashboard.css";
import Greeting from "./components/Greeting";
import Welcome from "./components/props";
import ScientistList from "./components/ScientistList";
import FormComponent from "./components/FormComponent";
import DisplayComponent from "./components/DisplayComponent";
import Thoughts from "./components/Thoughts";
import TodoList from "./components/TodoList";
import FIX_ERROR_01 from "./components/FIX_ERROR_01";
import ItemPacking from "./components/itemPacking";
import Popup from "./components/popup/popup";
import Parent from "./components/parentChild/parent";
import Modal from "./components/Modal/Modal";
import TimeColorApp from "./components/TimeColorPicker/TimeColorApp";
import ReduxContainer from "./Redux/ReduxContainer";
import { FaClipboardList, FaLightbulb, FaUserAlt } from "react-icons/fa";

const MainDashboard = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [popups, setPopups] = useState({
    popup1: { show: false, count: 0 },
    popup2: { show: false, count: 0 },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (data) => setSubmittedData(data);

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
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <h2>React Dash</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>Greeting</li>
            <li>Welcome</li>
            <li>Thoughts & Todo</li>
            <li>Form & Display</li>
            <li>Popups</li>
            <li>Modal</li>
            <li>Time & Color Picker</li>
            <li>Redux</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="dashboard-content">
        {/* Top Navbar */}
        <header className="dashboard-topbar">
          <h1>Dashboard</h1>
          <div className="user-info">
            <FaUserAlt /> <span>Aathityan</span>
          </div>
        </header>

        {/* Greeting & Welcome */}
        <section className="dashboard-cards">
          <div className="card card-full gradient1">
            <FaLightbulb className="card-icon" />
            <Greeting />
          </div>
          <div className="card card-full gradient2">
            <FaUserAlt className="card-icon" />
            <Welcome name="Aathityan" />
          </div>
        </section>

        {/* Thoughts & TodoList */}
        <section className="dashboard-cards">
          <div className="card gradient3">
            <Thoughts />
          </div>
          <div className="card gradient4">
            <TodoList />
          </div>
        </section>

        {/* FIX_ERROR_01 & ItemPacking */}
        <section className="dashboard-cards">
          <div className="card gradient5">
            <FIX_ERROR_01 />
          </div>
          <div className="card gradient6">
            <ItemPacking />
          </div>
        </section>

        {/* Form, Display, Scientist List */}
        <section className="dashboard-cards dashboard-grid">
          <div className="card gradient1">
            <h2><FaClipboardList /> Form</h2>
            <FormComponent setFormData={handleFormSubmit} />
          </div>
          <div className="card gradient2">
            <h2><FaClipboardList /> Submitted Data</h2>
            <DisplayComponent data={submittedData} />
          </div>
          <div className="card gradient3">
            <h2><FaClipboardList /> Scientist List</h2>
            <ScientistList />
          </div>
        </section>

        {/* Popups */}
        <section className="dashboard-section">
          <h2>Popups</h2>
          <div className="card card-full gradient4">
            <button className="btn btn-primary" onClick={() => handlePopup("popup1", true)}>
              Open Popup 1 (Pressed {popups.popup1.count} times)
            </button>
            <Popup
              show={popups.popup1.show}
              onClose={() => handlePopup("popup1", false)}
              title="Hello World Popup 1"
            >
              <p>This is Popup 1</p>
            </Popup>
            <Parent />
            <button className="btn btn-primary" onClick={() => handlePopup("popup2", true)}>
              Open Popup 2 (Pressed {popups.popup2.count} times)
            </button>
            <Popup
              show={popups.popup2.show}
              onClose={() => handlePopup("popup2", false)}
              title="Hello World Popup 2"
            >
              <p>This is Popup 2</p>
            </Popup>
          </div>
        </section>

        {/* Modal */}
        <section className="dashboard-section">
          <h2>Modal</h2>
          <div className="card card-full gradient5">
            <button className="btn btn-success" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </button>
            {isModalOpen && (
              <Modal onClose={() => setIsModalOpen(false)}>
                <h2>Hello from the Modal!</h2>
                <p>This is rendered using a portal in the modal root.</p>
              </Modal>
            )}
          </div>
        </section>

        {/* TimeColor Picker */}
        <section className="dashboard-section">
          <h2>Time & Color Picker</h2>
          <div className="card card-full gradient6">
            <TimeColorApp />
          </div>
        </section>

        {/* Redux Section */}
        <section className="dashboard-section">
          <h2>Redux Components</h2>
          <div className="card card-full gradient1">
            <ReduxContainer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainDashboard;
