import './StatSec.css'
import Box from '@mui/material/Box'
import LineChart from '../../chart/LineChart'
import DualAxesChart from '../../chart/DualAxes'

const StatSection = () => {
   
    return (
        <Box className='main-box' sx={{
            marginTop: '3rem',
            display:'flex', 
            gap: '2rem', 
            width:'100%',
            backgroundColor: 'white',
            borderRadius:'2px',
            paddingTop:'2rem',
            paddingBottom: '2rem',
            justifyContent:'center',
            '@media (max-width: 600px)': {
                marginTop: 0
              },
           
            }}>
            <LineChart />
            <DualAxesChart />
        </Box>
    );
}
 
export default StatSection;