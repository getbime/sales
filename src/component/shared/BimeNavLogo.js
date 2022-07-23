import Box from '@mui/material/Box';
import Image from '../../images/bimelogo.jpeg'
import Image2 from '../../images/bimelogo-removebg-preview.png'

const BimeNavLogo = () => {
    return ( 
        <Box sx={{
            width: '100%',
            height: '20%',
            backgroundSize: '60% 60%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Image})`,
            marginTop: '7rem',
            '@media (max-width: 600px)': {
                width: '75%',
                height: '27vh',
                marginTop: 0,
                backgroundImage: `url(${Image2})`,



            },
            
        }}>
        </Box>
    );
}
 
export default BimeNavLogo;