import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Bookmarks from './components/pages/Bookmarks';
import Definition from './components/pages/Definition';
import NotFound from './components/pages/NotFound';
import { useState, useEffect } from 'react';


const App = ()=> {

  const [bookmarks,setBookmarks]= useState(JSON.parse(localStorage.getItem('bookmarks'))||{});

  useEffect(()=>{

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))


  },[bookmarks])

 
  const addBookmark = (word,defintions)=> setBookmarks(oldBookmarks=>({...oldBookmarks,[word]:defintions}))

  const removeBookmark = word=>setBookmarks(oldBookmarks=>{
    const temp = {...oldBookmarks};
    delete temp [word];
    return temp;
  })

  return (
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks}/>}/>
    <Route path="/search/:word" element={<Definition bookmarks={bookmarks} addBookmark={addBookmark} removeBookmark={removeBookmark}/>}/>
    <Route path="/notfound" element={<NotFound/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
