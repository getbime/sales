import * as React from 'react';
import './Header.css'
import Avatar from '@mui/material/Avatar';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom'


import { Link } from "react-router-dom";


function BasicMenu({anchorEl, setAnchorEl}) {

  const navigate = useNavigate()
  
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('userToken');
    window.localStorage.removeItem('userType');
    navigate('/login')
  }

const style = {textDecoration: 'none', color: 'black'}


  return (
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem ><Link to='/dashboard/profile' style={{...style}}>Profile</Link></MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
  );
}



function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 50,
        height: 50 
      },
      children: `${name.split('')[0][0].toUpperCase()}${name.split('')[1][0].toUpperCase()}`,
    };
  }

const Header = ({setState,state,loggedUser,isLoading,userType}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickMenu = (e) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClick = (anchor, open) =>{
      setState({ ...state, [anchor]: open });
    }
    const style = {}
    if(userType === 'company') {
      style.justifyContent = 'flex-end'
    }
    return (
      <>
            
            <Box sx={{
              width: '94%',
              marginTop: '2rem',
              paddingTop: '0.8rem',
              paddingBottom: '0.8rem',
              paddingRight: '2rem',

              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderRadius: '2px',
              boxShadow: '1px 2px 5px #dfdbdb',
              ...style,
              '@media (max-width: 600px)': {
                marginTop: 0,
                boxShadow: 'none',
                width: '88%',
                justifyContent: 'space-between',
                paddingLeft: '0.4rem',
                // alignItems: 'flex-end'
                
              },
            }}>
             
              <div className="toggle">
                <ToggleButton value="list" aria-label="list" sx={{border: 'none'}} onClick={()=>handleClick('left',true)}>
                  <ViewListIcon />
                </ToggleButton>
              </div>

              {userType === 'staff' && !isLoading && <Typography sx={{
                marginLeft:'30rem',
                fontSize:16,
                border: '0.5px solid #6683ed',
                color: '#6683ed',
                borderRadius: 0.5,
                padding: '1px 8px',
                alignSelf: 'center',
                '@media (max-width: 600px)': {
                  margin: 0,
                  fontSize:14,
                  marginTop: 1.2

                  
                },
                }}>{loggedUser.staffName}</Typography> } 
              <Tooltip title="Account settings">
                <Box sx={{ cursor: 'pointer', }}>
                  {!isLoading && <Avatar 
                    {...stringAvatar(loggedUser.companyName)}
                    onClick = {(e) => {handleClickMenu(e)}}
                  /> }
                </Box>
              </Tooltip>  
            </Box>
            <BasicMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
      </>

    );
}
 
export default Header;