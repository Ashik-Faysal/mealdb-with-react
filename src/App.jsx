import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
      <Header />
      <Body />

      <button className="btn btn-warning" onClick={notify}>
        Toast Button
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
