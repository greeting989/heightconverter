import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';

export default function BoxSx() {
  return (
    <div className="boxdiv" style={{'display': 'flex',justifyContent:'center'}}>
      <Box
        sx={{
          width: 580,
          height: 500,
          backgroundColor: "#5E5B52",
        }}
        
      />
      
    </div>
  );
}
