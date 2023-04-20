import TextField from "@mui/material/TextField";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import useEditPeople from "../hooks/useEditPeople";
import dayjs from "dayjs";
import useDeletePeople from "../hooks/useDeletePeople";

const EditPeople = ({ data, setEditPeople, setAddPeople }) => {
  // call endpoint save people
  const [body, setBody] = React.useState(data);
  const isEdit = data ? true : false;
  const title = isEdit ? `Edit People ${data.name}` : "Add People";
  console.log("people pass from list", data);
  const { refetch } = useEditPeople(isEdit, body);
  const { refetch: deletePeople } = useDeletePeople(data?._id);

  const personEdit = async () => {
    console.log("body is " + body);
    await refetch();
    setEditPeople && setEditPeople(undefined);
    setAddPeople && setAddPeople(false);
  };

  const handleDelete = async () => {
    console.log("delete triggered ", data?._id);
    await deletePeople();
    setEditPeople && setEditPeople(undefined);
  };

  return (
    <div>
      <h1>{title}</h1>
      <TextField
        required
        id="outlined-required"
        label="Name"
        className="name"
        defaultValue={data?.name}
        onChange={(event) => setBody({ ...body, name: event.target.value })}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="DOB"
            id="date"
            defaultValue={data?.dob ? dayjs(data.dob) : null}
            onChange={(event) =>
              setBody({
                ...body,
                dob: event.format("YYYY-MM-DDTHH:mm:ss"),
              })
            }
          />
        </DemoContainer>
      </LocalizationProvider>
      <Button variant="contained" onClick={personEdit}>
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

export default EditPeople;
