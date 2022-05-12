import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Palette from '../../ThemeProvider';

const Expences = () => {

    const [value, setValue] = React.useState(null);


    return (
        <Stack spacing={2} direction="column" sx={{
            padding: '2rem'
        }}>
            <TextField id="outlined-basic" label="Colletors Name" variant="outlined" size='small'/>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Basic example"
                        value={value==null ? new Date() : value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField size="small"{...params} />}
                    />
                </LocalizationProvider>

            <Divider />

            <Stack spacing={2} direction="column">
                <TextField id="outlined-basic" label="Purpose" variant="outlined" size='small'/>

                    <TextField id="outlined-basic" type="number" label="Amount" variant="outlined" size='small' InputProps={{
                        startAdornment: <InputAdornment position="start">#</InputAdornment>,
                    }}/>


            </Stack>
                <Palette>

                    <Button variant="contained"><Typography>Submit</Typography></Button>
                </Palette>
            


        </Stack>

    );
}
 
export default Expences;