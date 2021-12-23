import "./App.css";
import AddItem from "./core/AddItem";
import NavBar from "./core/NavBar";
import SubmitButton from "./core/SubmitButton";
import SupplyList from "./core/SupplyList";
import WorkerForm from "./core/WorkerForm";
import React, { useRef } from "react";

function App() {
  const button = useRef();

  return (
    <div className="App">
      <NavBar />
      <WorkerForm buttonRef={button} />
      <SupplyList />
      <div className="submitButtonDiv">
        <div className="d-grid gap-2">
          <SubmitButton ref={button} />
        </div>
      </div>
      <AddItem />
    </div>
  );
}

export default App;
