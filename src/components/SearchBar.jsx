import { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Paper , IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

import React from 'react'

const SearchBar = () => {

  const [searchid, setSearchid] = useState('')
  const navigation = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(searchid){
      navigation(`/search/${searchid}`)
      setSearchid('')  // reset search term
    }
  }

  return (
    <Paper
    component='form'
    onSubmit={ handleSubmit}
    sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}
    }}>
        <input className='search-bar'
        placeholder='Search..' value={searchid} onChange={(e)=>setSearchid(e.target.value)}/>

        <IconButton type='submit' sx={{p:'10px', color:'black', }}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;
