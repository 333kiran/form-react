import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

const Records = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/records');
      setRecords(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewClick = (id) => {
    navigate(`/view/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/deleteRecords/${id}`);
      fetchRecords();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper} style={{width:1000,margin:'2rem 4rem'}}>
      <Table sx={{ minWidth: 650 }} aria-label="records table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Corporate Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record._id}>
              <TableCell component="th" scope="row">
                {record.date}
              </TableCell>
              <TableCell>{record.email}</TableCell>
              <TableCell>{record.mobile}</TableCell>
              <TableCell>{record.corporateName}</TableCell>
              <TableCell>{record.amount}</TableCell>
              <TableCell>
                <IconButton aria-label="view" onClick={() => handleViewClick(record._id)}>
                  View
                </IconButton>
                <IconButton aria-label="edit" onClick={() => handleEditClick(record._id)}>
                  Edit
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(record._id)}>
                  Delete
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Records;

