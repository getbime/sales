import {useState,useEffect} from 'react'
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
import Search from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import DetailsModal from './DetailsModal'
import Confirmation from '../shared/Confirmation'


const ViewData = ({companyId}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const DAILY_INVOICE = process.env.REACT_APP_DAILY_INVOICE;
    const DAILY_EXPENSES = process.env.REACT_APP_DAILY_EXPENSES;
    const SEARCH_INVOICE = process.env.REACT_APP_SEARCH_INVOICES
    const SEARCH_EXPENSES = process.env.REACT_APP_SEARCH_EXPENSES 
    const DELETE_INVOICE = process.env.REACT_APP_DELETE_INVOICES
    const DELETE_EXPENSES = process.env.REACT_APP_DELETE_EXPENSES 

    const formatDate = (date) => {
        return date.toString().split(' ').splice(0,4).join(' ')
    }
       
    const [date, setDate] = useState(formatDate(new Date()));
    const [searchValue, setSearchValue] = useState('')
    const [byDate, setByDate] = useState(true)
    const [byText, setByText] = useState(false)
    const [openDetailModal, setOpenDetailModal] = useState(false)
    // const [openDeleteMessageModal, setopenDeleteMessageModal] = useState(false)
    const [detailValue, setDetailValue] = useState('')
    const [receiptNumber,setReceiptNumber] = useState(null)
    const [receiptType, setReceiptType] = useState(null)

    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [confirmData, setConfirmData] = useState("");


    // delete invoice or expenses funtion 
    const deleteInvoiceAndExpense = (receiptNumber, receiptType)=> {
        // close open detail modal
        setOpenDetailModal(false)
        // console.log(date,receiptNumber,receiptType)
        setOpenConfirmation(true);
        setConfirmData({
            header: receiptType,
            content: receiptNumber,
            status: "Delete",
            
          });

        
    }
    // delete invoice or expenses funtion to continue confirmation box
    const handleContinue = (receiptNumber, receiptType) => {
        // calling the delete useEffect function by seting date to trigger it
        setDate(date)
        setReceiptNumber(receiptNumber)
        setReceiptType(receiptType)
        setOpenConfirmation(false)
      } 

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

    
      
    function handleDisplayDetail (value,receiptType){
        // console.log(value)
        setOpenDetailModal(true)
        setDetailValue(value)
        setReceiptType(receiptType)
    }  

    const {isLoading: loadingExpenses, data: expenses} = useFetch(
        `${
            // this is checking if action is either delete receipt or get receipt
            receiptNumber != null && receiptType === 'expenses' 
            ? 
            `${BASE_URL}${DELETE_EXPENSES}?companyId=${companyId}&date=${date}&receiptNumber=${receiptNumber}`
            :
            `${BASE_URL}${DAILY_EXPENSES}?companyId=${companyId}&date=${date}`
        }`,
        receiptNumber,receiptType
        )

    const {isLoading: loadingInvoice, data: invoice} = useFetch(
        `${
            // this is checking if action is either delete receipt or get receipt

            receiptNumber != null && receiptType === 'invoice'
            ?
            `${BASE_URL}${DELETE_INVOICE}?companyId=${companyId}&date=${date}&receiptNumber=${receiptNumber}`
            :
            `${BASE_URL}${DAILY_INVOICE}?companyId=${companyId}&date=${date}`
        }`,
        receiptNumber,receiptType
    )
    const {isLoading: loadingExpensesSearch, data: expensesSearch} = useFetch(`${BASE_URL}${SEARCH_EXPENSES}?companyId=${companyId}&search=${searchValue}`,receiptNumber,receiptType)
    const {isLoading: loadingInvoiceSearch, data: invoiceSearch} = useFetch(`${BASE_URL}${SEARCH_INVOICE}?companyId=${companyId}&search=${searchValue}`,receiptNumber,receiptType)
    return (
        <Stack spacing={2} direction='column' sx={{
            width: '97.5%',
            marginTop: '3rem',
            '@media (max-width: 600px)': {
                marginTop: 0,
              },
        }}>
            {openDetailModal && <DetailsModal 
                openDetailModal={openDetailModal} 
                detailValue={detailValue} 
                setOpenDetailModal={setOpenDetailModal}
                deleteInvoiceAndExpense={deleteInvoiceAndExpense}
                receiptType={receiptType}
            />}

             {/* confirmation propmt box */}
                <Confirmation
                    openConfirmation={openConfirmation}
                    setOpenConfirmation={setOpenConfirmation}
                    confirmData={confirmData}
                    handleContinue={handleContinue}
                />
            {/* end of prompt confirmation box */}

            {/* {console.log(searchValue)} */}
                {/* {!loadingInvoiceSearch && console.log(searchValue)} */}
                {/* {!loadingExpenses && console.log(expenses)} */}
           
                <CustomTabs >
                    <HeadTab labels={labels} value={value} handleChange={handleChange}>
                        <Stack direction='row' spacing={2} justifyContent='space-between' alignItems='flex-end' sx={{
                            backgroundColor: 'white',
                            padding: '2rem 2rem',
                            '@media (max-width: 600px)': {
                                padding: '0.8rem 0.8rem',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                height: '11rem'
                              },
                        }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                                <Tab label={labels.itemOne} {...a11yProps(0)} sx={{width:'50%'}}/>
                                <Tab label={labels.itemTwo} {...a11yProps(1)} sx={{width:'50%'}}/>
                            </Tabs>

                            <TextField
                                id="input-with-icon-textfield"
                                label="Search Name or Reciept"
                                onChange={(e)=> {
                                    setSearchValue(e.target.value)
                                    setByDate(false)
                                    setByText(true)

                                    // reseting to null because delete is not happening
                                    setReceiptNumber(null)
                                    setReceiptType(null)
                                    
                                    
                                }}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <Search />
                                    </InputAdornment>
                                ),
                                }}
                                size='small'
                            />

                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <DatePicker
                                    label="Search with date"
                                    value={date==null ? new Date() : date}
                                    onChange={(newValue) => {
                                    setDate(formatDate(newValue));
                                    setByDate(true)
                                    setByText(false)

                                    // reseting to null because delete is not happening
                                    setReceiptNumber(null)
                                    setReceiptType(null)

                                    }}
                                    renderInput={(params) => <TextField sx={{width: '30%','@media (max-width: 600px)':{width: '76%'}}} size="small"{...params} />}
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
                                    {!loadingInvoice && !loadingInvoiceSearch && <TableBody>

                                        {byDate && invoice.result.length > 0 && invoice.result.map(inv => (
                                            <TableRow
                                            key={inv.invoice.receiptNumber}
                                            sx={{ 
                                                '&:last-child td, &:last-child th': { border: 0 }, 
                                                cursor: 'pointer',
                                                ':hover': {
                                                    backgroundColor: 'whitesmoke'
                                                }
                                              }}
                                              onClick = {()=> handleDisplayDetail(inv.invoice, 'invoice')}
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
                                        {byText && invoiceSearch.result.length > 0 && invoiceSearch.result.map(inv => (
                                            <TableRow
                                            key={inv.invoice.receiptNumber}
                                            sx={{ 
                                                '&:last-child td, &:last-child th': { border: 0 }, 
                                                cursor: 'pointer',
                                                ':hover': {
                                                    backgroundColor: 'whitesmoke'
                                                }
                                              }}
                                              onClick = {()=> handleDisplayDetail(inv.invoice, 'invoice')}
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
                                {console.log(loadingInvoice,loadingInvoiceSearch)}
                                {loadingInvoice  && <Box sx={{
                                    margin: 'auto',
                                    marginTop: '3rem',

                                }}><CircularProgress /></Box>  }
                                {!loadingInvoice && invoice.result.length == 0 && <Typography sx={{
                                    width: '50%',
                                    margin: 'auto',
                                    marginTop: '3rem',
                                    color: 'gray'

                                }}>NO INVIOCES INSERTED ON THIS DATE</Typography>}
                                {!loadingInvoiceSearch && invoiceSearch.result.length == 0 && <Typography sx={{
                                    width: '50%',
                                    margin: 'auto',
                                    marginTop: '3rem',
                                    color: 'gray'

                                }}>NO INVIOCES MATCH</Typography>}
                            </Box>
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <Box sx={{
                                    padding: '1rem 2rem 2rem 2rem'
                                }}>
                                 <CustomTable>
                                    <Expenses />
                                    {!loadingExpenses && !loadingExpensesSearch && <TableBody>
                                        {byDate && expenses.result.length > 0 && expenses.result.map((exp) => (
                                            <TableRow
                                            key={exp.expenses.receiptNumber}
                                            sx={{ 
                                                '&:last-child td, &:last-child th': { border: 0 }, 
                                                cursor: 'pointer',
                                                ':hover': {
                                                    backgroundColor: 'whitesmoke'
                                                }
                                              }}
                                              onClick = {()=> handleDisplayDetail(exp.expenses, 'expenses')}
                                            >
                                            <TableCell component="th" scope="row">
                                                {exp.expenses.collectorsName}
                                            </TableCell>
                                            <TableCell align="right">{exp.expenses.purpose}</TableCell>
                                            <TableCell align="right">{exp.expenses.product}</TableCell>
                                            <TableCell align="right">{exp.expenses.amount}</TableCell>
                                            <TableCell align="right">{exp.expenses.receiptNumber}</TableCell>
                                            <TableCell align="right">{exp.expenses.date}</TableCell>

                                            </TableRow>
                                        ))}
                                        {byText && expensesSearch.result.length > 0 && expensesSearch.result.map((exp) => (
                                            <TableRow
                                            key={exp.expenses.receiptNumber}
                                            sx={{ 
                                                '&:last-child td, &:last-child th': { border: 0 }, 
                                                cursor: 'pointer',
                                                ':hover': {
                                                    backgroundColor: 'whitesmoke'
                                                }
                                              }}
                                              onClick = {()=> handleDisplayDetail(exp.expenses, 'expenses')}
                                            >
                                            <TableCell component="th" scope="row">
                                                {exp.expenses.collectorsName}
                                            </TableCell>
                                            <TableCell align="right">{exp.expenses.purpose}</TableCell>
                                            <TableCell align="right">{exp.expenses.product}</TableCell>
                                            <TableCell align="right">{exp.expenses.amount}</TableCell>
                                            <TableCell align="right">{exp.expenses.receiptNumber}</TableCell>
                                            <TableCell align="right">{exp.expenses.date}</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>}
                                </CustomTable>
                                {(loadingExpenses || !byDate) && <Box sx={{
                                    margin: 'auto',
                                    marginTop: '3rem',

                                }}><CircularProgress /></Box>  }
                                {!loadingExpenses && expenses.result.length == 0 && <Typography sx={{
                                    width: '50%',
                                    margin: 'auto',
                                    marginTop: '3rem',
                                    color: 'gray'

                                }}>NO EXPENSES INSERTED ON THIS DATE</Typography>}
                                {!loadingExpensesSearch && expensesSearch.result.length == 0 && <Typography sx={{
                                    width: '50%',
                                    margin: 'auto',
                                    marginTop: '3rem',
                                    color: 'gray'

                                }}>NO EXPENSES MATCH</Typography>}
                            </Box>
                        </TabPanel>
                    </Box>
                </CustomTabs>

        </Stack>

    );
}
 
export default ViewData;