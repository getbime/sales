import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Image2 from '../../images/bimelogo-removebg-preview.png'
import Footer from '../Footer/Footer';
import { Button, Card, Container, Typography } from '@mui/material';


import Box from '@mui/material/Box';
import ForgetFormFinal from './ForgetFormFinal'

const ChangePassword = () => {
    
    const ContentStyle = styled('div')(({ theme }) => ({
        maxWidth: 480,
        margin: 'auto',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(12, 0),
      }));
      
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
                                paddingBottom: '2rem'

                            }
                         }}>
                          
                            <Box
                                sx={{
                                padding: 2,
                                // paddingTop: 2,
                                width: '90.7%',
                                borderRadius: 1,
                                backgroundColor: 'white',
                                marginTop: 3,
                                boxShadow: ' -1px 3px 5px #aaaaaa',

                                '@media (max-width:600px)':{
                                    flexDirection: 'column',
                                    width: '90%',
                                    padding: 2,
                                    // paddingTop: 2,


                                }

                            }}>
                             
                             <Button component={RouterLink} to="/login"  style={{
                                    textAlign:'center',
                                    width:'100%',
                                    backgroundColor:'#3456d1',
                                    marginBottom:'10%'
                            }} variant="contained"
                                >Login to your account</Button>
                                    <Typography sx={{ color: 'text.secondary', mb: 5 }}>Change your password</Typography>
                                <ForgetFormFinal />
                            
                            </Box>
                            </Box>

                    
                        <Footer />
                </Stack>
            
        </Box>
       
    );
}
 
export default ChangePassword