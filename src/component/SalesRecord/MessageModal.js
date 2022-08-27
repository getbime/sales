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
import Divider from '@mui/material/Divider';
import { useReactToPrint } from 'react-to-print';
import moment from 'moment';

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

function ChildModal({loggedUser,result, receiptType}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // company name first three letters
    const companyThreeLetters = loggedUser.companyName.trim().split(' ').map((wrd)=>{

        if (loggedUser.companyName.trim().split(' ').length > 1 ){
          return (wrd.substr(0,1).toUpperCase())
  
        }else {
          return (wrd.substr(0,3).toUpperCase())
  
        }
    })

    // console.log(companyThreeLetters)
  //end company name first three letters


  const stl = {
    color: 'black'
  }

  // recipt printing
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  //end recipt printing

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
        <Box sx={{ ...style, width: 300, height: '100vh', border: 'none', overflow: 'auto'}}>
          <Box ref={componentRef}>

            <Stack flexDirection="row" justifyContent='space-between' alignItems='center'>
              <Typography sx={{backgroundColor:"black", color:"white", padding: '0.5rem', height: '50%' }}>
                {companyThreeLetters.join('')}
              </Typography>
              <h2 id="child-modal-title">{loggedUser.companyName.toUpperCase()}</h2>
            </Stack>

            <Divider />

            {receiptType === 'invoice' && <p id="child-modal-description">
              <Stack flexDirection='column'>

                {/*Reciept Number and Name  */}
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',}}>Receipt number:</Typography> <Typography> {result.data.receiptNumber}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Name:</Typography> <Typography> {result.data.customerName}</Typography></Stack> 

                {/*End Reciept Number and Name  */}

                {/* List of products */}
                {result.data.product.map(prd => {
                  return (<>
                    <Divider sx={{marginTop: '0.5rem', marginBottom: '2rem'}}/>
                    <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Product:</Typography> <Typography> {prd.productName}</Typography></Stack> 
                    <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Price:</Typography> <Typography> {prd.price}</Typography></Stack> 
                    <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Quantity:</Typography> <Typography> {prd.quantity}</Typography></Stack> 
                    <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Total:</Typography> <Typography> {prd.totalPrice}</Typography></Stack> 

                  </>)

                })}
                {/* End of List of products */}

                {/* Total and Date */}
                <Divider sx={{marginTop: '2rem',marginBottom: '0.5rem'}}/>
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Total Amount:</Typography> <Typography> {result.data.grandTotal}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem', fontWeight: 900}}>Date Of Purchase:</Typography> <Typography> {result.data.date}</Typography></Stack> 
                {/*End of Total and Date */}
                
                {/* Time Issued */}
                <Divider sx={{marginTop: '0.5rem',marginBottom: '1rem'}}/>
                <Stack flexDirection='column' spacing={0.2} justifyContent='space-between' alignItems='center'>
                   <Typography sx={{...stl,marginRight: '0.5rem', fontWeight: 900}}>Time issued:</Typography>
                   <Typography> {`${moment().format("MMM Do YY, h:mm:ss a").split(',')[0]}`}
                   </Typography>

                   <Typography> {`${moment().format("MMM Do YY, h:mm:ss a").split(',')[1]}`}
                   </Typography>
                </Stack> 
                {/* End of Time Issued */}


              </Stack>            
            </p> }
            {receiptType === 'expenses' && <p id="child-modal-description">
              <Stack flexDirection='column'>

                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between' > <Typography sx={{...stl,marginRight: '0.5rem'}}>Receipt number:</Typography> <Typography> {result.data.receiptNumber}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Name:</Typography> <Typography> {result.data.collectorsName}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Purpose:</Typography> <Typography> {result.data.purpose}</Typography></Stack> 
                
                <Divider sx={{marginTop: '1rem',marginBottom: '1rem'}}/>
                
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Date:</Typography> <Typography> {result.data.date}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Amount:</Typography> <Typography> {result.data.amount}</Typography></Stack> 
                <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Time issued:</Typography> <Typography> {`${moment().format("MMM Do YY, h:mm:ss a")}`}</Typography></Stack> 
                
              </Stack>            
            </p> }

          </Box>
          <IconButton onClick={handleClose}><CloseIcon /></IconButton>
          <Button onClick={handlePrint}>Print</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function MessageModal({loggedUser, showError, showSuccess, msg, setShowError, setShowSuccess, result, receiptType}) {
  
  
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

            {showSuccess && <ChildModal loggedUser={loggedUser} result={result} receiptType={receiptType}/> }
            <IconButton onClick={handleClose}><CloseIcon /></IconButton>

          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
