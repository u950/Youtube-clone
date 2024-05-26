import React from 'react';
import { useState, useEffect } from 'react';
import {Box, Stack, Typography} from '@mui/material'
import SideBar from './SideBar';
import Video from './Video';

import { fetchfromAPI } from '../utilities/fetchFromAPI';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')

    const [videos ,setVideos] = useState([])

    useEffect(() => {

        setVideos(null)
        fetchfromAPI(`search?part=snippet&q=${selectedCategory}`)
         .then(response => setVideos(response.items))
    } , [selectedCategory])


    return (
        <Stack sx={{flexDirection:{sx:"column", md:'row'}}}>
            <Box sx={{height: {sx:'auto', md:'92vh' } ,borderRight:'1px solid #3d3d3d',
                px:{sx:0, md:2}}}>
                    <SideBar 
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    />

                    <Typography className='copyright' variant='body2' sx={{mt:1.5 , color:'white'}}>
                        UD Master the Blaster
                    </Typography>
            </Box>
            <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2}}>
                <Typography  variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
                    {selectedCategory +' '}
                    <span style={{color:'#f31503'}}>
                        Videos
                    </span>
                </Typography>
                <Video videos ={videos}/>
            </Box>
        </Stack>
    );
};

export default Feed;