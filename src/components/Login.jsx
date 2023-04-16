import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useToken } from '../context/TokenContext';

function Login() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useToken();

  useEffect(() => {
    //check for token in querystring
    const urlToken = searchParams.get('token');
    console.log(urlToken);
    if (urlToken) {
      setToken(urlToken); //put the token in state and sessionStorage
      navigate('/people'); //now send the user
    }
    //check if token already exists in context
    if (token) {
      navigate('/people');
    }
  }, []);

  function doLogin() {
    //user clicked the login button
    const redirect = `http://localhost:5173/`;
    const baseURL = `https://render.xyz/api/auth/google?redirect_url=${redirect}`;
    //location.href = baseURL;
    alert('We are pretending to go to ' + baseURL);
    alert('Google will send us back to ' + redirect);
    location.href = redirect + '?token=' + crypto.randomUUID();
  }

  return (
    <div>
      <button onClick={doLogin}>Login</button>
    </div>
  );
}

export default Login;


/*

/ - Login <login>
/people - <People>

/people/add/ <PersonForm />
/people/:id/ <PersonForm />
/people/edit/:id/ <PersonForm />

/people/form/ <PersonForm /> 
usePerson 
{
  _id: "dfdgdhjghjk",
  name: "John Smith",
  dob: 1245645433
}

/people/:pid/gifts/
/:pid/gifts/
/gifts/:pid/
//for the gifts component

2 repo for the project steve's and tim's
netlify for react
render for api

*/