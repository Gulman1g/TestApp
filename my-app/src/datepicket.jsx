import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const DateComponent = () => {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker defaultValue={dayjs()}/>
      </LocalizationProvider>
    );
  }

  export default DateComponent;