import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useGift from "../hooks/useGift";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EditIcon from "@mui/icons-material/Edit";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import EditGift from "./EditGift";
import HeaderGift from "./HeaderGift";

const Gift = () => {
  const { id: peopleId } = useParams();
  const [editGift, setEditGift] = useState();
  const [addGift, setAddGift] = useState(false);
  console.log(peopleId);
  const { gift, isLoading, error } = useGift(peopleId, editGift, addGift);

  return (
    <>
      <HeaderGift setAddGift={setAddGift} />
      {!editGift && !addGift && !isLoading && !error && (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              {gift?.map((data) => (
                <ListItem key={data._id} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={data?.txt} /> <br />
                    <div className="peopleList">
                      {data?.dob && <p>{dayjs(data?.dob)?.format("MMMM D")}</p>}
                    </div>
                    <ListItemIcon></ListItemIcon>
                    <ListItemIcon>
                      <EditIcon onClick={() => setEditGift(data)} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
          <Divider />
        </Box>
      )}
      {editGift && (
        <EditGift
          peopleId={peopleId}
          data={editGift}
          setEditGift={setEditGift}
        />
      )}
      {addGift && <EditGift peopleId={peopleId} setAddGift={setAddGift} />}
    </>
  );
};

export default Gift;
