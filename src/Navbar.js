import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import logo from './logo.svg';
import "./App.css";

const drawerWidth = 240;
const navItems = ['Product', 'Feature', 'Prizing','Resources','Sign In'];


export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleOnClick = () =>{
        navigate('./signin');
    };
    const handleSupport = () =>{
        navigate('/support');
    }
    const handleFeatures = () =>{
        navigate('/features');
    }
    const handleResource = () =>{
        navigate('/resources');
    }
    const handleClick = () =>{
        navigate('/');
    }


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Funny-Memes
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText secondary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <AppBar sx={{ bgcolor: "white"}} >
                <Toolbar sx={{justifyContent:"center"}}>
                    <Toolbar  >
                        <Button key="Funny-Memes" sx={{ color: 'black'}}
                                onClick={handleClick}
                        >
                            <img src={logo} alt="meme" />
                        </Button>
                    </Toolbar>

                    <Box sx={{ display: "flex", flexDirection:"row", gap:"15px" }}>

                        <Button key="The Team" sx={{color:"black", textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                                onClick={handleSupport}
                        >
                            <strong>Product</strong>
                        </Button>
                        <Button key="latest" sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                                onClick={handleFeatures}
                        >
                            <strong>Features</strong>
                        </Button>
                        <Button key="Quotes" sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                        >
                            <strong>Prizing</strong>
                        </Button>
                        <Button key="social" sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                                onClick={handleResource}
                        >
                            <strong>Resources</strong>
                        </Button>
                        <Button key="contact" sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}}
                                onClick={handleClick}
                        >
                            <strong>Contact Us</strong>
                        </Button>

                        <Divider sx={{borderLeft: "1px solid black", margin:'5px'}}/>
                        <Button sx={{ color: 'black', textTransform: 'none', display: { xs: 'none', sm: 'block' }}} onClick={handleOnClick}><strong>Sign In</strong></Button>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 0 }}>
                <Toolbar />

            </Box>
        </Box>
    );
}
