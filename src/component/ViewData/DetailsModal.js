import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import ReactToPrint,{useReactToPrint} from 'react-to-print';
import moment from 'moment';
import { ComponentToPrint } from '../shared/ComponentToPrint';
import Avatar from "@mui/material/Avatar";



const companyName = window.localStorage.getItem('companyName')

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #3456d1',
  boxShadow: 24,
  p: 4,
  '@media (max-width: 600px)':{
    width: '70%'
  }
};
const stl = {
  color: 'black'
}


  

export default function BasicModal({openDetailModal, detailValue, setOpenDetailModal,deleteInvoiceAndExpense,receiptType}) {
  // console.log(detailValue)
    // recipt printing
    const componentRef = React.useRef();
    
    // company name first three letters
    
    function stringAvatar(name) {
      return {
        sx: {
          bgcolor: stringToColor(name),
          width: 50,
          height: 50 
        },
        children: `${name.trim().split(' ').map((wrd)=>{

          if (name.trim().split(' ').length > 1 ){
            return (wrd.substr(0,1).toUpperCase())
    
          }else {
            return (wrd.substr(0,3).toUpperCase())
    
          }
        })}`,
      };
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
  

    // console.log(companyThreeLetters)
    //end company name first three letters


  return (
    <div>
      {/* {console.log(detailValue)} */}
      <Modal
        open={openDetailModal}
        onClose={()=>setOpenDetailModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        
          
          <Box sx={{ ...style, width: 300, height: '100vh', border: 'none', overflow: 'auto',
          '@media (max-width: 600px)':{
            width: '80%',
            height: '90vh'
          }
        }}>

          
            <Box >

              <Stack flexDirection="row" justifyContent='space-between' alignItems='center'>
                  
                  <Avatar
                     {...stringAvatar(companyName)}
                    // src={''}
                    sx={{
                      height: "4rem",
                      width: "4rem",
                    }}
                  />
                <h2 id="child-modal-title">{companyName.toUpperCase()}</h2>
              </Stack>

              <Divider />

                {receiptType === 'invoice' && <Stack flexDirection='column'>

                  {/*Reciept Number and Name  */}
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',}}>Receipt number:</Typography> <Typography> {detailValue.receiptNumber}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Mode of payment:</Typography> <Typography> {detailValue.payment}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Name:</Typography> <Typography> {detailValue.customerName}</Typography></Stack> 

                  {/*End Reciept Number and Name  */}

                  {/* List of products */}
                  {detailValue.product.map(prd => {
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
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Total Amount:</Typography> <Typography> {detailValue.grandTotal}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem', fontWeight: 900}}>Date Of Purchase:</Typography> <Typography> {detailValue.date}</Typography></Stack> 
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


                </Stack>}
              {receiptType === 'expenses' && 
                <Stack flexDirection='column'>

                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between' > <Typography sx={{...stl,marginRight: '0.5rem'}}>Receipt number:</Typography> <Typography> {detailValue.receiptNumber}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Mode of payment:</Typography> <Typography> {detailValue.payment}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Name:</Typography> <Typography> {detailValue.collectorsName}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Purpose:</Typography> <Typography> {detailValue.purpose}</Typography></Stack> 
                  
                  <Divider sx={{marginTop: '1rem',marginBottom: '1rem'}}/>
                  
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Date:</Typography> <Typography> {detailValue.date}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Amount:</Typography> <Typography> {detailValue.amount}</Typography></Stack> 
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Time issued:</Typography> <Typography> {`${moment().format("MMM Do YY, h:mm:ss a")}`}</Typography></Stack> 
                  
                </Stack>            
               }

            </Box>
            <Stack flexDirection='row' justifyContent='space-between'>
              <IconButton onClick={()=>setOpenDetailModal(false)}><Button style={{width:'100%'}} variant="outlined">Back</Button></IconButton>
              
                
              <ReactToPrint
                trigger={() => <IconButton ><Button style={{width:'100%'}} variant="outlined">Print</Button></IconButton>}
                content={() => componentRef.current}
              />

              <IconButton onClick={()=>deleteInvoiceAndExpense(detailValue.receiptNumber, receiptType)}><Button style={{width:'100%'}} color="error" variant="outlined">Delete</Button></IconButton>

           
            </Stack>
          </Box>

      </Modal>
      <ComponentToPrint ref={componentRef} detailValue={detailValue}  companyName={companyName} receiptType={receiptType}/>
    </div>
  );
}

