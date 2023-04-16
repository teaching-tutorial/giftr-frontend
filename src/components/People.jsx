import { useEffect, useState } from 'react';
import { useToken } from '../context/TokenContext';
import Logout  from './Logout';
import CheckToken from '../auth/CheckToken';


export default function People() {
  const [people, setPeople] = useState([]);
  const [token, setToken] = useToken();

  useEffect(() => {
    //pretend to fetch data
    const url = `https://random-data-api.com/api/v2/users?size=10`;
    let request = new Request(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    /* 
    let req = new Request(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(person)
      )};
    */
    
    //TODO: include the authentication token in the header
    //TODO: add header for json uploads

    fetch(request)
      .then((resp) => {
        if (resp.status === 401) throw new Error('Unauthorized access to API.');
        if (!resp.ok) throw new Error('Invalid response.');
        return resp.json();
      })
      .then((data) => {
        setPeople(
          data.map((item) => ({
            _id: item.uid,
            name: item.first_name + ' ' + item.last_name,
          }))
        );
      })
      .catch(console.warn);
  }, []);

  return (
    <main>
      <h2>People List</h2>
      <Logout />
      <CheckToken />
      <ul>
        {people.map((person) => (
          <li key={person._id}>{person.name}</li>
        ))}
      </ul>
    </main>
  );
}

//TODO: add the Logout button
//TODO: add the check for authorization
