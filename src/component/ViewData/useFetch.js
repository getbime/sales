import {useState, useEffect} from 'react'

const useFetch = (url,receiptNumber,receiptType) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    useEffect(()=>{
        if (receiptNumber === null || receiptType === null){

            fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    setIsLoading(false)
                    setData(data)
                    console.log(data)
                }
                
            }).catch(error => {
                setIsLoading(false)
                console.error('Error:', error);
            })
        }else {
            fetch(url,{
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                })
            .then(res => res.json())
            .then(data => {
                if(data.success === true){
                    setIsLoading(false)
                    setData(data)
                }
                
            }).catch(error => {
                setIsLoading(false)
                console.error('Error:', error);
            })
        }
      
    },[url])  
    return {isLoading,data}
}  

export default useFetch
  
