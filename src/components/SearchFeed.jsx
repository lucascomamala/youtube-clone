import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';


const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
     

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
          Search Results
        </Typography>
        
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default SearchFeed;

