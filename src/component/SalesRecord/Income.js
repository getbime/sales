import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Palette from '../../ThemeProvider';


const Income = () => {
    const inputLabels = {
        productLabel: "Product Name",
        priceLabel: "price",
        quantityLabel: "quantity",
        totalLabel: "total price"

    }
    const [date, setDate] = React.useState(null);
    const [inputFields, setInputFields] = React.useState([
        {
            productName: "",
            price: 0,
            quantity: 0,
            totalPrice: 0,
        },
    ]);

    const handleAddNewForm = ()=>{
        setInputFields([...inputFields, {
            productName: "",
            price: 0,
            quantity: 0,
            totalPrice: 0,
        },])
    }
    const handleRemoveNewForm = ()=>{
        const values = [...inputFields]
        values.pop()
        setInputFields(values)
    }

    const handleChangeInput = (event,index,fieldName)=>{
        const values = [...inputFields]
        console.log(event.target.label,index)
        values[index][fieldName] = event.target.value
        console.log(values[index])
        setInputFields(values) 
    }

    const handleFormSubmit = ()=>{
       console.log(inputFields)
    }


    return (

        <Stack direction="row">
            <Stack spacing={3} direction="column" sx={{
                padding: '2rem'
            }}>

                <TextField id="outlined-basic" label="Customer Name" variant="outlined" size='small'/>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Basic example"
                        value={date==null ? new Date() : date}
                        onChange={(newValue) => {
                        setDate(newValue);
                        }}
                        renderInput={(params) => <TextField size="small"{...params} />}
                    />
                </LocalizationProvider>

                {inputFields.map((form,index)=>(
                    <Stack key={index} spacing={2} direction="column">
                        <Divider />

                        <Stack spacing={2} direction="column">
                            <TextField id="outlined-basic" label={inputLabels.productLabel} variant="outlined" size='small' value={inputFields.productName} onChange={(event)=>handleChangeInput(event,index,"productName")}/>

                            <Stack spacing={2} direction="row" >
                                <TextField id="outlined-basic" type="number" label={inputLabels.priceLabel} variant="outlined" size='small' InputProps={{
                                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                                }}value={inputFields.price} onChange={(event)=>handleChangeInput(event,index,"price")}/>
                                <TextField id="outlined-basic" type="number" label={inputLabels.quantityLabel} variant="outlined" size='small'value={inputFields.quantity} onChange={(event)=>handleChangeInput(event,index,"quantity")}/>


                            </Stack>
                                <TextField id="outlined-basic" type="number" label={inputLabels.totalLabel} variant="outlined" size='small' InputProps={{
                                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                                }} value={inputFields.totalPrice} onChange={(event)=>handleChangeInput(event,index,"totalPrice")}/ >
                        </Stack>

                    </Stack>
                ))}

                <Palette>
                    <Button variant="contained" onClick={handleFormSubmit}><Typography>Submit</Typography></Button>
                </Palette>
                
            </Stack>

            <Stack direction="column" spacing={1} sx={{
                position: 'absolute',
                alignSelf: 'flex-end',
                justifySelf: 'flex-end',
                marginLeft: '30.5%',
                marginBottom: '2rem',
                '@media (max-width: 600px)': {
                    marginLeft: '75.5%',
                  },

            }}>
                <Fab aria-label="add" size="medium" sx={{
                    borderRight: '1px solid #ABB5C5',
                    backgroundColor: 'white',
                    boxShadow: 'none',
                }} onClick={handleAddNewForm}>
                    <Palette>

                        <AddIcon color="secondary"/>
                    </Palette>
                </Fab>
                <Fab aria-label="add" size="medium" sx={{
                    borderRight: '1px solid #ABB5C5',
                    backgroundColor: 'white',
                    boxShadow: 'none'
                }}onClick={handleRemoveNewForm}>
                    <Palette>
                        <RemoveIcon color="secondary"/>

                    </Palette>
                </Fab>
            </Stack>
        </Stack>

    );
}
 
export default Income;