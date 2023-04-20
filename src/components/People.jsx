import { useEffect, useState } from "react";
import useToken from "../context/TokenContext";
import Logout from "./Logout";
import CheckToken from "../auth/CheckToken";
import usePeople from "../hooks/usePeople";
import { Link } from "react-router-dom";
import EditPeople from "./EditPeople";
import dayjs from "dayjs";
import Header from "./Header";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EditIcon from '@mui/icons-material/Edit';


const People = () => {
  const [editPeople, setEditPeople] = useState();
  const [addPeople, setAddPeople] = useState(false);
  const { people, error, isLoading } = usePeople(editPeople, addPeople);

  return (
    <>
      <Header />
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
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        {people?.map((data) => (
          <ListItem disablePadding>
            <ListItemButton>
              
              <ListItemText primary={data?.name} /> <br />
              <div className="peopleList">{data?.dob && <p>{dayjs(data?.dob)?.format("MMMM D")}</p>}</div>
            <ListItemIcon>
                <CardGiftcardIcon/>
            </ListItemIcon>
            <ListItemIcon>
                <EditIcon/>
            </ListItemIcon>
              </ListItemButton>
          </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
      
    </Box>
    </>
  );
};

export default People;

//TODO: add the Logout button
//TODO: add the check for authorization
