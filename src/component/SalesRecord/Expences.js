import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';


const Expences = () => {
    return (
        <Stack spacing={2} direction="column" sx={{
            padding: '2rem'
        }}>
            <TextField id="outlined-basic" label="Colletors Name" variant="outlined" size='small'/>
            <Divider />

            <Stack spacing={2} direction="column">
                <TextField id="outlined-basic" label="Purpose" variant="outlined" size='small'/>

                    <TextField id="outlined-basic" type="number" label="Amount" variant="outlined" size='small' InputProps={{
                        startAdornment: <InputAdornment position="start">#</InputAdornment>,
                    }}/>


            </Stack>
            

            <Button variant="contained"><Typography>Submit</Typography></Button>

        </Stack>

    );
}
 
export default Expences;