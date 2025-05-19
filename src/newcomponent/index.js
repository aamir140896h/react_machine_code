import { Card, Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const MyNewcomponent = async () => {
  const [myResponse, setMyResponse] = useState([]);
  const response = await axios.get(
    `https://reqres.in/api/users?per_page=6&page=1`
  );
  setMyResponse();
  console.log(response, "response");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            width: "100x",
            height: "100px",
            border: "1px solid black",
            backgroundColor: "grey",
          }}
        >
          My comonent
        </Card>
      </Grid>
    </Grid>
  );
};

export default MyNewcomponent;
