import {useState,useEffect} from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import { green } from '@mui/material/colors';
import Palette from '../../ThemeProvider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Switch from '@mui/material/Switch';
import useCrud from './useCrud'
import CircularProgress from '@mui/material/CircularProgress';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Confirmation from './Confirmation'
import { useNavigate } from 'react-router-dom'


const CustomField = ({labelName, fieldValue, setFieldValue, disable}) => {
    // console.log(fieldValue)
    return (
        <Stack flexDirection='column' spacing={0.5} alignItems='flex-start'>
            <Typography>{labelName}</Typography>
            <TextField id="outlined-basic" size='small' disabled={disable}  variant="outlined" value={fieldValue} onChange={(e)=>{setFieldValue(e.target.value)}} />

        </Stack>
    );
}
 

const Profile = ({user,toggleAlert}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const SINGLE_STAFF = process.env.REACT_APP_SINGLE_STAFF;
    const SINGLE_COMPANY = process.env.REACT_APP_SINGLE_COMPANY;
    const ALL_COMPANY_STAFF = process.env.REACT_APP_ALL_COMPANY_STAFF;
    const SET_PROFILE_PIC = process.env.REACT_APP_SET_PROFILE_PIC;
    const DELETE_COMPANY = process.env.REACT_APP_DELETE_COMPANY;
    const DELETE_STAFF = process.env.REACT_APP_DELETE_STAFF;
    const EDIT_COMPANY = process.env.REACT_APP_EDIT_COMPANY;
    const EDIT_STAFF = process.env.REACT_APP_EDIT_STAFF;
    const CREATE_STAFF = process.env.REACT_APP_CREATE_STAFF;
    const SUSPEND_STAFF = process.env.REACT_APP_SUSPEND_STAFF
    const CHANGE_PASSWORD = process.env.REACT_APP_CHANGE_PASSWORD


    const navigate = useNavigate()

    const [data,setData] = useState('')
    const [staffList,setStaffList] = useState('')

    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingEdit, setIsLoadingEdit] = useState(true)
    const [isLoadingDeleteStaff, setIsLoadingDeleteStaff] = useState(false)
    const [isLoadingSuspendStaff, setIsLoadingSuspendStaff] = useState(false)
    const [isLoadingChangePassword, setIsLoadingChangePassword] = useState(false)
    const [isLoadingDeleteAccount, setIsLoadingDeleteAccount] = useState(false)
    const [DeleteStaffId, setDeleteStaffId] = useState('')
    const [suspendStaffId, setSuspendStaffId] = useState('')
    const [openConfirmation, setOpenConfirmation] = useState(false)
    const [confirmData, setConfirmData] = useState('')

    const [isLoadingGetStaff, setIsLoadingGetStaff] = useState(true)

    const [oldpassword, setOldpassword] = useState('')
    const [newpassword, setNewpassword] = useState('')
    const [confirmNewpassword, setConfirmNewpassword] = useState('')


    const [companyName,setCompanyName] = useState('')
    const [staffName,setStaffName] = useState('')

    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')

    const [createStaffName,setCreateStaffName] = useState('')
    const [createStaffEmail,setCreateStaffEmail] = useState('')
    const [createStaffPhone,setCreateStaffPhone] = useState('')

    // use state errors
    const [picError, setPicError] = useState('')
    const [profileError, setProfileError] = useState('')
    const [addStaffError, setAddStaffError] = useState('')
    const [deleteStaffError, setDeleteStaffError] = useState('')
    const [changePasswordError, setChangePasswordError] = useState('')
    // end state errors

     // use state errors flag
     const [picErrorFlag, setPicErrorFlag] = useState({err:false,succ:false})
     const [profileErrorFlag, setProfileErrorFlag] = useState({err:false,succ:false})
     const [addStaffErrorFlag, setAddStaffErrorFlag] = useState({err:false,succ:false})
     const [deleteStaffErrorFlag, setDeleteStaffErrorFlag] = useState({err:false,succ:false})
     const [changePasswordErrorFlag, setChangePasswordErrorFlag] = useState({err:false,succ:false})
     // end state errors flag

