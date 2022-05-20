import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Palette from '../../ThemeProvider';


// import FormHelperText from '@mui/material/FormHelperText';

import Box from '@mui/material/Box';

const Login = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


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
                            
                        }}>Log in</Typography>
                        
                        
                            <Stack spacing={2} direction="column" sx={{
                                padding: '2rem'
                            }}>

                                <TextField id="outlined-basic" size='small' label="Enter your mail" variant="outlined" />

                                <FormControl sx={{ m: 1 }} variant="outlined">
                                <InputLabel size='small' htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    size='small'
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                                </FormControl>

                                
                                <Palette>
                                    <Button variant="contained">Log in</Button>
                                </Palette>
                                
                                <Stack spacing={1} direction="row" alignItems='baseline' justifyContent='center'>
                                    <Typography sx={{
                                        '@media (max-width: 600px)': {
                                            fontSize: 13
                            
                                        },
                                    }}
                                    > Need an account?</Typography>
                                    <Palette>

                                        <Button variant="text" sx={{
                                            '@media (max-width: 600px)': {
                                                fontSize: 13
                                
                                            },
                                        }}
                                        >Sign Up</Button>
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
 
export default Login;