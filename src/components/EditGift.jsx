import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import useEditGift from "../hooks/useEditGift";
import useDeleteGift from "../hooks/useDeleteGift";

const EditGift = ({ peopleId, data, setEditGift, setAddGift }) => {
  // call endpoint save people
  const [body, setBody] = React.useState(data);
  const isEdit = data ? true : false;
  const title = isEdit ? `Edit Gift ${data.txt}` : "Add Gift";
  const { refetch } = useEditGift(peopleId, isEdit, body);
  const { refetch: deleteGift } = useDeleteGift(data?._id, peopleId);

  const handleEdit = async () => {
    await refetch();
    setEditGift && setEditGift(undefined);
    setAddGift && setAddGift(false);
  };

  const handleDelete = async () => {
    console.log("delete triggered ", data?._id);
    await deleteGift();
    setEditGift && setEditGift(undefined);
  };

  return (
    <div>
      <h1>{title}</h1>
      <TextField
        required
        id="outlined-required"
        label="Txt"
        className="name"
        defaultValue={data?.txt}
        onChange={(event) => setBody({ ...body, txt: event.target.value })}
      />
      <TextField
        required
        id="outlined-required"
        label="Store"
        className="name"
        defaultValue={data?.store}
        onChange={(event) => setBody({ ...body, store: event.target.value })}
      />
      <TextField
        required
        id="outlined-required"
        label="Url"
        className="name"
        defaultValue={data?.url}
        onChange={(event) => setBody({ ...body, url: event.target.value })}
      />
      <Button variant="contained" onClick={handleEdit}>
        Save
      </Button>
      {isEdit && (
        <Button variant="contained" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </div>
  );
};

export default EditGift;
