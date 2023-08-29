import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import DateComponent from './datepicket';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import Table from '@mui/material/Table'

const FlyingTabel = [
    {field: "id", headerName: "ID"},
    {field: "title", headerName: "Name"},
    {field: "price", headerName: "Price"},
    {field: "date", headerName: "Date/Time", type:['dateColumn', 'nonEditableColumn'] },
];

const DataTable = () => {
    const [tableData, setTableData] = useState([]);
    const [rows, setRows] = useState(tableData);

    useEffect(() => {
        axios.get("")
        .then((response) => response.json())
        .then((data) => setTableData(data))
    }, []);
    
        return (
            <>
                rows={tableData}
                columns={FlyingTabel}
                pageSize={13}
                initialState={{
                    ...tableData.initialState,
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                checkboxSelection
                </>
        );
}

const CityListComponent = () => {
    const [cities, setCities] = useState([]);
    const [isDataListRender, setisDataListRender] = useState(false);
    const [cityFrom, setcityFrom] = useState('');
    const [cityTo, setcityTo] = useState('');
    const [dateFly, setdateFly] = useState('')


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

    const OnFindFlyClick = () => {
        setisDataListRender(!isDataListRender);
        console.log('cityFrom ' + cityFrom + 'cityTo ' + cityTo + 'dateFly ' + dateFly);
    }

    const OnCityFromChange = (event, value) => {
        setcityFrom(value);
        console.log('OnCityFromChange ' + value);
    }

    const OnCityToChange = (event, value) => {
        setcityTo(value);
        console.log('OnCityToChange ' + value);
    }

    const onDateFlyChange = (value) => {
        let date = value.$d.toDateString();
        setdateFly(date);
        console.log('onDateFlyChange ');
    }

    const RenderCityListFrom = () => {
        return (
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
                onChange={OnCityFromChange}
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
                onChange={OnCityToChange}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="City To" />}
            />
        );
    }

    const RenderDataList = () => {
        return isDataListRender && (
            <Button variant="contained">DataTable</Button>
        )
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker defaultValue={dayjs()} 
                                 onChange={(newValue) => onDateFlyChange(newValue)}/>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={1.5}>
                            <Button variant="contained" onClick={OnFindFlyClick}>Find fly</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {RenderDataList()}
                </Grid>
            </Grid>
        </div>
    )
}

export default CityListComponent;