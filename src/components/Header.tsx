import * as React from 'react';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Link } from 'wouter';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About Me', link: '/about' },
    { title: 'Experience', link: '/experience' },
    { title: 'Projects', link: '/projects' }];

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Portfolio
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton component="a" href={item.link} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: '#0E0D1C' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SentimentSatisfiedAltIcon fontSize="large" />
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Link key={item.title} href={item.link}>
                                <Button sx={{ color: '#fff', fontWeight: 'bold', fontSize: '20px', mr: '20px' }}>
                                    {item.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>

            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}