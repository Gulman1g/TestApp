import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CityListComponent from './CityListComponent';

const MainPage = () =>{
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
        <Grid item xs={12}>
            12
          </Grid>
          <Grid item xs={0.5}>
            0.5
          </Grid>
          <Grid item xs={11}> 
         <CityListComponent />   
          </Grid>
          <Grid item xs={0.5}>  
         0.5    
          </Grid>
        </Grid>
      </Box>
    );
}

export default MainPage;