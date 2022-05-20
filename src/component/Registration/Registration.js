import './Registration.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Palette from '../../ThemeProvider';
import { useState } from 'react';


// import FormHelperText from '@mui/material/FormHelperText';

import Box from '@mui/material/Box';

const Registration = () => {

    const [companyName, setCompanyName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    console.log(companyName,address,phone,email)

    return (

        <Box sx={{
            width: '100%',
            backgroundColor: 'white',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                width: '100%'
              },

        }}>
            <Box sx={{
            width: '90%',
            // backgroundColor: '#f7faff',
            margin: 'auto',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                paddingTop: '1rem',
                borderRadius: 2,
                paddingBottom: '1rem',

              },


        }}>     
                <Stack direction="row" sx={{
                    '@media (max-width: 600px)': {
                        flexDirection: 'column'
                    },
                }}>

                    <Box sx={{
                        borderRight: '1px solid black',
                        width: '60%',
                        '@media (max-width: 600px)': {
                            border: 'none',
                            width: '90%',

                        },
                    }}>hell0</Box>
                    <Box sx={{
                        border: '1px solid #D0D5DA',
                        borderRadius: 1,
                        width: '30%',
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

                                <TextField id="outlined-basic" size='small' label="Business Name | Oganization" variant="outlined" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}} />
                                <TextField id="outlined-basic" size='small' label="First Name" variant="outlined" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                                <TextField id="outlined-basic" size='small' label="Mail" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                <TextField id="outlined-basic" size='small' label="Phone" variant="outlined" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                                {/* <FormControl>
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
                                </FormControl>     */}

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
                </Stack>
            </Box>
        </Box>
       
    );
}
 
export default Registration;