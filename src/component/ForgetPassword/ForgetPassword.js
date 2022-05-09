import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// import FormHelperText from '@mui/material/FormHelperText';

import Box from '@mui/material/Box';

const ForgetPassword = () => {
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
                        
                    }}>Forget Password</Typography>
                    
                    
                        <Stack spacing={2} direction="column" sx={{
                            padding: '2rem'
                        }}>

                            <TextField id="outlined-basic" label="Enter your mail" variant="outlined" />
                            
                            <Button variant="contained">send</Button>
                            
                            
                        </Stack>

                </Box>
            </Box>
        </Box>
       
    );
}
 
export default ForgetPassword;