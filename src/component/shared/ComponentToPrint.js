import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import './view-data.css'
import Avatar from "@mui/material/Avatar";


const style = {
    // top: '35%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
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

export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <Box className="print-source" ref={ref} sx={{ height: '70vh', border: 'none', overflow: 'auto',
      '@media (max-width: 600px)':{
        width: '80%',
        height: '90vh'
      }
    }}>
  
      
        <Box >
  
          <Stack flexDirection="row"  alignItems='center'>
            <Avatar
                    {...stringAvatar(props.companyName)}
                sx={{
                    height: "4rem",
                    width: "4rem",
                    border: "1px solid black",
                    color: "black"

                }}
            />
            <h2 id="child-modal-title">{props.companyName.toUpperCase()}</h2>
          </Stack>
  
          <div className="divider"></div>

  
          {props.receiptType === 'invoice' && <Stack flexDirection='column'>
  
              {/*Reciept Number and Name  */}
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',}}>Receipt number:</Typography> <Typography> {props.detailValue.receiptNumber}</Typography></Stack> 
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Customer Name:</Typography> <Typography> {props.detailValue.customerName}</Typography></Stack> 
  
              {/*End Reciept Number and Name  */}
  
              <div className="divider margin-bottom"></div>
              {/* List of products */}
               {props.detailValue.product.map(prd => {
                return (<>
                  <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>{prd.productName}</Typography> <Typography> {prd.totalPrice}</Typography></Stack> 
                  {/* <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Price Total:</Typography> <Typography> {prd.totalPrice}</Typography></Stack>  */}
  
                </>)
  
              })}
              {/* End of List of products */}
  
              {/* Total and Date */}
              <div className="divider margin-top"></div>

              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Total Amount:</Typography> <Typography> {props.detailValue.grandTotal}</Typography></Stack> 
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem', fontWeight: 900}}>Date Of Purchase:</Typography> <Typography> {props.detailValue.date}</Typography></Stack> 
              {/*End of Total and Date */}
              
              {/* Time Issued */}
              <div className="divider"></div>

              <Stack flexDirection='column' spacing={0.2} justifyContent='space-between' alignItems='center'>
                <Typography sx={{...stl,marginRight: '0.5rem', fontWeight: 900}}>Time issued:</Typography>
                <Typography> {`${moment().format("MMM Do YY, h:mm:ss a").split(',')[0]}`}
                </Typography>
  
                <Typography> {`${moment().format("MMM Do YY, h:mm:ss a").split(',')[1]}`}
                </Typography>
              </Stack> 
              {/* End of Time Issued */}
  
  
            </Stack> }           
          {props.receiptType === 'expenses' && <p id="child-modal-description">
            <Stack flexDirection='column'>
  
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between' > <Typography sx={{...stl,marginRight: '0.5rem'}}>Receipt number:</Typography> <Typography> {props.detailValue.receiptNumber}</Typography></Stack> 
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Name:</Typography> <Typography> {props.detailValue.collectorsName}</Typography></Stack> 
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem'}}>Purpose:</Typography> <Typography> {props.detailValue.purpose}</Typography></Stack> 
              
              <Divider sx={{marginTop: '1rem',marginBottom: '1rem'}}/>
              
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Date:</Typography> <Typography> {props.detailValue.date}</Typography></Stack> 
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Amount:</Typography> <Typography> {props.detailValue.amount}</Typography></Stack> 
              <Stack flexDirection='row' spacing={0.2} justifyContent='space-between'> <Typography sx={{...stl,marginRight: '0.5rem',fontWeight: 900}}>Time issued:</Typography> <Typography> {`${moment().format("MMM Do YY, h:mm:ss a")}`}</Typography></Stack> 
              
            </Stack>            
          </p> }
  
        </Box>
        
      </Box>
    );
  });