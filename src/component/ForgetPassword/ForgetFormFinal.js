import React from 'react';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate,useSearchParams } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import {  Stack, TextField,Button, IconButton,Grid, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import axios from 'axios';

// component
import Iconify from './Iconify';
// ----------------------------------------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const url = process.env.REACT_APP_BASE_URL
export default function ForgetFormFinal() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [open,setOpen] =  useState(false);
  const [submit,setSubmit] =  useState(false);
  const [message,setMessage] = useState({
    'header':'',
    'sub':''
  });
  function handlePasswordChange() {
    setSubmit(!submit);
    if(!values.newPassword || !values.confirmPassword){
      setMessage({
        'header':'All fields are required',
        'sub':'Edit and try again'
      })
      setOpen(true);
      setSubmit(false);
      return;
    }
    if(values.newPassword !== values.confirmPassword){
      setMessage({
        'header':'Password and Confirm Password do not match',
        'sub':'Edit and try again'
      })
      setOpen(true);
      setSubmit(false);
      return;
    }
    let username = searchParams.get("username")
    axios({
      method: 'put',
      url: `${url}admin/continue-with-forget-password`,
      data: {
        "newpassword":values.newPassword,
        "identity":username
      }
    }).then(response=>{
      if(response.data.success ===false){
        setMessage({
          'header':'Something went wrong',
          'sub':'try again'
        })
        setOpen(true);
        setSubmit(false);
      }
      if(response.data.success ===true){
        setMessage({
          'header':'Password changed successfully',
          'sub':'Login with the new password'
        })
        setOpen(true);
        setSubmit(false);
      }
    })
    .catch(error=>{
      console.log(error);
      setMessage({
        'header':'Something went wrong',
        'sub':'Try again'
      })
      setOpen(true);
      setSubmit(false);
    })
  }
  const handleClose = ()=>{
    if(message.header ==="Password changed successfully"){
      setSubmit(false);
      navigate('/login', { replace: true });
    }

    setOpen(false);
  }
  const ForgetSchema = Yup.object().shape({
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword:Yup.string().required('Confirm Password is required')
  });

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword:''
    },
    validationSchema: ForgetSchema,
    onSubmit: () => {
      // navigate('/login', { replace: true });
    },
  });

  const {values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleConfirmShowPassword = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };
  
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
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ my: 1 }}>
          </Stack>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              label="New Password"
              {...getFieldProps('newPassword')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            </Stack>
          <Stack spacing={1}>
          <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ my: 1 }}>
          
          </Stack>
          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirm New Password"
            {...getFieldProps('confirmPassword')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleConfirmShowPassword} edge="end">
                    <Iconify icon={showConfirmPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          </Stack>
          <LoadingButton fullWidth style={{marginTop:'15px'}} size="large" type="submit" variant="contained" onClick={()=>{
            handlePasswordChange()
          }} loading={submit}>
                Change Password
            </LoadingButton>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          
        </Stack>
      </Form>
    </FormikProvider>
  );
}
