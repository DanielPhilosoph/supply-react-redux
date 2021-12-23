import "./App.css";
import AddItem from "./core/AddItem";
import NavBar from "./core/NavBar";
import SubmitButton from "./core/SubmitButton";
import SupplyList from "./core/SupplyList";
import WorkerForm from "./core/WorkerForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WorkerForm />
      <SupplyList />
      <SubmitButton />
      <AddItem />
    </div>
  );
}

export default App;
