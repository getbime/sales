import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #3456d1',
  boxShadow: 24,
  p: 4,
  '@media (max-width: 600px)':{
    width: '70%'
  }
};
const stl = {
  color: 'gray'
}
export default function BasicModal({openDetailModal, detailValue, setOpenDetailModal}) {

  return (
    <div>
      {console.log(detailValue)}
      <Modal
        open={openDetailModal}
        onClose={()=>setOpenDetailModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Stack flexDirection='column' spacing={1} sx={style}>
        
          <IconButton onClick={()=>setOpenDetailModal(false)}><Button style={{width:'100%'}} variant="contained">Back</Button></IconButton>

          <Stack flexDirection='column' spacing={1}>
          <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Receipt number:</Typography> <Typography> {detailValue.receiptNumber}</Typography></Stack> 
           <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Customer Name:</Typography> <Typography> {detailValue.customerName}</Typography></Stack>
           <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Date Of Purchase:</Typography> <Typography> {detailValue.date}</Typography></Stack>  
           <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Total Price:</Typography> <Typography> {detailValue.grandTotal}</Typography></Stack>  
          </Stack> 

          <Divider />
            {detailValue.product.map(prd => (
              <Stack flexDirection='column' spacing={1}>
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Product Name:</Typography> <Typography> {prd.productName}</Typography></Stack>  
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Price:</Typography> <Typography> {prd.price}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Quantity:</Typography> <Typography> {prd.quantity}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Total Price:</Typography> <Typography> {prd.totalPrice}</Typography></Stack> 
                <Divider />
              </Stack> 

            ))}

        </Stack>
      </Modal>
    </div>
  );
}

const LabelAndText = ({label,text}) => {
  return (
    <Stack flexDirection='row' alignItems='flex-end' sx={{
      gap: 2

    }}>
      <Typography color='#3F3C3C' sx={{
        fontSize: '0.9rem',
        '@media (max-width: 600px)': {
          fontSize: '0.8rem',

        },
        }}>
        {label}:
      </Typography>
      <Typography sx={{'@media (max-width: 600px)':{fontSize: '0.9rem',}}}>
        {text}
      </Typography>
    </Stack>
  );
}
 