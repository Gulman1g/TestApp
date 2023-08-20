import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const RenderCityListFrom = () => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={CityListData}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City From" />}
        />
    );
}

const RenderCityListTo = () => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={CityListData}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City To" />}
        />
    );
}

const CityListData = [
    'London',
    'The Godfather',
    'The Godfather: Part II',
    'The Dark Knight',
    '12 Angry Men',
    "Schindler's List",
    'Pulp Fiction',
    'The Lord of the Rings: The Return of the King'
]

const CityListComponent = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Find Fly
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                    <Grid item xs={4}>
                        {RenderCityListFrom()}
                        </Grid>
                        <Grid item xs={4}>
                        {RenderCityListTo()}
                        </Grid>
                        <Grid item xs={4}>
                            Date
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    DataList
                </Grid>
            </Grid>
        </div>
    )
}

export default CityListComponent;