// calling functions from crud file
    const {
        setProfilePic,
        updateProfileRequest,
        createStaff,
        deleteStaff,
        suspendStaff,
        changePassword,
        deleteAccount
    } = useCrud()
// end calling functions from crud file




    useEffect(()=>{
        // this code fetch in the login user or company
        if (user.userType === 'company'){

            fetch(`${BASE_URL}${SINGLE_COMPANY}?username=${user.userId}`)
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    setIsLoading(false)
                    setIsLoadingEdit(false)
                    setData({...data.message})
                    // console.log(data)
                    setCompanyName(data.message.companyName)
                    setPhone(data.message.phone)
                    setAddress(data.message.address)
                    setEmail(data.message.email)
                   
                }
                
            }).catch(error => {
                setIsLoading(false)
                setIsLoadingEdit(false)
                console.error('Error:', error);
            })

            fetch(`${BASE_URL}${ALL_COMPANY_STAFF}?companyId=${user.userId}`)
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    setIsLoadingGetStaff(false)
                    setStaffList(data.message)
                    // console.log(data.message)
                }
                
            }).catch(error => {
                setIsLoadingGetStaff(false)
                console.error('Error:', error);
            })
        }else if (user.userType === 'staff'){

            fetch(`${BASE_URL}${SINGLE_STAFF}?staffId=${user.userId}`)
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    setIsLoading(false)
                    setIsLoadingEdit(false)
                    setData({...data.message})
                    // console.log(data)
                    setStaffName(data.message.staffName)
                    setPhone(data.message.phone)
                    setAddress(data.message.address)
                    setEmail(data.message.email)

                }
                
            }).catch(error => {
                setIsLoading(false)
                setIsLoadingEdit(false)
                console.error('Error:', error);
            })
        }

      
    },[])  
    // the end of fetching a logged in user or company

    // uploading profile pic
    const uploadPic = async (pic) =>{
        if (user.userType === 'company'){
            //set profile pic is function from useCrude file
            await setProfilePic(`${BASE_URL}${SET_PROFILE_PIC}?companyId=${user.userId}&eventName=company`,
            pic,setData,setIsLoading,setPicErrorFlag,setPicError)
            !isLoading && toggleAlert(picErrorFlag.err,picError,'error')
           
        }
        else {
            //set profile pic is function from useCrude file
            await setProfilePic(`${BASE_URL}${SET_PROFILE_PIC}?staffId=${user.userId}&eventName=staff`,pic,setData,setIsLoading,setPicErrorFlag,setPicError)
            !isLoading && toggleAlert(picErrorFlag.err,picError,'error')

        }
    }
    // end of pro   file pic

    // update profile detail
    const updateProfile = async () => {
        if (user.userType === 'company'){

            const data = {
                 companyName,
                 address,
                 phone,
                 email
             }
            await updateProfileRequest(`${BASE_URL}${EDIT_COMPANY}?username=${user.userId}`,data,setData,setIsLoadingEdit,setProfileErrorFlag,setProfileError)
            if(!isLoadingEdit && profileErrorFlag.err)  toggleAlert(profileErrorFlag.err,profileError,'error')
            else if(!isLoadingEdit && profileErrorFlag.succ)  toggleAlert(profileErrorFlag.succ,profileError,'success')


        }else{

            const data = {
            staffName,
            address,
            phone,
            email
            }
            await updateProfileRequest(`${BASE_URL}${EDIT_STAFF}?staffId=${user.userId}`,data,setData,setIsLoadingEdit,setProfileErrorFlag,setProfileError)
            if(!isLoadingEdit && profileErrorFlag.err) toggleAlert(profileErrorFlag.err,profileError,'error')
            else if(!isLoadingEdit && profileErrorFlag.succ) toggleAlert(profileErrorFlag.succ,profileError,'success')
        }

    }
    //end of updating profile

    // creating staff
    const handleCreateStaff = async() => {
        const staffData = {
            companyName: data.companyName,
            companyId: user.userId,
            staffName: createStaffName,
            email: createStaffEmail,
            phone: createStaffPhone
        }
        console.log(staffData)
        await createStaff(`${BASE_URL}${CREATE_STAFF}`,staffData,setStaffList,setIsLoadingGetStaff,setAddStaffErrorFlag,setAddStaffError)
        if(!isLoadingGetStaff && addStaffErrorFlag.err) toggleAlert(addStaffErrorFlag.err,addStaffError,'error')
        else if(!isLoadingGetStaff && addStaffErrorFlag.succ) toggleAlert(addStaffErrorFlag.succ,addStaffError,'success')
    
        //reset field data
        setCreateStaffName('')
        setCreateStaffEmail('')
        setCreateStaffPhone('')
    }
    // end of creating staff


    // delete company staff
    const handleDeleteStaff = (staffId) => {
        setConfirmData({
            header: 'Staff',
            content: staffId,
            status: 'Delete',
            url: async ()=>{
                setIsLoadingDeleteStaff(true)
                await deleteStaff(`${BASE_URL}${DELETE_STAFF}?staffId=${staffId}&companyId=${user.userId}`,setStaffList,setIsLoadingDeleteStaff,setDeleteStaffErrorFlag,setDeleteStaffError)
                if(!isLoadingDeleteStaff && deleteStaffErrorFlag.err) toggleAlert(deleteStaffErrorFlag.err,deleteStaffError,'error')
                else if(!isLoadingDeleteStaff && deleteStaffErrorFlag.succ) toggleAlert(deleteStaffErrorFlag.succ,deleteStaffError,'success')
            }
        })
        setOpenConfirmation(true)
        setDeleteStaffId(staffId)

    }
    // end of delete company staff

    const handleSuspendStaff = (staffId,state) => {
        setConfirmData({
            header: 'Staff',
            content: staffId,
            status: 'Suspend',
            url: ()=>{
                setIsLoadingSuspendStaff(true)
                suspendStaff(`${BASE_URL}${SUSPEND_STAFF}`,{staffId,susspend:!state},setStaffList,setIsLoadingSuspendStaff)},
            
        })
        setOpenConfirmation(true)
        setSuspendStaffId(staffId)
       
    }

    // change staff password
    const handleChangePassword = async () => {
        if(newpassword === confirmNewpassword){
            setIsLoadingChangePassword(true)
            console.log({oldpassword,newpassword,confirmNewpassword})
            await changePassword(`${BASE_URL}${CHANGE_PASSWORD}?username=${user.userId}`,{oldpassword,newpassword},setIsLoadingChangePassword,setChangePasswordErrorFlag,setChangePasswordError)
            
            if(!isLoadingChangePassword && changePasswordErrorFlag.err) toggleAlert(changePasswordErrorFlag.err,changePasswordError,'error')
            else if(!isLoadingChangePassword && changePasswordErrorFlag.succ) toggleAlert(changePasswordErrorFlag.succ,changePasswordError,'success')


            // clear field
            setOldpassword('')
            setNewpassword('')
            setConfirmNewpassword('')
        }else{
            toggleAlert(true,'New password and Confirm password mismatch','error')
            
            // clear field
            setOldpassword('')
            setNewpassword('')
            setConfirmNewpassword('')
        }
    }
    // end of change password

    const handleDeleteAccount = () => {
        setConfirmData({
            header: 'Account',
            content: user.userId,
            status: 'Delete',
            url: ()=>{
                setIsLoadingDeleteAccount(true)
                deleteAccount(`${BASE_URL}${DELETE_COMPANY}?companyId=${user.userId}`,setIsLoadingDeleteAccount,navigate)},
            
        })
        setOpenConfirmation(true)
       
    }

    return (
        <Box sx={{
            maxWidth: '88%',
            backgroundColor: 'white',
            marginTop: '2rem',
            padding: '2rem 3rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                maxWidth: '98%',
                padding: '2rem 2rem'

              },
        }}>
            {/* {!isPendingImage && console.log(imageData,data)} */}
            {/* {!isLoadingGetStaff && console.log(staffList)} */}

            {/* confirmation propmt box */}
            <Confirmation 
                openConfirmation={openConfirmation} 
                setOpenConfirmation={setOpenConfirmation}
                confirmData={confirmData}
            />
            {/* end of prompt confirmation box */}

            


            <Stack flexDirection='column' spacing={8} >
                <Stack flexDirection='row' spacing={2} justifyContent='space-between' sx={{
                    '@media (max-width: 600px)': {
                       flexDirection: 'column',
                       alignItems: 'center'
        
                      },
                }}>
                    <Stack flexDirection='column' spacing={2} sx={{
                         '@media (max-width: 600px)': {
                            alignItems: 'center'
             
                           },
                    }}>
                        {!isLoading && <Avatar alt={
                            user.userType === 'company'? data.companyName : data.staffName} src={data.image} sx={{
                            height: '15rem',
                            width: '15rem'
                        }}/> }
                        
                        {isLoading && 
                            <Box sx={{
                                height: '15rem',
                                width: '15rem',
                                // width: '15rem'
                                backgroundColor: 'gray',
                                borderRadius: 50,
                                display:'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CircularProgress disableShrink /> 
                            </Box>
                        }
                        <TextField id="outlined-basic" size='small'  variant="outlined" type='file' onChange={(event)=> uploadPic(event.target.files[0])} disabled={isLoading} />
                    </Stack>

                    <Divider orientation="vertical" flexItem />
                    <Divider orientation="horizontal" flexItem />

                    {/* {console.log(companyName)} */}
                    <Stack flexDirection='column' spacing={2} >

                        {user.userType === 'company' ? 
                        <CustomField labelName={'Company Name'} fieldValue={companyName} setFieldValue={setCompanyName}/>
                        : <CustomField labelName={'Staff Name'} fieldValue={staffName} setFieldValue={setStaffName} disable={true}/>
                        }
                        <CustomField labelName={'Email Address'} fieldValue={email} setFieldValue={setEmail}/>
                        <CustomField labelName={'Address'} fieldValue={address} setFieldValue={setAddress}/>
                        <CustomField labelName={'Phone'} fieldValue={phone} setFieldValue={setPhone}/>

                        {!isLoadingEdit && <Button variant="contained" onClick={updateProfile}>Edit</Button> }
                        {isLoadingEdit && <LoadingButton variant="contained" loading >...loading</LoadingButton>}

                    
                    </Stack>    


                </Stack>

                <Divider orientation="horizontal" flexItem/>

                {/* add staff form */}
                {user.userType === 'company' && <Stack flexDirection='column' spacing={1} alignItems='flex-start'sx={{
                         '@media (max-width: 600px)': {
                            
                            // alignItems:'flex-end'
                           },
                    }}>

                    <SectionLabel text={'Add Staff'} />

                    <Stack flexDirection='row' alignItems='flex-end'  justifyContent='space-between' sx={{
                        width: '100%', 
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                            alignItems:'flex-start',
                            justifyContent: 'space-between',
                            height: '10rem'
                           },
                        }}>
                        <TextField id="outlined-basic" size='small' label='Name' variant="outlined" value={createStaffName} onChange={(e)=>setCreateStaffName(e.target.value)} />
                        <TextField id="outlined-basic" size='small' label='Email' variant="outlined" value={createStaffEmail} onChange={(e)=>setCreateStaffEmail(e.target.value)} />
                        <TextField id="outlined-basic" size='small' label='Phone' variant="outlined" value={createStaffPhone} onChange={(e)=>setCreateStaffPhone(e.target.value)}/>
                        <Palette>
                            <Fab aria-label="add" size="medium" color="primary"sx={{
                                boxShadow: 'none',
                                '@media (max-width: 600px)': {
                                    marginTop: '3.5rem',
                                    alignSelf: 'flex-end',
                                    justifySelf: 'center',
                                    position: 'absolute'
                                    
                                   },
                                 }} disabled={isLoadingGetStaff}  onClick={handleCreateStaff}>

                                {!isLoadingGetStaff ? <CheckIcon /> : <SaveIcon />}
                            </Fab>
                            {isLoadingGetStaff && (
                                <CircularProgress
                                    size={68}
                                    sx={{
                                    color: green[500],
                                    position: 'absolute',
                                    top: '45.3rem',
                                    left: '57.2rem',
                                    zIndex: 1,
                                    '@media (max-width: 600px)': {
                                    left: '17.2rem',
                                    top: '65.4rem',

                                       
                                        
                                       },
                                    }}
                                />
                            )}
                        </Palette>
                    </Stack>     
                </Stack>}

                {user.userType === 'company' && <Divider orientation="horizontal" flexItem/>}

                {/* staff list */}
                {user.userType === 'company' && 
                <Stack flexDirection='column' spacing={1} alignItems='flex-start'sx={{
                        
                    }}>

                    <SectionLabel text={'Staff List'} />

                    <List sx={{ width: '100%', bgcolor: 'background.paper',
                        '@media (max-width: 600px)': {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'

                        },
                    }}>
                        {(!isLoadingGetStaff && staffList.length > 0) && staffList.map(stf => (
                            <>
                                <ListItem alignItems="flex-start" sx={{padding:0}}
                                    secondaryAction={
                                        <Box sx={{
                                            marginLeft: '1orem',
                                            '@media (max-width: 600px)': {
                                                marginTop: '5rem',

                                            },
                                            }}>
                                            {(isLoadingSuspendStaff && suspendStaffId === stf.staffId) ? <CircularProgress
                                                size={30}
                                                sx={{
                                                color: green[500],
                                                position: 'absolute',
                                                top: '0.2rem',
                                                left: '-3rem',
                                                zIndex: 1,
                                                '@media (max-width: 600px)': {
                                                left: '-3rem',
                                                top: '5.1rem',

                                                
                                                    
                                                },
                                                }}
                                            />  :
                                            <Switch
                                                checked={stf.susspend}
                                                onChange={() => handleSuspendStaff(stf.staffId, stf.susspend)}
                                                name="suspend"
                                                color="primary"
                                            />
                                            } 
                                            


                                            <IconButton edge="end" aria-label="delete"
                                             disabled={isLoadingDeleteStaff && DeleteStaffId === stf.staffId}
                                             onClick={()=>handleDeleteStaff(stf.staffId)}
                                             >
                                                <DeleteIcon  />
                                            </IconButton>
                                            {(isLoadingDeleteStaff && DeleteStaffId === stf.staffId) && <CircularProgress
                                                size={35}
                                                sx={{
                                                color: green[500],
                                                position: 'absolute',
                                                top: '0.2rem',
                                                left: '3.7rem',
                                                zIndex: 1,
                                                '@media (max-width: 600px)': {
                                                left: '3.8rem',
                                                top: '5.1rem',

                                                
                                                    
                                                },
                                                }}
                                            /> }
                                        </Box>
                                        
                                    }
                                >
                                    <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={stf.image} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={stf.staffName}
                                    secondary={
                                        <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {stf.staffId}
                                        </Typography>
                                        {`_${stf.email} _${stf.phone}`}
                                        </>
                                    }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                            
                        ))}

                            {(!isLoadingGetStaff && staffList.length === 0) && <Typography sx={{
                                width: '50%',
                                color: 'gray',
                                '@media (max-width: 600px)':{
                                    width: '100%',

                                }

                            }}>YOU HAVENT CREATE ANY STAFF YET</Typography>}
                        
                        </List>    
                </Stack>}

                {user.userType === 'company' && <Divider orientation="horizontal" flexItem/>}
                
                    {/* change password */}
                    {user.userType === 'company' && <Stack flexDirection='column' spacing={1} alignItems='flex-start'sx={{
                         '@media (max-width: 600px)': {
                            
                            // alignItems:'flex-end'
                           },
                    }}>

                    <SectionLabel text={'Change Password'} />

                    <Stack flexDirection='row' alignItems='flex-end'  justifyContent='space-between' sx={{
                        width: '100%', 
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                            alignItems:'flex-start',
                            justifyContent: 'space-between',
                            height: '10rem'
                           },
                        }}>
                        <TextField
                            id="outlined-basic" size='small' 
                            label='Old Password' 
                            variant="outlined"
                            value={oldpassword}
                            onChange = {(e)=>setOldpassword(e.target.value)}
                        />

                        <TextField 
                            id="outlined-basic" size='small' 
                            label='New Password' 
                            variant="outlined" 
                            value={newpassword}
                            onChange = {(e)=>setNewpassword(e.target.value)} 
                        />

                        <TextField 
                            id="outlined-basic" 
                            size='small' 
                            label='Confirm New Password' 
                            variant="outlined" 
                            value={confirmNewpassword}
                            onChange = {(e)=>setConfirmNewpassword(e.target.value)} 
                        />
                        <Palette>
                            <Fab aria-label="add" size="medium" color="primary"sx={{
                                boxShadow: 'none',
                                '@media (max-width: 600px)': {
                                    marginTop: '3.5rem',
                                    alignSelf: 'flex-end',
                                    justifySelf: 'center',
                                    position: 'absolute'
                                    
                                   },
                                 }}  
                                 onClick = {handleChangePassword}
                                 disabled={isLoadingChangePassword}
                                 >

                                    {!isLoadingChangePassword && <ChangeCircleIcon />}
                                    {isLoadingChangePassword && <CircularProgress size={35} sx={{color: green[500],}} /> }
                            </Fab>
                        </Palette>
                    </Stack>     
                </Stack>}

                {user.userType === 'company' && <Divider orientation="horizontal" flexItem/>}

                {/* Delete account */}
                {user.userType === 'company' && <Stack flexDirection='column' spacing={1} alignItems='flex-start'sx={{
                         
                    }}>

                    <SectionLabel text={'Danger Zone'} />

                    <Stack flexDirection='row' alignItems='flex-end'  justifyContent='space-between' sx={{
                        width: '93%', 
                        border: '1px solid red',
                        borderRadius: 2,
                        padding: '2rem 2rem',
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                            alignItems:'flex-start',
                            height: '10rem',
                            width: '80%',
                        
                           },
                        }}>
                        <Stack direction='column' spacing={0.8} alignItems='flex-start' >
                            <Typography>Delete Account</Typography>
                            <Typography fontSize='0.9rem' align="left" sx={{color:'gray', }}>Clicking the button all history of your Account is lost</Typography>
                        
                        </Stack>    
                        {!isLoadingDeleteAccount && <Button variant="outlined" color='error' onClick={handleDeleteAccount}>Delete</Button> }
                        {isLoadingDeleteAccount && <LoadingButton variant="outlined" color='error' loading >...deleting</LoadingButton>}
                    
                    </Stack>     
                </Stack>}

            </Stack>
        </Box>
    );
}
 
export default Profile;

const SectionLabel = ({text}) => {
    return (
        <Typography sx={{
            backgroundColor: '#8CA1EC', 
            color:'white',
            padding: '0.5rem 1rem',
            '@media (max-width: 600px)': {
                width: '90%'
                
               },
            
            }}>{text}</Typography> 
    );
}
 