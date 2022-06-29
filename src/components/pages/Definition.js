import { Box,Typography,Stack, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {useParams, useNavigate} from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect,useState, Fragment } from 'react';

// import AutoModeIcon from '@mui/icons-material/AutoMode';

const Definition = ({bookmarks,addBookmark,removeBookmark}) => {

 
  const {word} = useParams();
  const navigate = useNavigate();
  const [defintions,setDefinition]= useState([]);
  const [audio,setAudio]= useState(null);
  // const [loading, setLoading]= useState(true);


  const isBookmarked = Object.keys(bookmarks).includes(word);



  useEffect(()=>{
    const getDefinition = async ()=>{
      const request = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word);
      const data = await request.json();
      setDefinition(data);

      if (request.status === 404) {
        return navigate('/notfound');
      }

      const phonetics = data[0].phonetics;
      if(!phonetics.length)return;

      const url= phonetics[0].audio;
      setAudio(new Audio(url));

      
    }
    getDefinition();
  },[])

  const back =()=>{
    navigate(-1);
  }

  // if(loading) return <AutoModeIcon/>

  return(
  <Box p={2} >
  
  <Stack direction={"row"} justifyContent={"space-between"}>
    <IconButton onClick={back}>
      <ArrowBackIcon sx={{color:'black'}}/>
    </IconButton>

    <IconButton onClick={()=>isBookmarked ? removeBookmark(word): addBookmark(word,defintions)}>
      {isBookmarked ?<BookmarkIcon sx={{color:'black'}}/> : <BookmarkBorderIcon sx={{color:'black'}}/>}
    </IconButton>
  </Stack>

  <Stack p={2} alignItems="center" direction={"row"} justifyContent={"space-between"} sx={{
    mt:3,
    background:'linear-gradient(90.17deg,#191E5D 0.14%, #0F133A 98.58%)',
    boxShadow: '0px 10px 20px rgba(19, 23,71,0.25)',
    px:4,
    py:5,
    color:'white',
    borderRadius:2,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  }}>
    <Typography variant='h2' sx={{fontFamily:'Mulish', textTransform:'capitalize'}} > {word} </Typography>
    {audio && <IconButton onClick={()=>audio.play()} sx={{
               backgroundColor:'#DC687C',
                borderRadius:2,
                p:1,
                color:'white'
            }} fontSize="large">

      <PlayArrowIcon />
        
    </IconButton>}

  </Stack>

  {defintions.map((def,index) =>
    <Fragment key={index}>
     <hr/>
     {def.meanings.map(meaning =>
      <Box key={Math.random()} sx={{
        boxShadow:'0px 10 px 25px rgba(0,0,0,0.05)',
        backgroundColor:'#fff',
        p:2,
        borderRadius:2,
        mt:3
      }}>

      <Typography variant='subtitel1 h3'  sx={{fontFamily:'Mulish', textTransform:'capitalize'}}> {meaning.partOfSpeech} </Typography>
      
      {meaning.definitions.map((defin,index) => <Typography key={defin.definition} variant='body2' color={'GrayText'} sx={{fontFamily:'Mulish', my:1}}> {meaning.definitions.length >1 && `${index +1}.`}{defin.definition}</Typography>
      )}
      
      </Box>
      )}
    </Fragment>
    )}
  </Box>
  )
};

export default Definition;
