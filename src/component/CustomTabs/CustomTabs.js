import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Income from '../SalesRecord/Income'
import Expences from '../SalesRecord/Expences'
import Palette from '../../ThemeProvider';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({labels}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <Palette>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

              <Tab label={labels.itemOne} {...a11yProps(0)} sx={{width:'50%'}}/>
              <Tab label={labels.itemTwo} {...a11yProps(1)} sx={{width:'50%'}}/>
            </Tabs>
          </Palette>
      </Box>
      <Box sx={{width: '100%', backgroundColor: 'white'}}>
        <TabPanel value={value} index={0}>
          <Income />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Expences />
        </TabPanel>
      </Box>
     
    </Box>
  );
}
