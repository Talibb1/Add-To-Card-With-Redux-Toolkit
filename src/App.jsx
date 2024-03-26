import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CardDetails from "./Components/Cards/CardDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cards" element={<CardDetails />} />
      
      </Routes>
    </>
  );
};

export default App;
