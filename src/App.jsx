import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import People from "./components/People";
import LoginSaveToken from "./components/LoginSaveToken";
import EditPeople from "./components/EditPeople";
import Header from "./components/Header";
import Gift from "./components/Gift";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/people" element={<People />} />
      <Route path="/gift/:id" element={<Gift />} />
      <Route path="/login/savetoken" element={<LoginSaveToken />} />
    </Routes>
  );
};

export default App;
