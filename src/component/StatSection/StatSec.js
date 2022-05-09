import './StatSec.css'
import Box from '@mui/material/Box'
import LineChart from '../../chart/LineChart'
import DualAxesChart from '../../chart/DualAxes'

const StatSection = () => {
    const styling = {
        width:'38%', 
        height:'17rem', 
        backgroundColor:'#f7faff', 
        padding:'2rem',
        borderRadius: '4px'
        }
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
           
            }}>
            <LineChart  styling={styling}/>
            <DualAxesChart  styling={styling}/>
        </Box>
    );
}
 
export default StatSection;