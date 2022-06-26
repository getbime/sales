import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Notify = ({alert}) => {
    console.log(alert)
    setTimeout(() => {
        alert.setAlertState(false)
    }, 10000);

    return ( 
        <>
            <Collapse in={alert.alertState}>
                <Alert severity={alert.alertVariant} sx={{
                    position: 'fixed',
                    marginLeft: '30rem',
                    marginTop: '2rem',
                    width: '30%',
                    height: '3.9rem',
                    '@media (max-width: 600px)': {
                        width: '60%',
                        margin: 'auto',
                        marginTop: 0,
                        marginLeft: '2.27rem',


                    },
                }}
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => alert.setAlertState(false)}
                    >  
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    }  
                >
                <AlertTitle>{alert.alertState}</AlertTitle>
                    <Typography>{alert.alertMsg}</Typography>
                </Alert>
            </Collapse>
        </>
     );
}
 
export default Notify;