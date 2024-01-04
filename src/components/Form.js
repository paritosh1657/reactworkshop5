import React, { useState } from 'react';
import { Button, DialogTitle, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';

const MyForm = () => {


  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
  });
  const [open, setOpen]= useState(false);

  const handleChange = (e) => {
    console.log(formData)
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setOpen(true)
  };
  const handleClose = ()=>{
    setOpen(false)
  }
  return (
    <>
    <Box display={'flex'} border={'4px solid black'} flexDirection={'column'} >


    <form onSubmit={handleSubmit} >
      <label>
        First Name:
        <TextField id="filled-basic" label="First Name" variant="filled" 
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

      </label>

      <label>
        Last Name:
        <TextField id="filled-basic" label="Last Name" variant="filled" 
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <TextField id="filled-basic" label="Email" variant="filled" 
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <Button variant="contained" type='submit' >Submit</Button>
    </form>
    </Box >
  
    <Dialog open={open}>
      <DialogTitle>Details</DialogTitle>
      <Typography>First Name: {formData.firstName}</Typography>
      <Typography>First Name: {formData.lastName}</Typography>
      <Typography>Email: {formData.email}</Typography>
      <Button variant="contained" onClick={handleClose} >Exit</Button>
    </Dialog>
    </>
  );
};

export default MyForm;
