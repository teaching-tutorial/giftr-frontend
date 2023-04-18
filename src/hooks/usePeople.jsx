import { useState } from "react";
import useToken from "../context/TokenContext";
import { useQuery } from "react-query";

const usePeople = () => {
  const { token } = useToken();
  console.log("usePeople token: ", token);
  const {
    data: people,
    error,
    isLoading,
  } = useQuery("people", () => fetchPeople(token));

  return { people, error, isLoading };
};

const fetchPeople = async (token) => {
  //TODO move url to config
  const url = `http://localhost:3001/api/person`;
  const request = new Request(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const response = await fetch(request);
  const json = await response.json();
  const { data: people } = json;
  console.log(people);
  return people;
  // return response.json().map(({ data }) => data);
  // console.log(response.json);
  // return response.json();
};

export default usePeople;

// useEffect(() => {
//   //pretend to fetch data
//     //const url = `https://random-data-api.com/api/v2/users?size=10`;
//   const url = `http://localhost:3001/api/person`;
//   const request = new Request(url, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//   });
//   const {data, error} = useQuery("people", fetchPeople);
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
//   fetch(request)
//     .then((resp) => {
//       if (resp.status === 401) throw new Error('Unauthorized access to API.');
//       if (!resp.ok) throw new Error('Invalid response.');
//       return resp.json();
//     })
//     .then((data) => {
//       setPeople(
//         data.map((item) => ({
//           _id: item.uid,
//           name: item.first_name + ' ' + item.last_name,
//         }))
//       );
//     })
//     .catch(console.warn);
// }, []);
