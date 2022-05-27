import {useState} from 'react'
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
import { TextField, Typography } from '@mui/material'
import Income from './Income'
import Expenses from './Expenses'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import useFetch from './useFetch'
import CircularProgress from '@mui/material/CircularProgress';


const ViewData = ({companyId}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const DAILY_INVOICE = process.env.REACT_APP_DAILY_INVOICE;
    const DAILY_EXPENSES = process.env.REACT_APP_DAILY_EXPENSES;

    const formatDate = (date) => {
        return date.toString().split(' ').splice(0,4).join(' ')
    }
       
    const [date, setDate] = useState(formatDate(new Date()));
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

    const [value, setValue] = useState(0);

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
      
      const {isLoading: loadingExpenses, data: expenses} = useFetch(`${BASE_URL}${DAILY_EXPENSES}?companyId=${companyId}&date=Mon May 23 2022`)
      const {isLoading: loadingInvoice, data: invoice} = useFetch(`${BASE_URL}${DAILY_INVOICE}?companyId=${companyId}&date=${date}`)
    return (
        <Stack spacing={2} direction='column' sx={{
            width: '97.5%',
            marginTop: '3rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
              },
        }}>
                {console.log(date)}
                {/* {!loadingExpenses && console.log(expenses)} */}
           
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
                                    setDate(formatDate(newValue));
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
                                    {!loadingInvoice && <TableBody>

                                        {invoice.result.length > 0 && invoice.result.map(inv => (
                                            <TableRow
                                            key={inv.invoice.receiptNumber}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                 <TableCell component="th" scope="row">
                                                    {inv.invoice.customerName}
                                                </TableCell>

                                                <TableCell align="right">{
                                                inv.invoice.product.length > 1 ? `${inv.invoice.product[0].productName} ...`
                                                : inv.invoice.product[0].productName
                                                }</TableCell>

                                                 <TableCell align="right">{
                                                inv.invoice.product.length > 1 ? `${inv.invoice.product[0].quantity} ...`
                                                : inv.invoice.product[0].quantity
                                                }</TableCell>

                                                 <TableCell align="right">{
                                                inv.invoice.product.length > 1 ? `${inv.invoice.product[0].price} ...`
                                                : inv.invoice.product[0].price
                                                }</TableCell>

                                                <TableCell align="right">{inv.invoice.grandTotal}</TableCell>
                                                <TableCell align="right">{inv.invoice.receiptNumber}</TableCell>
                                                <TableCell align="right">{inv.invoice.date}</TableCell>    

                                            </TableRow>
                                        ))}
                                    </TableBody>}

                                </CustomTable>
                                {loadingInvoice && <Box sx={{
                                    margin: 'auto',
                                    marginTop: '3rem',

                                }}><CircularProgress /></Box>  }
                                {!loadingInvoice && invoice.result.length == 0 && <Typography sx={{
                                    width: '50%',
                                    margin: 'auto',
                                    marginTop: '3rem',
                                    color: 'gray'

                                }}>NO INVIOCES INSERTED ON THIS DATE</Typography>}
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