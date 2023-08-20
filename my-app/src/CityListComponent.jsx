import * as React from 'react';
import Grid from '@mui/material/Grid';

const CityListComponent = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Label
                </Grid>
                <Grid item xs={12}>
                    Buttons
                </Grid>
                <Grid item xs={12}>
                    DataList
                </Grid>
            </Grid>
        </div>
    )
}

export default CityListComponent;