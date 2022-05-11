import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Income = () => {
    return (

        <Stack direction="row">
            <Stack spacing={2} direction="column" sx={{
                padding: '2rem'
            }}>

                <TextField id="outlined-basic" label="Customer Name" variant="outlined" size='small'/>
                <Divider />

                <Stack spacing={2} direction="column">
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" size='small'/>

                    <Stack spacing={2} direction="row" >
                        <TextField id="outlined-basic" type="number" label="price" variant="outlined" size='small' InputProps={{
                            startAdornment: <InputAdornment position="start">#</InputAdornment>,
                        }}/>
                        <TextField id="outlined-basic" type="number" label="quantity" variant="outlined" size='small'/>


                    </Stack>
                        <TextField id="outlined-basic" type="number" label="total price" variant="outlined" size='small' InputProps={{
                            startAdornment: <InputAdornment position="start">#</InputAdornment>,
                        }}/>
                </Stack>
                
            
                <Button variant="contained"><Typography>Submit</Typography></Button>
                
            </Stack>

            <Stack direction="column" spacing={1} sx={{
                position: 'absolute',
                alignSelf: 'flex-end',
                justifySelf: 'flex-end',
                marginLeft: '30.5%',
                marginBottom: '2rem',
                '@media (max-width: 600px)': {
                    marginLeft: '75.5%',
                  },

            }}>
                <Fab aria-label="add" size="medium" sx={{
                    borderRight: '1px solid #ABB5C5',
                    backgroundColor: 'white',
                    boxShadow: 'none',
                }} >
                    <AddIcon />
                </Fab>
                <Fab aria-label="add" size="medium" sx={{
                    borderRight: '1px solid #ABB5C5',
                    backgroundColor: 'white',
                    boxShadow: 'none'
                }}>
                    <RemoveIcon />
                </Fab>
            </Stack>
        </Stack>

    );
}
 
export default Income;