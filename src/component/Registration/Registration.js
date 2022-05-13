import './Registration.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Palette from '../../ThemeProvider';


// import FormHelperText from '@mui/material/FormHelperText';

import Box from '@mui/material/Box';

const Registration = () => {
    return (

        <Box sx={{
            width: '97%',
            backgroundColor: 'white',
            marginTop: '2rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                width: '100%'
              },

        }}>
            <Box sx={{
            width: '90%',
            backgroundColor: '#f7faff',
            margin: 'auto',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                paddingTop: '1rem',
                borderRadius: 2,
                paddingBottom: '1rem',

              },


        }}>
                <Box sx={{
                    border: '1px solid #D0D5DA',
                    borderRadius: 1,
                    width: '50%',
                    margin: 'auto',
                    backgroundColor: 'white',
                    '@media (max-width: 600px)': {
                        width: '90%'
                      },
                }}>
                    <Typography sx={{
                        paddingTop: '1.2rem',
                        paddingLeft: '1.9rem',
                        textAlign: 'left',
                        height: '4rem',
                        backgroundColor: '#f7faff',
                        fontSize: 22
                        
                    }}>Register</Typography>
                    
                    
                        <Stack spacing={2} direction="column" sx={{
                            padding: '2rem'
                        }}>

                            <TextField id="outlined-basic" size='small' label="Business Name | Oganization" variant="outlined" />
                            <TextField id="outlined-basic" size='small' label="First Name" variant="outlined" />
                            <TextField id="outlined-basic" size='small' label="Last Name" variant="outlined" />
                            <TextField id="outlined-basic" size='small' label="Mail" variant="outlined" />
                            <TextField id="outlined-basic" size='small' label="Phone" variant="outlined" />

                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={'age'}
                                    label="Age"
                                    onChange={()=>{}}
                                    size='small'
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>    

                            <Palette>
                                <Button variant="contained">Sign Up</Button>
                            </Palette>
                            
                            <Stack spacing={1} direction="row" alignItems='baseline' justifyContent='center'>
                                <Typography sx={{
                                    '@media (max-width: 600px)': {
                                        fontSize: 14
                        
                                      },
                                }}
                                > Need an account?</Typography>
                                <Palette>

                                    <Button variant="text" sx={{
                                        '@media (max-width: 600px)': {
                                            fontSize: 14
                            
                                        },
                                    }}
                                    >Login</Button>
                                </Palette>

                            </Stack>
                            <Palette>
                                <Button variant="text">Forget Password?</Button>
                            </Palette>
                        </Stack>

                </Box>
            </Box>
        </Box>
       
    );
}
 
export default Registration;