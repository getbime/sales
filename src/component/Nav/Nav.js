import Label from '../Label/Label';
import './Nav.css'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const Nav = () => {
    return (
        <div className="nav">
            <Label />
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ 
                    height: 240, 
                    flexGrow: 1, 
                    maxWidth: 500, 
                    overflowY: 'auto', 
                    display: "flex", 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    
                 }}
                >
                <TreeItem nodeId="1" label="Applications" sx={{
                    width: '10rem', 
                    padding: '1rem',
                    disabledItemsFocusable: 'true',
                    '&:hover': {
                        backgroundColor: 'white',
                      },
                    }}>
                    <TreeItem nodeId="2" label="Calendar" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents" sx={{
                    padding: '1rem',
                    width: '10rem',
                    '&:hover': {
                        backgroundColor: 'white',

                      },}}>
                    <TreeItem nodeId="10" label="OSS" />
                    <TreeItem nodeId="6" label="MUI">
                    <TreeItem nodeId="8" label="index.js" />
                    </TreeItem>
                </TreeItem>
                <TreeItem nodeId="1" label="Applications"sx={{
                    width: '10rem',
                    padding: '1rem',
                    '&:hover': {
                        backgroundColor: 'white',

                      },}}>
                    <TreeItem nodeId="2" label="Calendar" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents"sx={{width: '10rem',
                    padding: '1rem',
                    '&:hover': {
                        backgroundColor: 'white',

                      },}}>
                    <TreeItem nodeId="10" label="OSS" />
                    <TreeItem nodeId="6" label="MUI">
                    <TreeItem nodeId="8" label="index.js" />
                    </TreeItem>
                </TreeItem>
            </TreeView>
        </div>
    );
}
 
export default Nav;