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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom'
import FormContainer from '../shared/FormContainer';
import Image2 from '../../images/bimelogo-removebg-preview.png'
import Footer from '../Footer/Footer';


import Box from '@mui/material/Box';

const Login = () => {
    
    const navigate = useNavigate()
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const LOGIN_STAFF = process.env.REACT_APP_LOGIN_STAFF
    const LOGIN_COMPANY = process.env.REACT_APP_LOGIN_COMPANY


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

    const [username, setUsername] = React.useState('')  
    const data = {
        username,
        password: values.password
    }
    const staffData = {
        staffId: username,
        password: values.password
    }

    const saveUserIdentityToLocalStorage = (id,token,user,companyName) => {
        window.localStorage.setItem('userId', id);
        window.localStorage.setItem('userToken', token);
        window.localStorage.setItem('userType', user);
        window.localStorage.setItem('companyName',companyName)
    }

    const [isPending, setIsPending] = React.useState(false)
    const [showError, setShowError] = React.useState(false)
    const [showSuccess, setShowSuccess] = React.useState(false)
    const [errorMsg, setErrorMsg] = React.useState('')
    const loginFailedMsg = 'Login failed please try again!!'
    const userNotFoundMsg = 'Username or Password is incorrect'

         
  
    const handleLogin = () => {
        setIsPending(true)
        setErrorMsg('')
        if(data.username === '' || data.password === ''){
            setIsPending(false)
            setShowError(true)
            setErrorMsg('Your are required to fill all field')
        }else{
            if(data.username.split('/').includes('STAFF')){
               
                try {
            
                    fetch(`${BASE_URL}${LOGIN_STAFF}`,{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(staffData)
                    })
                    .then(response => {
                        if(response.ok === false) {
                            setIsPending(false)
                            throw Error(loginFailedMsg)
                        }
                        else return response.json()
                    })
                    .then(data => {
                        console.log(data);
                        setIsPending(false)
            
                        if(data.success){
                            if(data.newUser.suspend){
                                setErrorMsg("Your account have been suspended contact your company")
                                setShowError(true)
                            }else {

                                // console.log(data)
                                const user = 'staff'
                                saveUserIdentityToLocalStorage(data.newUser.staffId, data.newUser.token, user, data.company.companyName)
                                // setShowSuccess(true)
                                navigate('/dashboard')
                            }
                        } 
                        else {
                            setIsPending(false)
                            setErrorMsg(userNotFoundMsg)
                            setShowError(true)
                        }
            
                        }).catch(error => {
                            setErrorMsg(loginFailedMsg)
                            setShowError(true)
                            setIsPending(false)
                            console.error('Error:', error);
                        })
                } catch(error) {
                    setErrorMsg(loginFailedMsg)
                    setShowError(true)
                    setIsPending(false)

                }
            }else{
                try {
            
                    fetch(`${BASE_URL}${LOGIN_COMPANY}`,{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                    })
                    .then(response => {
                        if(response.ok === false) {
                            setIsPending(false)
                            throw Error(loginFailedMsg)
                        }
                        else return response.json()
                    })
                    .then(data => {
                        // console.log(data);
                        setIsPending(false)
            
                        if(data.success) {
                            const user = 'company'
                            saveUserIdentityToLocalStorage(data.newUser.username, data.newUser.token, user, data.newUser.companyName)
                            // setShowSuccess(true)
                            navigate('/dashboard')
                        }
                        else {
                            setIsPending(false)
                            setErrorMsg(userNotFoundMsg)
                            setShowError(true)
                        }
            
                        }).catch(error => {
                            setIsPending(false)
                            setErrorMsg(loginFailedMsg)
                            setShowError(true)
                            console.error('Error:', error);
                        })
                } catch(error) {
                    setErrorMsg(loginFailedMsg)
                    setShowError(true)
                    setIsPending(false)

                }
            }
        
        }
    }

    // form styling
    const styling = {
            
        width: '50%',
        margin: 'auto',
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
                Login Successfull
            </Alert>
            }
            
                <Stack direction="column" alignItems='center' gap={3} sx={{
                    '@media (max-width: 600px)': {
                        gap: 5
                    },
                }}>

                    <Box sx={{
                                width: '18%',
                                height: '20vh',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url(${Image2})`,
                                // marginTop: '7rem',
                                '@media (max-width: 600px)': {
                                    width: '35%',
                                    marginTop: '2rem'
                                },
                                
                            }}>
                        </Box>

                        <Box sx={{
                            width: '30%',
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
                            <Box sx={{
                                padding: 2,
                                // paddingTop: 2,
                                width: '90.7%',
                                borderRadius: 1,
                                backgroundColor: 'white',
                                marginTop: 3,
                                boxShadow: ' -1px 3px 5px #aaaaaa',

                                '@media (max-width:600px)':{
                                    flexDirection: 'column',
                                    width: '80%',
                                    padding: 2,
                                    // paddingTop: 2,


                                }

                            }}>

                                <FormContainer syle={styling}>
                                    <Typography color="#3456d1" variant="h6">
                                        Log In
                                    </Typography>
                                    <Stack spacing={2} direction="column" sx={{
                                        padding: '2rem'
                                    }}>

                                        <TextField id="outlined-basic" size='small' label="Business | staff ID" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)} required={true}/>

                                        <FormControl sx={{ m: 1 }} variant="outlined">
                                        <InputLabel required={true} size='small' htmlFor="outlined-adornment-password" >Password</InputLabel>
                                        <OutlinedInput
                                            size='small'
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            required={true}
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
                                            {!isPending && <Button variant="contained" onClick={handleLogin}>Log in</Button> }
                                            {isPending && <LoadingButton variant="contained" loading >...loading</LoadingButton>}

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
                                                onClick={()=>   navigate("/",)}
                                                >Sign Up</Button>
                                            </Palette>

                                        </Stack>
                                        <Palette>
                                            <Button  onClick={()=> navigate("/forget-password")} variant="text">Forget Password?</Button>
                                        </Palette>
                                    </Stack>
                                </FormContainer>
                            </Box>
                        </Box>

                    
                        <Footer />
                </Stack>
            
        </Box>
       
    );
}
 
export default Login