import { Link } from 'react-router-dom';
import './login-logout.css';

function LoginLogout() {
  return (
    <div className="login">
     <p>Login Page</p>
    <Link to="/people-list"> 
    <button>Login</button>
    </Link>
    </div>
  );
}

export default LoginLogout;