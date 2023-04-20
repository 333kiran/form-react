import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid,styled } from '@mui/material';
import postService from '../services/api';



const GridBox = styled(Grid)`
  width:1000px;
  margin:2rem 2rem;
`;

const ButtonGrid = styled(Grid)`
 margin:1rem;
 display:flex;
`;

const ButtonBox = styled(Button)`
 margin-right:2rem;
`;



function CreateRecord() {


  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [corporateName, setCorporateName] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [amount, setAmount] = useState('');
  const [mobile, setMobile] = useState('');
  const [attachment, setAttachment] = useState('');



  const navigate = useNavigate();

  

   const handleFormSubmit = async(e) => {
     e.preventDefault();
    const formData = new FormData();
    formData.append('date', date);
    formData.append('email', email);
    formData.append('corporateName', corporateName);
    formData.append('serviceName', serviceName);
    formData.append('postalCode', postalCode);
    formData.append('amount', amount);
    formData.append('mobile', mobile);
    formData.append('attachment', attachment);

    const response = await postService.create(formData);
        console.log(response);
     
    e.target.reset();

    };

  

  const handleRecordsButtonClick = () => {
    navigate('/records');
  };

  return (
    <form  onSubmit={handleFormSubmit}>
    <GridBox container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date"
          name="date"
          type='date'
          required
          onChange={(e) => setDate(e.target.value)}

          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Corporate Name"
          name="corporateName"
          required
          onChange={(e) => setCorporateName(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Service Name"
          name="serviceName"
          required
          onChange={(e) => setServiceName(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Postal Code"
          required
          name="postalCode"
          onChange={(e) => setPostalCode(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Amount"
          required
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Mobile"
          name="mobile"
          required
          onChange={(e) => setMobile(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          type="file"
          name="attachment"

         onChange={(event) => setAttachment(event.target.files[0])}
          fullWidth
        />
      </Grid>
      <ButtonGrid item xs={12}>
      <ButtonBox type="submit" variant="contained" color="primary">
            Submit
          </ButtonBox>
          <Button variant="contained" color="secondary" onClick={handleRecordsButtonClick}>
             Records
          </Button>
        </ButtonGrid>
      </GridBox>
      </form>
    
  )
}

export default CreateRecord;
