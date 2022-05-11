import * as React from 'react';
import CustomTabs from '../CustomTabs/CustomTabs'

import Box from '@mui/material/Box';

const Registration = () => {
    const labels = {
        itemOne: "Income",
        itemTwo: "Expences"
    }
   
    return (

        <Box sx={{
            width: '97%',
            backgroundColor: 'white',
            marginTop: '2rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                width: '100%'
              },

        }}>
            <Box sx={{
            width: '90%',
            backgroundColor: '#f7faff',
            margin: 'auto',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                paddingTop: '1rem',
                borderRadius: 2,
                paddingBottom: '1rem',

              },


        }}>
                <Box sx={{
                    border: '1px solid #D0D5DA',
                    borderRadius: 1,
                    width: '50%',
                    margin: 'auto',
                    backgroundColor: 'white',
                    '@media (max-width: 600px)': {
                        width: '90%',
                      },
                }}>
                    <Box sx={{
                        paddingTop: '1.2rem',
                        textAlign: 'left',
                        minHeight: '50vh',
                        backgroundColor: '#f7faff',
                        fontSize: 22,
                        // paddingBottom: '10rem'
                        
                    }}>
                        <CustomTabs labels={labels}/>
                        
                    </Box>
                        
                </Box>
            </Box>
        </Box>
       
    );
}
 
export default Registration;