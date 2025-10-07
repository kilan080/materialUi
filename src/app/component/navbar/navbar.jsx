'use client';
import { AppBar as Navbar, Box, Button, Toolbar, IconButton, MenuItem } from '@mui/material';
// import SiteMark from '../SitemarkIcon/sitemarkicon';
import Image from 'next/image';
import { styled, alpha } from '@mui/material/styles';
import { Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Divider from '@mui/material/Divider';
import React from 'react';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));


export default function AppBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => {
        setOpen(newOpen);
    }
  return (
    <Navbar
        position='fixed'
        enableColorOnDark
        sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            backgroundImage: 'none',
            mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        }}
    >
        <Container>
            <StyledToolbar variant='dense' disableGutters>
                <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center', px: 0}}>
                    {/* <SiteMark /> */}
                    <Image className='pr-8' src='/topibro-logo2.png' alt='logo' width={80} height={70} style={{ objectFit: 'cover' }} />
                    <Box sx={{ display: {xs: 'none', md: 'flex'} }}>
                        <Button variant='text' color='info' size='small'>Features</Button>
                        <Button variant='text' color='info' size='small'>Testimonial</Button>
                        <Button variant='text' color='info' size='small'>Highlights</Button>
                        <Button variant='text' color='info' size='small'>Pricing</Button>
                        <Button variant='text' color='info' size='small' sx={{ minWidth: 0 }}>FAQ</Button>
                        <Button variant='text' color='info' size='small' sx={{ minWidth: 0 }}>Blogs</Button>
                    </Box>
                </Box>
                <Box sx={{ display:{xs: 'none', md: 'flex'}, gap: 1, alignItems: 'center'}}>
                    {/* <Button variant='text' color='primary' size='small'>Login</Button> */}
                    <Button variant='contained' color='primary' size='small'>Sign Up</Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none'}}}>
                    <IconButton aria-label='Menu button' onClick={() => toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor='top' open={open} onClose={() => toggleDrawer(false)} PaperProps={{ sx: { top: 'var(--template-frame-height, 0px)' } }}>
                        <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <IconButton onClick={() => toggleDrawer(false)}>
                                    <CloseRoundedIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <MenuItem sx={{ alignItems: 'center' }}>Features</MenuItem>
                        <MenuItem>Testimonials</MenuItem>
                        <MenuItem>Highlights</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Blogs</MenuItem>
                        <Divider sx={{ my: 3 }} />
                        <MenuItem>
                            <Button color='primary' variant='contained' fullWidth>
                                Sign Up
                            </Button>
                        </MenuItem>
                        {/* <MenuItem>
                            <Button color='primary' variant='outlined' fullWidth>
                                Sign In
                            </Button>
                        </MenuItem> */}
                    </Drawer>
                </Box>
            </StyledToolbar>
        </Container>
    </Navbar>
  )
}
