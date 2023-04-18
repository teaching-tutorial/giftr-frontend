import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import People from "./components/People";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/people" element={<People />} />
    </Routes>
  );
};

export default App;
