import React from 'react';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {  Stack, TextField,Button,Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import axios from 'axios';

// ----------------------------------------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const url = process.env.REACT_APP_BASE_URL
export default function ForgetForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open,setOpen] =  useState(false);
  const [submit,setSubmit] =  useState(false);
  const [message,setMessage] = useState({
    'header':'',
    'sub':''
  });

  function handleClick() {
    setLoading(true);
    if(!values.username){
      setMessage({
        'header':'Username is required',
        'sub':'Enter username address to continue'
      })
      setOpen(true);
      setSubmit(false);
      return;
    }
    axios({
      method: 'get',
      url: `${url}admin/get-forget-password-link?identity=${values.username}&link=https://app.getbime.com/uy6hkPfpmHHWSaGUpr6X9UMN4WCQUx?username=${values.username}`,
    }).then(response=>{
      if(response.data.success ===false){
        setMessage({
          'header':'Username is not correct',
          'sub':'Edit and try again'
        })
        setOpen(true);
        setLoading(false);
      }
      if(response.data.success ===true){
        setMessage({
          'header':'Successful',
          'sub':'check your email to reset password'
        })
        setOpen(true);
        setLoading(false);
      }
    })
    .catch(error=>{
      console.log(error);
      setMessage({
        'header':'Something went wrong',
        'sub':'Try again'
      })
      setOpen(true);
      setLoading(false);
    })
   
  }
  const handleClose = ()=>{
    setOpen(false);
  }
  const ForgetSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validationSchema: ForgetSchema,
    onSubmit: () => {
    },
  });

  const {values, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik} >
      <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{message.header}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {message.sub}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={9}>
            <TextField
              fullWidth
              autoComplete="username"
              type="text"
              label="Enter Username"
              {...getFieldProps('username')}

            />
            </Grid>
              <Grid  item xs={3}>
              <LoadingButton
              style={{
                backgroundColor:'#3456d1',
                color:'white'
              }}
              size="large"
              onClick={handleClick}
              loading={loading}
              disabled={!values.username}
              variant="contained"
             >
                Send
              </LoadingButton>
            </Grid>
        
          </Grid>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          
        </Stack>
      </Form>
    </FormikProvider>
  );
}
