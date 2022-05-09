import './MainBody.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BasicCard = (bgColor) => {
    return <Card className='basic-card' sx={{
         minWidth: "45%", 
         backgroundColor: bgColor, 
         color:"white", boxShadow: 'none', 
         borderRadius:"0.7rem", 
         }}>
                <CardContent className='basic-card-content' sx={{ 
                    display:"flex", 
                    flexDirection: "column", 
                    alignItems: "flex-start", 
                    justifyContent: "space-between",
                    marginTop: 2, marginBottom: 2,
                    }}>
                    <Typography className='basic-card-content-text' sx={{ fontSize: 16 }}  gutterBottom>
                        Total Income
                    </Typography>
                    <Typography className='basic-card-content-text' variant="h4" component="div" sx={{ fontWeight: "bold" }}>
                        $ 5000,173
                    </Typography>
                    <Typography className='basic-card-content-text' sx={{ fontSize: 14, }} >
                        .Saved 25%
                    </Typography>
                </CardContent>
            </Card>
}

const MainBody = () => {
    return (
        <div className="main-body">
            {BasicCard("#3b76ef")}
            {BasicCard("#63c7ff")}
            {BasicCard("#a66dd4")}
            {BasicCard("#6dd4b1")}
        </div>
    );
}
 
export default MainBody;