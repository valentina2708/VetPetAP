import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Pets from "./components/pages/Pets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
          <Route path="/pets" exact element={<Pets />}></Route>
        </Routes>
      </BrowserRouter>

    
    </>
  );
}

export default App;
