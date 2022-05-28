import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import successImage from '../../images/success.gif'
import errorImage from '../../images/error.gif'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

function ChildModal({loggedUser}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Print Receipt</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300, border: 'none' }}>
          <h2 id="child-modal-title">{loggedUser.companyName.toUpperCase()}</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <IconButton onClick={handleClose}><CloseIcon /></IconButton>
          <Button onClick={handleClose}>Print</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function MessageModal({loggedUser, showError, showSuccess, msg, setShowError, setShowSuccess, result}) {
  
  
  const handleClose = () => {
    setShowSuccess(false)
    setShowError(false)
  };

  return (
    <div>
      <Modal
        open={(showError || showSuccess)}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 200, border:'none' }}>
          <Box id="parent-modal-description" >
            {showSuccess && <img src={successImage} alt="success" width='100%' height='70%'/> }
            {showError && <img src={errorImage} alt="error" width='100%' height='70%'/> }
          </Box>
          <Stack alignItems='center' flexDirection='column' sx={{marginTop:'1rem'}}>
          {showSuccess && <Typography id="parent-modal-title" color='#6683ed'>SUCCESS</Typography>}
            {showError && <Typography sx={{textAlign: 'center'}} id="parent-modal-title" color='red'>{msg}</Typography>}

            {showSuccess && <ChildModal loggedUser={loggedUser} result={result}/> }
            <IconButton onClick={handleClose}><CloseIcon /></IconButton>

          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
