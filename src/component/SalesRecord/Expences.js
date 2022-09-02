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
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';

const paymentMethod = [
  {
    value: 'Cash',
    label: 'Cash',
  },
  {
    value: 'Transfer',
    label: 'Transfer',
  },
  
];



const Expences = ({HandleFormSubmitExpenses,isPending}) => {
    const formatDate = (date) => {
        return date.toString().split(' ').splice(0,4).join(' ')
    }
    const [date, setDate] = React.useState(formatDate(new Date()));
    const [amount, setAmount] = React.useState(0)
    const [collectorsName, setCollectorsName] = React.useState('')
    const [purpose, setPurpose] = React.useState('')
    const [payment, setPayment] = React.useState('Cash');

    let data = {
        collectorsName,
        date,
        purpose,
        amount,
        payment
    }
    

    return (
        <Stack spacing={2} direction="column" sx={{
            padding: '2rem'
        }}>
            <TextField id="outlined-basic" label="Collector Name" variant="outlined" size='small'
             onChange={(e)=>setCollectorsName(e.target.value)}
             value={collectorsName}
            />

            <TextField
                id="outlined-select-payment"
                select
                label="Select mode of payment"
                value={payment}
                onChange={(e)=>{
                    setPayment(e.target.value)
                }}
                size="small"
                >
                {paymentMethod.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Change date"
                        value={date==null ? formatDate(new Date()) : date}
                        onChange={(newValue) => {
                            formatDate(setDate(newValue));
                        }}
                        renderInput={(params) => <TextField size="small"{...params} />}
                    />
                </LocalizationProvider>

            <Divider />

            <Stack spacing={2} direction="column">
                <TextField id="outlined-basic" label="Purpose" variant="outlined" size='small'
                 onChange={(e)=>setPurpose(e.target.value)}
                 value={purpose}
                />

                    <TextField id="outlined-basic" type="number" label="Amount" variant="outlined" size='small' InputProps={{
                        startAdornment: <InputAdornment position="start">#</InputAdornment>,
                    }}
                    onChange={(e)=>setAmount(e.target.value)}
                    value={amount}
                    />


            </Stack>
                <Palette>

                {!isPending && <LoadingButton disabled={!data.amount || !data.collectorsName || !data.date || !data.purpose} variant="contained"
                    onClick={()=>HandleFormSubmitExpenses(data)}
                    ><Typography>Submit</Typography></LoadingButton>}
                    
                    {isPending && <LoadingButton variant="contained" loading >...loading</LoadingButton>}
                </Palette>
            


        </Stack>

    );
}
 
export default Expences;