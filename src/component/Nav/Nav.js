import Label from '../Label/Label';
import './Nav.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DetailsIcon from '@mui/icons-material/Details';
import InventoryIcon from '@mui/icons-material/Inventory';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import BimeNavLogo from '../shared/BimeNavLogo';

const Nav = ({loggedUser,isLoading,userType}) => {
    const style = {textDecoration: 'none', color: 'black'}
    const styleActive = {textDecoration: 'none', color: 'black', fontWeight: 'bold', background: 'red',boxShadow:'1px 2px 5px #dfdbdb' }
    
    const navLinkStyles = ({isActive}) => {
        console.log(isActive)
        if (isActive) return {...styleActive}
        else  return {...style}
    }
    return (
        <div className="nav">
            <Label loggedUser={loggedUser} isLoading={isLoading}/>
            <Box >
            <nav aria-label="main mailbox folders">
                    <List>
                        {userType === 'company' && <NavLink to='/dashboard/' style={navLinkStyles}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon   >
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink> }

                        {userType === 'staff'? <NavLink to='/dashboard' style={navLinkStyles}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InventoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="New Record" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink> 
                        : <NavLink to='/dashboard/sales-record' style={navLinkStyles}>
                        <ListItem disablePadding >
                            <ListItemButton>
                                <ListItemIcon>
                                    <InventoryIcon />
                                </ListItemIcon>
                                <ListItemText primary="New Record" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                         }
                        <NavLink to='/dashboard/view-data' style={navLinkStyles}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DetailsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Records" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>

                        <NavLink to='/dashboard/profile' style={navLinkStyles}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ManageAccountsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Profile" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>

                        {userType === "staff" && <NavLink to='/dashboard/summary' style={navLinkStyles}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LeaderboardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Summary" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink> }


                    </List>
                   
            </nav>
            </Box>
            <BimeNavLogo />
            
        </div>
    );
}
 
export default Nav;