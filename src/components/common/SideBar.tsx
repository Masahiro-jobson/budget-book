import HouseIcon from '@mui/icons-material/House';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from 'react-router-dom';

// Interface is for defining class and object types
interface SidebarProps {
  drawerWidth: number,
  mobileOpen: boolean,
  handleDrawerToggle: () => void,
}

interface menuItem {
  text: string,
  path: string,
  icon: React.ComponentType,
}

// Type is has a variety of uses, such as defining variables, function parameters, and return types.
// type  SidebarProps = {
//   drawerWidth: number,
//   mobileOpen: boolean,
//   handleDrawerToggle: () => void,
// }

// void means they don't have return value
const SideBar = ({drawerWidth, mobileOpen, handleDrawerToggle}:SidebarProps) => {
    
    const MenuItems: menuItem[] = [
        { text: 'Home', path: '/', icon: HouseIcon},
        { text: 'Report', path: '/report', icon: LeaderboardIcon },
    ];

    const baseLinkStyle : React.CSSProperties = {
        textDecoration: 'none',
        // inherit means it will take parent color (here black)
        color: 'inherit',
        display: 'block',
    }

    const activeLinkStyle : React.CSSProperties = {
        backgroundColor: '#e0e0e0',
    }

    const drawer = (
        <div>
        <Toolbar />
        {/* Devider is line */}
        <Divider />
        <List>
            {MenuItems.map((item, index) => (
                <NavLink key={item.text} to={item.path} style={({isActive})=> {
                    console.log("Chosen menu is", item.text, isActive)
                    return {
                    // ... to spread the baseLinkStyle object
                    ...baseLinkStyle,
                    ...(isActive ? activeLinkStyle : {})
                    }
                }}>
            <ListItem key={index} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {/* in Mui icon we need to display icon as component style */}
                    <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
            </NavLink>
            ))}
        </List>
        <Divider />
        
        </div>
    );



  return (
    <div>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* For mobile */}
        <Drawer
        //   variant temproary is for changeable drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop */}
        <Drawer
        //   variant permanant is for fixed drawer
          variant="permanent"
        //   apply CSS in line with sx prop
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}

export default SideBar
