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
import business1 from '../../images/undraw_business1.svg'
import imageFree from '../../images/free.svg'
import imageTrack from '../../images/track.svg'
import imageControl from '../../images/control.svg'
import imageDecision from '../../images/decision.svg'


import Divider from '@mui/material/Divider'
import Footer from '../Footer/Footer';



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

     // form styling
     const styling = {
            
        width: '26%',
        position: 'absolute',
        margin: 'auto',
        marginLeft: '25rem',
        paddingTop: 0.3,
        backgroundColor: 'white',
        borderRadius: 1,
        border: 'none',
        boxShadow: ' -1px 3px 15px #aaaaaa',
        // mozBoxShadow: '0 0 3px #ccc',
        // webkitBoxShadow: '0 0 3px #ccc',
        // boxShadow: '0 0 3px #ccc',

        '@media (max-width: 600px)': {
            width: '100%',
            position: 'relative',
            margin: 0


        },
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
                Registration successfull check your email for your username and password
            </Alert>
            }
                
                <Stack direction="column" alignItems='center' gap={5} sx={{
                    '@media (max-width: 600px)': {
                        flexDirection: 'column'
                    },
                }}>

                    
                    <Stack direction="row" justifyContent='space-between' alignItems='flex-end' sx={{
                        width: '60%',
                        '@media (max-width: 600px)': {
                            width: '90%',
                            alignItems: 'center',

                        },
                        }}>
                    <Box sx={{
                                width: '16%',
                                height: '16vh',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url(${Image2})`,
                                // marginTop: '7rem',
                                '@media (max-width: 600px)': {
                                    width: '30%',
                                    // marginTop: '2rem'

                                },
                                
                            }}>
                        </Box>

                        <Stack direction="row" alignItems='center'gap={1}>
                            <Typography sx={{'@media (max-width:600px)':{display:'none'}}}>Have an Acount?</Typography>
                            <Button variant="outlined" 
                            sx={{'@media (max-width:600px)':{size:'small'}}}
                            onClick={()=>{navigate("/login",)}}
                            >
                                 <Typography sx={{'@media (max-width:600px)':{fontSize:12}}}>Log in</Typography>
                            </Button>
                        </Stack>
                    </Stack>

                    <Box sx={{
                        width: '90%',
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#160445',
                        borderRadius: 1,
                        '@media (max-width:600px)':{
                            width: '100%',
                            padding: 0,
                            paddingTop: '2rem',
                            paddingBottom: '2rem'

                        }
                    }}>

                        <Typography color="white" sx={{fontSize:28, width: '35%','@media (max-width:600px)':{width:'85%'}}}>
                        Sign up for free and take your business higher
                        </Typography>

                        <Stack direction="row" gap={2} justifyContent='space-between'
                            sx={{
                                padding: 6,
                                paddingTop: 2,
                                width: '56.7%',
                                borderRadius: 1,
                                backgroundColor: 'white',
                                marginTop: 3,
                                '@media (max-width:600px)':{
                                    flexDirection: 'column',
                                    width: '80%',
                                    padding: 2,
                                    // paddingTop: 2,


                                }

                            }}
                        >
                            <Box sx={{
                                width: '50%',
                                marginTop: '3rem',
                                '@media (max-width:600px)':{
                                    width: '100%',
                                    
                                }

                            }}>
                                <Stack direction="column" alignItems='flex-start'>

                                   <ImageAndText image={imageFree} textt={"Create a free account"}/>
                                   <ImageAndText image={imageControl} textt={"Control your business"}/>
                                   {/* <ImageAndText image={imageDecision} textt={"Make decisions"}/> */}
                                   {/* <ImageAndText image={imageTrack} textt={"Managing your business"}/> */}

                                    

                                </Stack>
                            </Box>
                           
                                <FormContainer style={styling}>
                                    <Typography color="#3456d1" variant="h6">Register</Typography>
                                    <Stack spacing={2} direction="column" sx={{
                                        padding: '2rem'
                                    }}>

                                        <TextField id="outlined-basic" size='small' label="Business or Oganization Name" variant="outlined" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}} />
                                        <TextField id="outlined-basic" size='small' label="First Name" variant="outlined" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                                        <TextField id="outlined-basic" size='small' label="Email" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                        <TextField id="outlined-basic" size='small' label="Phone Number" variant="outlined" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>

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
                    <Footer />

                </Stack>
        </Box>
       
    );
}
 
export default Registration;

const ImageAndText = ({image,textt}) => {
    console.log(textt)
    return (
        <Box sx={{
            width: '80%',
            height: '14rem',
            backgroundSize: '100% 100%',
            backgroundPosition: 'fit',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${image})`,
            // marginTop: '7rem',
            '@media (max-width: 600px)': {
                width: '90%',
                marginTop: '2rem'

            },
            
        }}>
        <Typography color='#79a7ed' align="start"
         sx={{
             fontSize:24,
             marginTop: '-0.9rem',
             '@media (max-width: 600px)':{width:'100%', marginTop: '-0.8rem'}
             }}>
            {textt}
        </Typography>
        </Box>
    );
}
 