import TextField from '@mui/material/TextField';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';

const EditPeople = ({people}) => {
    
    // call endpoint save people
    const personEdit = () => {
        const name = document.getElementsByClassName('name').value;
        // const dob = Document.getElementsById('dob').value;
        console.log(name);

    }
    return (
        <div>
<TextField
          required
          id="outlined-required"
          label="Name"
          className="name"
          
        />
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="DOB" id="date"/>
      </DemoContainer>
    </LocalizationProvider>
    <Button variant="contained" onClick={personEdit}>Save</Button>
    <Button variant="contained">Delete</Button>
    </div>
    
    )

}

export default EditPeople;