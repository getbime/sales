import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const FormContainer = ({children,style}) => {
    return (
        <Box sx={{
            border: '1px solid #8CA1F0',
            borderRadius: 2,
            ...style}}>
            <Typography sx={{
                paddingTop: '1.2rem',
                paddingLeft: '1.9rem',
                textAlign: 'left',
                height: '4rem',
                backgroundColor: '#f7faff',
                fontSize: 22
                
            }}>{children[0]}</Typography>
            {children[1]}
        </Box>
    );
}
 
export default FormContainer;