import { useEffect, useState } from 'react';
import useToken from '../context/TokenContext';
import Logout  from './Logout';
import CheckToken from '../auth/CheckToken';
import usePeople from '../hooks/usePeople';
    
const People = () => {
  const {people, error, isLoading} = usePeople();
 return (
    <main>
      <h2>People List</h2>
      {/* <Logout /> */}
      {/* <CheckToken /> */}
      {!isLoading && !error && 
     ( <ul>
        {people?.map(({name}) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    )}
    </main>
  );
}

export default People;

 




//TODO: add the Logout button
//TODO: add the check for authorization
