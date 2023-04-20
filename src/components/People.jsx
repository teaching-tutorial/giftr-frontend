import { useEffect, useState } from "react";
import useToken from "../context/TokenContext";
import Logout from "./Logout";
import CheckToken from "../auth/CheckToken";
import usePeople from "../hooks/usePeople";
import { Link } from "react-router-dom";
import EditPeople from "./EditPeople";
import dayjs from "dayjs";

const People = () => {
  const [editPeople, setEditPeople] = useState();
  const [addPeople, setAddPeople] = useState(false);
  const { people, error, isLoading } = usePeople(editPeople, addPeople);

  return (
    <>
      <Logout />
      <button onClick={() => setAddPeople(true)}>Add People</button>
      {!editPeople && !addPeople && (
        <main>
          <h2>People List</h2>
          {/* <Logout /> */}
          {/* <CheckToken /> */}
          {!isLoading && !error && (
            <ul>
              {people?.map((data) => (
                <li key={data?.name}>
                  <h3>{data?.name}</h3>
                  {data?.dob && <h3>{dayjs(data?.dob)?.format("MMMM D")}</h3>}
                  <button onClick={() => setEditPeople(data)}>Edit</button>
                  {/* <Link to="/add/gifts/">Edit Gift</Link> */}
                  {/* <button onClick={() => delete(id)} >Delete</button> */}
                </li>
              ))}
            </ul>
          )}
        </main>
      )}
      {editPeople && (
        <EditPeople data={editPeople} setEditPeople={setEditPeople} />
      )}
      {addPeople && <EditPeople setAddPeople={setAddPeople} />}
    </>
  );
};

export default People;

//TODO: add the Logout button
//TODO: add the check for authorization
