import { useState } from 'react';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Palette from '../../ThemeProvider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



const CustomField = ({labelName, fieldName}) => {
    return (
        <Stack flexDirection='column' spacing={0.5} alignItems='flex-start'>
            <Typography>{labelName}</Typography>
            <TextField id="outlined-basic" size='small'  variant="outlined"  />

        </Stack>
    );
}
 

const Profile = () => {
    return (
        <Box sx={{
            maxWidth: '88%',
            backgroundColor: 'white',
            marginTop: '2rem',
            padding: '2rem 3rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                maxWidth: '98%',
                padding: '2rem 2rem'

              },
        }}>
            <Stack flexDirection='column' spacing={5} >
                <Stack flexDirection='row' spacing={2} justifyContent='space-between' sx={{
                    '@media (max-width: 600px)': {
                       flexDirection: 'column',
                       alignItems: 'center'
        
                      },
                }}>
                    <Stack flexDirection='column' spacing={2} sx={{
                         '@media (max-width: 600px)': {
                            alignItems: 'center'
             
                           },
                    }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{
                            height: '15rem',
                            width: '15rem'
                        }}/>
                        <TextField id="outlined-basic" size='small'  variant="outlined" type='file' />
                    </Stack>

                    <Divider orientation="vertical" flexItem />
                    <Divider orientation="horizontal" flexItem />


                    <Stack flexDirection='column' spacing={2} >
                    <CustomField labelName={'Company Name'}/>
                    <CustomField labelName={'Email Address'}/>
                    <CustomField labelName={'Address'}/>
                    <CustomField labelName={'Phone'}/>
                    <Button variant="contained" >Edit</Button>
                    
                    </Stack>    


                </Stack>

                <Divider orientation="horizontal" flexItem/>

                {/* add staff form */}
                <Stack flexDirection='column' spacing={1} alignItems='flex-start'sx={{
                         '@media (max-width: 600px)': {
                            
                            // alignItems:'flex-end'
                           },
                    }}>

                    <SectionLabel text={'Add Staff'} />

                    <Stack flexDirection='row' alignItems='flex-end'  justifyContent='space-between' sx={{
                        width: '100%', 
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                            alignItems:'flex-start',
                            justifyContent: 'space-between',
                            height: '10rem'
                           },
                        }}>
                        <TextField id="outlined-basic" size='small' label='Name' variant="outlined"  />
                        <TextField id="outlined-basic" size='small' label='Email' variant="outlined"  />
                        <TextField id="outlined-basic" size='small' label='Phone' variant="outlined"  />
                        <Palette>
                            <Fab aria-label="add" size="medium" color="primary"sx={{
                                boxShadow: 'none',
                                '@media (max-width: 600px)': {
                                    marginTop: '3.5rem',
                                    alignSelf: 'flex-end',
                                    justifySelf: 'center',
                                    position: 'absolute'
                                    
                                   },
                                 }}  >

                                    <AddIcon />
                            </Fab>
                        </Palette>
                    </Stack>     
                </Stack>

                <Divider orientation="horizontal" flexItem/>

                {/* staff list */}
                <Stack flexDirection='column' spacing={1} alignItems='flex-start'sx={{
                        
                    }}>

                    <SectionLabel text={'Staff List'} />

                    <List sx={{ width: '100%', bgcolor: 'background.paper',
                        '@media (max-width: 600px)': {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'

                        },
                    }}>
                        <ListItem alignItems="flex-start" sx={{padding:0}}
                            secondaryAction={
                                <Box sx={{
                                    marginLeft: '1orem',
                                    '@media (max-width: 600px)': {
                                        marginTop: '5rem',

                                       },
                                    }}>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                                
                            }
                        >
                            <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start" sx={{padding:0}}
                            secondaryAction={
                                <Box sx={{
                                    marginLeft: '10rem',
                                    '@media (max-width: 600px)': {
                                        marginTop: '5rem',

                                       },
                                    }}>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                                
                            }>
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                                </>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start" sx={{padding:0}}
                            secondaryAction={
                                <Box sx={{
                                    marginLeft: '10rem',
                                    '@media (max-width: 600px)': {
                                        marginTop: '5rem',

                                       },
                                    }}>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                                
                            }>
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                            />
                        </ListItem>
                        </List>    
                </Stack>
                
                {/* Delet account */}
                <Stack flexDirection='column' spacing={1} alignItems='flex-start'sx={{
                         
                    }}>

                    <SectionLabel text={'Danger Zone'} />

                    <Stack flexDirection='row' alignItems='flex-end'  justifyContent='space-between' sx={{
                        width: '93%', 
                        border: '1px solid red',
                        borderRadius: 2,
                        padding: '2rem 2rem',
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                            alignItems:'flex-start',
                            height: '10rem',
                            width: '80%',
                        
                           },
                        }}>
                        <Stack direction='column' spacing={0.8} alignItems='flex-start' >
                            <Typography>Delete Account</Typography>
                            <Typography fontSize='0.9rem' align="left" sx={{color:'gray', }}>Clicking the button all history of your Account is lost</Typography>
                        
                        </Stack>    
                        <Button variant="outlined" color='error'>Delete</Button>
                    </Stack>     
                </Stack>

            </Stack>
        </Box>
    );
}
 
export default Profile;

const SectionLabel = ({text}) => {
    return (
        <Typography sx={{
            backgroundColor: '#8CA1EC', 
            color:'white',
            padding: '0.5rem 1rem',
            '@media (max-width: 600px)': {
                width: '90%'
                
               },
            
            }}>{text}</Typography> 
    );
}
 