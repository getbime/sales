import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import successImage from '../../images/success1.gif'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function MessageModal({ showCreatedStaffPassword, msg, setShowCreatedStaffPassword}) {
  // console.log(showCreatedStaffPassword)
    const handleClose = () => {
      setShowCreatedStaffPassword(false)
    };
  
    return (
      <div>
        <Modal
          open={showCreatedStaffPassword}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 200, border:'none' }}>
            <Box id="parent-modal-description" >
              <img src={successImage} alt="success" width='100%' height='70%'/> 
            </Box>
            <Stack alignItems='center' flexDirection='column' sx={{marginTop:'1rem'}}>
            <Typography id="parent-modal-title" color='#6683ed'>SUCCESS</Typography>
            <Typography sx={{textAlign: 'center'}} id="parent-modal-title" >
              Please save/write down the password below,if you leave this page you wont see it again:  "{msg}"
              </Typography>
  
                
            </Stack>
          </Box>
        </Modal>
      </div>
    );
  }
  