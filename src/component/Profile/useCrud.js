import {useState, useEffect} from 'react'

const useCrud = () => {
    const [errorMsg ,setErrorMsg] = useState('')
    const [showError ,setShowError] = useState(false)
    const msgImage ='image upload error'
    
    const setProfilePic = (url,pic,setData,setIsLoading) => {

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
            if(response.ok == false) {
                setIsLoading(false)
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
                setShowError(true)
                setIsLoading(false)

            }

            }).catch(error => {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoading(false)

                console.error('Error:', error);
            })
      
    }

    const updateProfileRequest = (url,profileData,setData,setIsLoadingEdit) => {

        // console.log(profileData)
       
        setIsLoadingEdit(true)
   

        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(profileData)
        })
        .then(response => {
            if(response.ok == false) {
                setIsLoadingEdit(false)
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingEdit(false)


            if(data.success){
             setData({...data.message})
            } 
            else {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingEdit(false)

            }

            }).catch(error => {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingEdit(false)

                console.error('Error:', error);
            })
      
    }

    const createStaff = (url,staffData,setStaffList,setIsLoadingGetStaff) => {

        // console.log(staffData)
       
        setIsLoadingGetStaff(true)
   

        fetch(url,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(staffData)
        })
        .then(response => {
            if(response.ok == false) {
                setIsLoadingGetStaff(false)
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingGetStaff(false)


            if(data.success){
             setStaffList(data.message)
            } 
            else {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingGetStaff(false)

            }

            }).catch(error => {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingGetStaff(false)

                console.error('Error:', error);
            })
      
    }

    const deleteStaff = (url,setStaffList,setIsLoadingDeleteStaff) => {


        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        })
        .then(response => {
            if(response.ok == false) {
                setIsLoadingDeleteStaff(false)
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            // console.log(data);
            setIsLoadingDeleteStaff(false)


            if(data.success){
             setStaffList(data.message)
            } 
            else {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingDeleteStaff(false)

            }

            }).catch(error => {
                setErrorMsg(msgImage)
                setShowError(true)
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
            if(response.ok == false) {
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


    const changePassword = (url,staffData,setIsLoadingChangePassword) => {

        // console.log(staffData)
        fetch(url,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(staffData)
        })
        .then(response => {
            if(response.ok == false) {
                setIsLoadingChangePassword(false)
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            console.log(data);
            setIsLoadingChangePassword(false)


            if(data.success){
             console.log(data.message)
            } 
            else {
                setErrorMsg(msgImage)
                setShowError(true)
                setIsLoadingChangePassword(false)

            }

            }).catch(error => {
                setErrorMsg(msgImage)
                setShowError(true)
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
            if(response.ok == false) {
                setIsLoadingDeleteAccount(false)
                throw Error(msgImage)
            }
            else return response.json()
        })
        .then(data => {
            console.log(data);
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