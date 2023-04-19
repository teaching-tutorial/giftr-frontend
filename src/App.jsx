import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import People from "./components/People";
import LoginSaveToken from "./components/LoginSaveToken";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/people" element={<People />} />
      <Route path="/login/savetoken" element={<LoginSaveToken />} />
    </Routes>
  );
};

export default App;
