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

    const createStaff = (url,staffData,setStaffList,setIsLoadingGetStaff,setAddStaffErrorFlag,setAddStaffError) => {

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

    const deleteStaff = (url,setStaffList,setIsLoadingDeleteStaff,setDeleteStaffErrorFlag,setDeleteStaffError) => {


        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingDeleteStaff(false)
                setDeleteStaffError(msgImage)
                setDeleteStaffErrorFlag({err:true,succ:false})
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingDeleteStaff(false)


            if(data.success){
             setStaffList(data.message)
             setDeleteStaffError('Staff deleted')
             setDeleteStaffErrorFlag({err:false,succ:true})
            } 
            else {
                setDeleteStaffError(msgImage)
                setDeleteStaffErrorFlag({err:true,succ:false})
                setIsLoadingDeleteStaff(false)

            }

            }).catch(error => {
                setDeleteStaffError(msgImage)
                setDeleteStaffErrorFlag({err:true,succ:false})
                setIsLoadingDeleteStaff(false)

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


    const changePassword = (url,staffData,setIsLoadingChangePassword,setChangePasswordErrorFlag,setChangePasswordError) => {

        // console.log(staffData)
        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(staffData)
        })
        .then(response => {
            if(response.ok === false) {
                setIsLoadingChangePassword(false)
                setChangePasswordError(msgImage)
                setChangePasswordErrorFlag({err:true,succ:false})
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            console.log(data);
            setIsLoadingChangePassword(false)


            if(data.success){
                console.log(data.message)
                setChangePasswordError("Password Changed")
                setChangePasswordErrorFlag({err:false,succ:true})
            } 
            else {
                setChangePasswordError(data.message)
                setChangePasswordErrorFlag({err:true,succ:false})
                setIsLoadingChangePassword(false)

            }

            }).catch(error => {
                setChangePasswordError(msgImage)
                setChangePasswordErrorFlag({err:true,succ:false})
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