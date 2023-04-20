import { useNavigate } from "react-router-dom";
import useToken from "../context/TokenContext";

export default function Logout() {
  const navigate = useNavigate();
  const { removeToken } = useToken();

  function doLogout() {
    removeToken();
    //navigate to the login route
    navigate("/");
  }

  return (
    <>
      <button onClick={doLogout}>Logout</button>
    </>
  );
}
