import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const SurveyItem = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#181818",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"18px"}>
          Aanwezig 3 Maart?
        </Typography>
        <FormControlLabel
          control={<Checkbox color="secondary" checked={true} />}
          label="Wel"
          sx={{ marginTop: "10px" }}
        />
        <FormControlLabel control={<Checkbox checked={false} />} label="Niet" />
      </Box>
      <Box
        sx={{
          backgroundColor: "#181818",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"18px"}>
          Aanwezig 3 Maart?
        </Typography>
        <FormControlLabel
          control={<Checkbox color="secondary" checked={true} />}
          label="Wel"
          sx={{ marginTop: "10px" }}
        />
        <FormControlLabel control={<Checkbox checked={false} />} label="Niet" />
      </Box>
    </>
  );
};

export default SurveyItem;
