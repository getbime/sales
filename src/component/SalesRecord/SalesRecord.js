import * as React from 'react';
import CustomTabs from '../CustomTabs/CustomTabs'
import TabPanel from '../CustomTabs/TabPanel'
import Income from './Income'
import Expences from './Expences';
import HeadTab from '../CustomTabs/HeadTab'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Box from '@mui/material/Box';

const SalesRecord = () => {
    
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const labels = {
        itemOne: "Income",
        itemTwo: "Expenses"
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   
    return (

        <Box sx={{
            maxWidth: '97%',
            // border: '1px solid black',
            backgroundColor: 'white',
            marginTop: '2rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
                maxWidth: '98%',

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
                        <CustomTabs >
                            <HeadTab labels={labels} value={value} handleChange={handleChange}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                                    <Tab label={labels.itemOne} {...a11yProps(0)} sx={{width:'50%'}}/>
                                    <Tab label={labels.itemTwo} {...a11yProps(1)} sx={{width:'50%'}}/>
                                </Tabs>
                            </HeadTab>
                            <Box>
                                <TabPanel value={value} index={0}>
                                    <Income />
                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    <Expences />
                                </TabPanel>
                            </Box>
                             
                        </CustomTabs>
                        
                    </Box>
                        
                </Box>
            </Box>
        </Box>
       
    );
}
 
export default SalesRecord;