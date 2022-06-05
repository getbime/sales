import {useState} from 'react'
import Stack from '@mui/material/Stack'
import './Summary.css'
import Invoice from '../../images/invoice.png'
import Expenses from '../../images/expenses2.png'



const Summary = ({companyId}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const DAILY_INVOICE = process.env.REACT_APP_DAILY_INVOICE;
    const DAILY_EXPENSES = process.env.REACT_APP_DAILY_EXPENSES;
    const SEARCH_INVOICE = process.env.REACT_APP_SEARCH_INVOICES
    const SEARCH_EXPENSES = process.env.REACT_APP_SEARCH_EXPENSES 


    
       
    

    return (
        <Stack spacing={2} direction='row' sx={{
            width: '97.2%',
            backgroundColor: 'white',
            marginTop: '3rem',
            paddingTop: '4rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                paddingTop: 0,
                flexDirection: 'column',
                alignItems : 'center',
                justifyContent : 'center',  
                width: '98%'
              },
        }}>
            
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={Invoice}/>
                </div>
                <div className = 'content'>
                    <h3>This is content</h3>
                    <p>DIn publishing and graphic design,</p>
                </div>
                </div>    
            </div>

            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={Expenses}/>
                </div>
                <div className = 'content'>
                    <h3>This is content</h3>
                    <p>DIn publishing and graphic design, .</p>
                </div>
                </div>    
            </div>
        </Stack>

    );
}
 
export default Summary;