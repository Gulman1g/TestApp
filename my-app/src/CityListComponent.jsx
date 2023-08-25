import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import DateComponent from './datepicket';
import Button from '@mui/material/Button';

const CityListComponent = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries')
            .then(response => {
                let data = [];

                response.data.data
                    .map(x => x.cities)
                    .slice(0, 5)
                    .forEach((item) => {
                        item.map(x => data.push(x));
                    });;

                setCities(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const RenderCityListFrom = () => {
        return (
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
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
                options={cities}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="City To" />}
            />
        );
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Find Fly
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={3.5}>
                            {RenderCityListFrom()}
                        </Grid>
                        <Grid item xs={3.5}>
                            {RenderCityListTo()}
                        </Grid>
                        <Grid item xs={3.5}>
                            <DateComponent />
                        </Grid>
                        <Grid item xs={1.5}>
                        <Button variant="contained">Find fly</Button>
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