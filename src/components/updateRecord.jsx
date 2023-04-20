import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, TextField, Button } from '@mui/material';
import axios from 'axios';

const EditRecord = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8082/api/records/${id}`)
      .then(res => setRecord(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdateRecord = () => {
    axios.put(`http://localhost:8082/api/updateRecords/${id}`, record)
      .then(res => {
        console.log(res.data);
        navigate('/records');
      })
      .catch(err => console.log(err));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="date"
          label="Date"
          variant="outlined"
          fullWidth
          value={record.date || ''}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={record.email || ''}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="corporatename"
          label="Corporate Name"
          variant="outlined"
          fullWidth
          value={record.corporatename || ''}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="servicename"
          label="Service Name"
          variant="outlined"
          fullWidth
          value={record.servicename || ''}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="postalcode"
          label="Postal Code"
          variant="outlined"
          fullWidth
          value={record.postalcode || ''}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="amount"
          label="Amount"
          variant="outlined"
          fullWidth
          value={record.amount || ''}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="mobile"
          label="Mobile"
          variant="outlined"
          fullWidth
          value={record.mobile || ''}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleUpdateRecord}>Update</Button>
      </Grid>
    </Grid>
  );
};

export default EditRecord;
