import * as React from 'react'
import CustomTable from '../CustomTable/CustomTable'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import CustomTabs from '../CustomTabs/CustomTabs'
import TabPanel from '../CustomTabs/TabPanel'
import HeadTab from '../CustomTabs/HeadTab'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material'
import Income from './Income'
import Expenses from './Expenses'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const ViewData = () => {
    const [date, setDate] = React.useState(null);
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

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    return (
        <Stack spacing={2} direction='column' sx={{
            width: '97.5%',
            marginTop: '3rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
              },
        }}>
           
                <CustomTabs >

                    <HeadTab labels={labels} value={value} handleChange={handleChange}>
                        <Stack direction='row' spacing={2} justifyContent='space-between' sx={{
                            backgroundColor: 'white',
                            padding: '2rem 2rem',
                            '@media (max-width: 600px)': {
                                padding: '0.8rem 0.8rem',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '7rem'
                              },
                        }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                                <Tab label={labels.itemOne} {...a11yProps(0)} sx={{width:'50%'}}/>
                                <Tab label={labels.itemTwo} {...a11yProps(1)} sx={{width:'50%'}}/>
                            </Tabs>
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <DatePicker
                                    label="Basic example"
                                    value={date==null ? new Date() : date}
                                    onChange={(newValue) => {
                                    setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField sx={{width: '50%','@media (max-width: 600px)':{width: '90%'}}} size="small"{...params} />}
                                />
                            </LocalizationProvider>
                        </Stack>
                    </HeadTab>

                    <Box>
                        <TabPanel value={value} index={0}>
                            <Box sx={{
                                padding: '1rem 2rem 2rem 2rem'
                            }}>
                                <CustomTable>
                                    <Income />
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </CustomTable>
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <Box sx={{
                                    padding: '1rem 2rem 2rem 2rem'
                                }}>
                                 <CustomTable>
                                    <Expenses />
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </CustomTable>
                            </Box>
                        </TabPanel>
                    </Box>
                </CustomTabs>

        </Stack>

    );
}
 
export default ViewData;