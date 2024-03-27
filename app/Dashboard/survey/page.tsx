import SurveyItem from "@/app/components/ui/survey/SurveyItem";
import SurveyModal from "@/app/components/ui/survey/SurveyModal";
import { Box, Button } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '2rem', 
      flexDirection: 'column', gap: '10px', width: '80%' }}
    >
      <Box sx={{justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end'}}>
        <SurveyModal />
      </Box>
      <form className="flex flex-col w-full h-10 text-white mt-5 gap-3">
        <SurveyItem />
      </form>
    </Box>
    
  );
};

export default page;
