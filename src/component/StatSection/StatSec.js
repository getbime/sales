import Box from '@mui/material/Box'
import LineChart from '../../chart/LineChart'
import DualAxesChart from '../../chart/DualAxes'
import { PaddingOutlined } from '@mui/icons-material';

const StatSection = () => {
    return (
        <Box sx={{
            marginTop: '3rem',
            display:'flex', 
            gap: '4rem', 
            width:'97%',
            backgroundColor: 'white',
            borderRadius:'2px',
            paddingTop:'3rem',
            justifyContent:'center'
           
            }}>
            <LineChart />
            <DualAxesChart />
        </Box>
    );
}
 
export default StatSection;