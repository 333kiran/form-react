import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {Typography,Grid,Card,CardContent,Button,} from "@mui/material";
import axios from "axios";

const ViewRecord = () => {
  const { id } = useParams();
  const [record, setRecord] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`http://localhost:8082/api/records/${id}`)
      .then((res) => setRecord(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              View Record
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Date: {record.date}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Email: {record.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Corporate Name: {record.corporateName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Service Name: {record.serviceName}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Postal Code: {record.postalCode}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Amount: {record.amount}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Mobile: {record.mobile}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Attachments: {record.attachments}
                </Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/edit/${id}`)}
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ViewRecord;

