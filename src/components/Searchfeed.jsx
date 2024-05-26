import React from 'react';
import { useState, useEffect } from 'react';
import {Box, Typography} from '@mui/material'

import Video from './Video';

import { fetchfromAPI } from '../utilities/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

    const {searchid} =useParams();

    const [videos ,setVideos] = useState([])

    useEffect(() => {
        fetchfromAPI(`search?part=snippet&q=${searchid}`)
         .then(response => setVideos(response.items))
    } , [searchid])


    return (
        <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2}}>
                <Typography  variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
                    Search Results for :
                    <span style={{color:'#f31503'}}>
                        {searchid}
                    </span>videos
                </Typography>
                <Video videos ={videos}/>
            </Box>
    );
};

export default SearchFeed;