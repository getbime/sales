import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Income from '../SalesRecord/Income'
import Expences from '../SalesRecord/Expences'
import Palette from '../../ThemeProvider';
import TabPanel from './TabPanel'



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function BasicTabs({labels,children,value,handleChange}) {
  
console.log(children)
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          {children[0]}
      </Box>
      <Box sx={{width: '100%', backgroundColor: 'white'}}>
       {children[1]}
      </Box>
     
    </Box>
  );
}
