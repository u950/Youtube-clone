import React from 'react'

import { Box, CardContent, CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utilities/constants';

const ChannelCard = ({channelDetails, marginTop}) => {
  <Box sx={{boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
    width:{xs:'356px', md:'320px'}, height: '326px', margin: 'auto', marginTop: marginTop
  }}>
    <Link to={`/channels/${channelDetails?.id?.channelId}`}>
      <CardContent sx={{display: 'flex', flexDirection: 'column',
        justifyContent:'center', textAlign: 'center', color: '#fff'
      }}>
        <CardMedia 
        image={channelDetails?.snippet?.thumbnail?.high?.url ||
          demoProfilePicture} 
          alt={channelDetails?.snippet?.title}
          sx={{borderRadius: '50%', height: '180px', width: '180px', mb :2 , border : '1px solid #e3e3e3'}}>
            <Typography variant="h6">
                {channelDetails?.snippet?.title}
                <CheckCircle sx={{fontSize: 12 , color:'gray', ml: '5px'}}/>
            </Typography>
            {channelDetails?.statistics?.subscriberCount &&(
              <Typography>
                {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString} Subscribers
              </Typography>
            )}
        </CardMedia>
      </CardContent>
    </Link>
  </Box>
}

export default ChannelCard
