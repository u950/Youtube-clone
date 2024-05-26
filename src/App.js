import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material'
import {NavBar, Channel, SearchFeed, VideoDetail, Feed} from './components'


function App() {
  return (
    <Box sx={{background: '#000'}}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/search/:searchid" element={<SearchFeed/>}/>
        <Route path="/channel/:id" element={<Channel/>}/>
      </Routes>
    </Box>
  );
}

export default App;
