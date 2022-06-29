import React from "react";
import { useNavigate} from 'react-router-dom';
import { Box,Typography,IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const NotFound = () => {

    const navigate = useNavigate();

    const back =()=>{
        navigate("/");
      }

  return (

    <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'100vh'
    }}>
        <Typography variant="h2"> 404 </Typography>
        <Typography variant="body2"> Sorry, the word you are looking for could not be found. </Typography>
    <IconButton onClick={back}>
      <ArrowBackIcon/>

    </IconButton>
    </Box>
    );
  };
export default NotFound;
