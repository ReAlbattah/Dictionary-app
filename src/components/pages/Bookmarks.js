import { Box,Typography,Stack, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Link} from 'react-router-dom';


const Bookmarks = ({bookmarks}) => {

  const navigate = useNavigate();

  const back =()=>{
    navigate(-1);
  }

  return(
    <Box p={2}>
    <Stack direction={"row"} alignItems="center" >
    <IconButton onClick={back}>
      <ArrowBackIcon sx={{color:'black'}}/>
    </IconButton>

    <Typography variant='h6' sx={{fontFamily:'Mulish',fontWeight:600, textTransform:'capitalize'}} > Bookmarks </Typography>


    </Stack>
    
    {
      Object.keys(bookmarks).map(b=>
        <Link key={b} to={`/search/`+b} style={{ textDecoration: 'none' }} >
        <Box sx={{
          p:2,
          cursor:'pointer',
          backgroundColor:'white',
          borderRadius:1,
          textTransform:'capitalize',
          mb:2,
          fontWeight:600,
          color:"black"
          }}>
         {b} 
        </Box> 
        </Link>
        )
    }
    </Box>
    
    )
};

export default Bookmarks;
