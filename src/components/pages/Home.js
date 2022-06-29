import { Box,Typography,FilledInput, IconButton } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
const Home = () => {

    const [word,setWord]= useState("");
    const navigate = useNavigate();
    const onSubmit =(e)=>{
        e.preventDefault();
        const trimWord= word.trim().toLowerCase();
        if(!trimWord ) return;
        navigate(`/search/`+trimWord);
    }


  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'100vh'
    }}>
        <img src={"/book.png"} alt="d1" />
        <Typography sx={{fontFamily:'Mulish',fontWeight:'600',mt:2 }} variant='h4'> Dictionary </Typography>
        <Typography sx={{fontFamily:'Mulish'}} > Find meanings and save for quick. </Typography>

        <Box>
            <form onSubmit={onSubmit}>
        <FilledInput 
        value={word}
        onChange={e=>setWord(e.target.value)}
        disableUnderline sx={{mt:2 ,backgroundColor:'white',borderRadius:2 ,'& .MuiFilledInput':{
            padding:2,
        }}} 
        startAdornment={<SearchIcon color="disabled" />} />
            </form>
        </Box>
        <Link to={"../bookmarks"}>
        <IconButton>
            <BookmarkIcon sx={{
               backgroundColor:'#DC687C',
                borderRadius:2,
                p:1,
                color:'white'
            }} fontSize="large" />
        </IconButton>
        </Link>
        
    </Box>
  )
};

export default Home;
