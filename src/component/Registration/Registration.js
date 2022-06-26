import * as React from 'react';
import './Registration.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Palette from '../../ThemeProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import FormContainer from '../shared/FormContainer';
import Image2 from '../../images/bimelogo-removebg-preview.png'



// import FormHelperText from '@mui/material/FormHelperText';

import Box from '@mui/material/Box';

const Registration = () => {

    const navigate = useNavigate()
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const REGISTER = process.env.REACT_APP_REGISTER

    const [companyName, setCompanyName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const data = {
        companyName,
        address,
        phone,
        email
    }

    const [isPending, setIsPending] = React.useState(false)
    const [showError, setShowError] = React.useState(false)
    const [showSuccess, setShowSuccess] = React.useState(false)
    const [errorMsg, setErrorMsg] = React.useState('')

    const handleRegistration = (data) => {
        setIsPending(true)
        setShowError('')
        console.log(data)
        try {
            
            fetch(`${BASE_URL}${REGISTER}`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
            })
            .then(response => {
                if(response.ok == false) {
                    setIsPending(false)
                    throw Error('Registration failed try again please')
                }
                else return response.json()
            })
            .then(data => {
                console.log(data);
                setIsPending(false)
    
                if(data.success) setShowSuccess(true)
                else {
                    setIsPending(false)
                    throw Error('Registration failed try again please')
                }
    
                }).catch(error => {
                    setErrorMsg('Registration failed try again please!!!')
                    setShowError(true)
                    console.error('Error:', error);
                })
        } catch(error) {
            setErrorMsg('Registration failed try again please!!!')
            setShowError(true)
            setIsPending(false)
        }
    }

    return (

        <Box sx={{
            width: '100%',
            backgroundColor: 'white',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                width: '100%',
                paddingTop: 0
              },

        }}>
             {showError && <Alert severity="error" sx={{
                position: 'fixed',
                marginLeft: '55rem',
                marginTop: '2rem',
                width: '30%',
                '@media (max-width: 600px)': {
                    marginTop: 0,
                    width: '73%',
                    margin: 'auto',
                    marginLeft: '2.27rem',


                  },
            }} onClose={() => {setShowError(false)}}>
            <AlertTitle>Error</AlertTitle>
                <Typography>{errorMsg}</Typography>
            </Alert> }

            {showSuccess &&

            <Alert severity="success" sx={{
                position: 'fixed',
                marginLeft: '55rem',
                marginTop: '2rem',
                width: '30%',
                '@media (max-width: 600px)': {
                    marginTop: 0,
                    width: '73%',
                    margin: 'auto',
                    marginLeft: '2.27rem',


                  },
            }} onClose={() => {setShowSuccess(false)}}>
                <AlertTitle>Success</AlertTitle>
                Registration successfull please do login
            </Alert>
            }
                
                <Stack direction="column" alignItems='center' gap={5} sx={{
                    '@media (max-width: 600px)': {
                        flexDirection: 'column'
                    },
                }}>

                    
                    <Stack direction="row" justifyContent='space-between' alignItems='center' sx={{width: '60%',}}>
                    <Box sx={{
                                width: '14%',
                                height: '16vh',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url(${Image2})`,
                                // marginTop: '7rem',
                                '@media (max-width: 600px)': {
                                    width: '30%',
                                    marginTop: '2rem'



                                },
                                
                            }}>
                        </Box>

                        <Stack direction="row" alignItems='center'gap={1}>
                            <Typography>Have an Acount?</Typography>
                            <Button variant="outlined">Log in</Button>
                        </Stack>
                    </Stack>

                    <Typography color="#3456d1" sx={{fontSize:28, width: '35%'}}>
                     Sign up for free and take your business higher
                    </Typography>

                    <FormContainer>
                        <Typography color="#3456d1">Register</Typography>
                        <Stack spacing={2} direction="column" sx={{
                            padding: '2rem'
                        }}>

                            <TextField id="outlined-basic" size='small' label="Business Name | Oganization" variant="outlined" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}} />
                            <TextField id="outlined-basic" size='small' label="First Name" variant="outlined" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                            <TextField id="outlined-basic" size='small' label="Mail" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            <TextField id="outlined-basic" size='small' label="Phone" variant="outlined" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

                            <Palette>

                                {!isPending && <Button variant="contained" onClick={()=>handleRegistration(data)}>Sign Up</Button>}
                                {isPending && <LoadingButton variant="contained" loading >...loading</LoadingButton>}

                            </Palette>
                            
                            <Stack spacing={1} direction="row" alignItems='baseline' justifyContent='center'>
                                <Typography sx={{
                                    '@media (max-width: 600px)': {
                                        fontSize: 14
                        
                                    },
                                }}
                                > Have an account?</Typography>
                                <Palette>

                                    <Button variant="text" sx={{
                                        '@media (max-width: 600px)': {
                                            fontSize: 14
                            
                                        },
                                    }}
                                    onClick={()=>   navigate("/login",)}
                                    >Login</Button>
                                </Palette>

                            </Stack>
                            <Palette>
                                <Button variant="text">Forget Password?</Button>
                            </Palette>
                        </Stack>
                    </FormContainer>
                    
                        
                        

                </Stack>
        </Box>
       
    );
}
 
export default Registration;