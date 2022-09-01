import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 30,
  p: 4,
};

export default function Confirmation({openConfirmation, setOpenConfirmation, confirmData, handleContinue}) {
  const [inputValue, setInputValue] = React.useState('');
  const handleClose = () => setOpenConfirmation(false);
 

  return (
    <div>
      <Modal
        open={openConfirmation}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper elevation={3} sx={style}>

            <Stack spacing={2} flexDirection='column' >
            <Typography id="modal-modal-title" variant="h5" component="h2">
                {confirmData.status} {confirmData.header}
            </Typography>
            <Divider flexItem='horizontal'/>

            <Stack flexDirection='column'>
                <Typography id="modal-modal-description" sx={{ mt: 2,fontSize:15 }} color='gray'>
                    To continue type <strong>{confirmData.content}</strong> in the input field to confrim
                </Typography>
                <TextField 
                    id="outlined-basic" 
                    size='small' 
                    variant="outlined" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </Stack>
            <Divider flexItem='horizontal'/>
            
            <Stack gap={1} flexDirection='row' justifyContent='flex-end' alignItems='flex-end' >
                <Button variant="outlined" onClick={handleClose}>cancel</Button>
                <Button
                 variant="outlined" 
                 disabled={inputValue === confirmData.content?false:true}
                 onClick={()=>{handleContinue(confirmData.content, confirmData.header, confirmData.date)
                  setInputValue('')}}
                 >continue</Button>
            </Stack>  
                
            </Stack>
        </Paper>
      </Modal>
    </div>
  );
}