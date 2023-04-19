import { useEffect, useState } from 'react';
import useToken from '../context/TokenContext';
import Logout  from './Logout';
import CheckToken from '../auth/CheckToken';
import usePeople from '../hooks/usePeople';
import { Link } from 'react-router-dom';
    
const People = () => {
  const {people, error, isLoading} = usePeople();
  // const delete = (id) => {
  //     // trigger api call 
  // };
 return (
    <main>
      <h2>People List</h2>
      {/* <Logout /> */}
      {/* <CheckToken /> */}
      {!isLoading && !error && 
     ( <ul>
        {people?.map(({_id: id, name}) => (
          <li key={name}>
            <h3>{name}</h3>
            <Link to={`/edit/people/${id}`}>Edit Person</Link>
            <Link to="/add/gifts/">Edit Gift</Link>
              {/* <button onClick={() => delete(id)} >Delete</button> */}
            </li>
          ))}
        </ul>
      )}
      </main>
    );
  }

  export default People;

 




//TODO: add the Logout button
//TODO: add the check for authorization
