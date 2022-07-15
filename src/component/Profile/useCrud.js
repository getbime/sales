import {useState, useEffect} from 'react'

const useCrud = () => {
    const [errorMsg ,setErrorMsg] = useState('')
    const [showError ,setShowError] = useState(false)
    const msgImage ='Something went wrong try again'
    
    // setting profile pic in profile.js file
    const setProfilePic = (url,pic,setData,setIsLoading,setPicErrorFlag,setPicError) => {
        // console.log(pic)
        const file = new FormData()
        file.append('profile_pic', pic)
        setIsLoading(true)
            
            fetch(url,{
            method: 'PUT',
            // headers: {"Content-Type": "application/json"},
            body: file
            })
            .then(response => {
                console.log(response)
                if(response.ok === false) {
                    setIsLoading(false)
                    setPicError(msgImage)
                    setPicErrorFlag({err:true, succ:false})
                    throw Error(msgImage)
                }
                else return response.json()
            })
            .then(data => {
                // console.log(data);
                setIsLoading(false)
    
    
                if(data.success){
                 setData({...data.message})
                 
                } 
                else {
                    setErrorMsg(msgImage)
                    setIsLoading(false)
                    setPicError('Please your image size should not be more than 10mb')
                    setPicErrorFlag({err:true, succ:false})

                }
    
                }).catch(error => {
                    setPicError(msgImage)
                    setPicErrorFlag({err:true, succ:false})
                    setShowError(true)
                    setIsLoading(false)
    
                    console.error('Error:', error);
                })
       
      
    }
    // end of setting profile pic


    // update user profile
    const updateProfileRequest = (url,profileData,setData,setIsLoadingEdit,setProfileErrorFlag,setProfileError) => {

        setIsLoadingEdit(true)
   

        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(profileData)
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingEdit(false)
                setProfileError(msgImage)
                setProfileErrorFlag({err:true,succ:false})
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingEdit(false)


            if(data.success){
                setData({...data.message})
                setProfileError('Profile updated')
                setProfileErrorFlag({err:false,succ:true})
            } 
            else {
                setProfileError(msgImage)
                setProfileErrorFlag({err:true,succ:false})
                setIsLoadingEdit(false)

            }

            }).catch(error => {
                setProfileError(msgImage)
                setProfileErrorFlag({err:true,succ:false})
                setIsLoadingEdit(false)

                console.error('Error:', error);
            })
      
    }

    const createStaff = (
        url,
        staffData,
        setStaffList,
        setIsLoadingGetStaff,
        setAddStaffErrorFlag,
        setAddStaffError,
        setNewlyAddedStaffPassword,
        setShowCreatedStaffPassword) => {

        // console.log(staffData)
       
        setIsLoadingGetStaff(true)
   

        fetch(url,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(staffData)
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingGetStaff(false)
                setAddStaffError(msgImage)
                setAddStaffErrorFlag({err:true,succ:false})
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingGetStaff(false)


            if(data.success){
             setStaffList(data.message)
             setAddStaffError('Staff created')
             setAddStaffErrorFlag({err:false,succ:true})
             setNewlyAddedStaffPassword(data.password)
             setShowCreatedStaffPassword(true)
            } 
            else {
                setAddStaffError(msgImage)
                setAddStaffErrorFlag({err:true,succ:false})
                setIsLoadingGetStaff(false)

            }

            }).catch(error => {
                setAddStaffError(msgImage)
                setAddStaffErrorFlag({err:true,succ:false})
                setIsLoadingGetStaff(false)

                console.error('Error:', error);
            })
      
    }

    const deleteStaff = (url,setStaffList,setIsLoadingDeleteStaff,setAlertMsg,setAlertState,setAlertVariant) => {


        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingDeleteStaff(false)
                setAlertMsg(msgImage)
                setAlertState(true)
                setAlertVariant('error')
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingDeleteStaff(false)


            if(data.success){
             setStaffList(data.message)
             setAlertMsg('Staff deleted')
             setAlertState(true)
             setAlertVariant('success')

            } 
            else {
                setAlertMsg(msgImage)
                setAlertState(true)
                setAlertVariant('error')
                setIsLoadingDeleteStaff(false)


            }

            }).catch(error => {
                setAlertMsg(msgImage)
                setAlertState(true)
                setIsLoadingDeleteStaff(false)
                setAlertVariant('error')


                console.error('Error:', error);
            })
      
    }

    const suspendStaff = (url,staffData,setStaffList,setIsLoadingSuspendStaff) => {

        console.log(staffData)
        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(staffData)
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingSuspendStaff(false)
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            console.log(data);
            setIsLoadingSuspendStaff(false)


            if(data.success){
             setStaffList(data.message)
            } 
            else {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingSuspendStaff(false)

            }

            }).catch(error => {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingSuspendStaff(false)

                console.error('Error:', error);
            })
      
    }


    const changePassword = (url,staffData,setIsLoadingChangePassword,setAlertMsg,setAlertState,setAlertVariant) => {

        // console.log(staffData)
        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(staffData)
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingChangePassword(false)
                setAlertMsg(msgImage)
                setAlertState(true)
                setAlertVariant('error')
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            console.log(data);
            setIsLoadingChangePassword(false)


            if(data.success){
                console.log(data.message)
                setAlertMsg("Password Changed")
                setAlertState(true)
                setAlertVariant('success')
            } 
            else {
                setAlertMsg(data.message)
                setAlertState(true)
                setAlertVariant('error')
                setIsLoadingChangePassword(false)

            }

            }).catch(error => {
                setAlertMsg(msgImage)
                setAlertState(true)
                setAlertVariant('error')
                setIsLoadingChangePassword(false)

                console.error('Error:', error);
            })
      
    }

    const deleteAccount = (url,setIsLoadingDeleteAccount,navigate) => {

        // console.log(staffData)
        fetch(url,{
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingDeleteAccount(false)
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingDeleteAccount(false)


            if(data.success){
             console.log(data.message)
             window.localStorage.removeItem('userId');
             window.localStorage.removeItem('userToken');
             window.localStorage.removeItem('userType');
             navigate('/login')

            } 
            else {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingDeleteAccount(false)

            }

            }).catch(error => {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingDeleteAccount(false)

                console.error('Error:', error);
            })
      
    }

 

    return {
        showError,
        errorMsg,
        setProfilePic,
        updateProfileRequest,
        createStaff,
        deleteStaff,
        suspendStaff,
        changePassword,
        deleteAccount
    }
}  

  
export default useCrud