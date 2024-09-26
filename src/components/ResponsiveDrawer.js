import React, { useEffect, useState } from 'react'
import { AppBar, Box, Button, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Modal, Dialog,DialogTitle , DialogContent , DialogActions, Hidden  } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { BsFillHousesFill, BsFillGiftFill, BsPersonVideo, BsNewspaper, BsPatchQuestionFill, BsFillGrid3X2GapFill, Bs8CircleFill, BsEye, BsEyeSlash  } from 'react-icons/bs'
import Iframe from 'react-iframe'
import { styled } from '@mui/material/styles';

const styleReg = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '63%',
    boxShadow: 24,
    borderRadius: '10px', 
    height: '77%', 
    border: 'none', 
}

const drawerWidth = 260

// const StyledDialogContent = styled(DialogContent)({
//     overflowY: 'auto', // Vertical scrolling
//     maxHeight: '300px', // Adjust as needed
//   })

const ResponsiveDrawer = (props) => {
    
    // - - - - - - - - - - MODAL - - - - - - - - - -
    const [openReg, setOpenReg] = useState(false)
    const handleOpenReg = () => setOpenReg(true)
    const handleCloseReg = () => {
        setOpenReg(false)
    }

    // - - - - - - - - - - NAV BAR - - - - - - - - - -
    const { windows } = props
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    const queryString = window.location.href;
    const urlLink = queryString.substring(queryString.lastIndexOf('/') + 1)

    if(sessionStorage.getItem('active') === null) {
        sessionStorage.setItem('active', 'home')
    }
    else {
        if(urlLink) {
            sessionStorage.setItem('active', urlLink)
        }
        else {
            sessionStorage.setItem('active', 'home')
        }
    }

    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('md');
    const [iframeSrc, setIframeSrc] = useState('');

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked)
  }

  useEffect(() => {
    // const randomQueryString = '?nocache=' + new Date().getTime();
    // setIframeSrc('https://fastwin.ph:8081' + randomQueryString);
    const url = 'https://fastwin.ph:8081/';
    const cacheBust = new Date().getTime();
    setIframeSrc(`${url}?t=${cacheBust}`);
  }, []);

    // - - - - - - - - - - - - - - - - - - - - ARRAY - - - - - - - - - - - - - - - - - - - -
    const arrNavList = [
        { title: 'Home', icon: <BsFillHousesFill size={20} color='rgb(209 213 219)' />, link: '/', css: 'home' },
        { title: 'Promotions', icon: <BsFillGiftFill size={20} color='rgb(209 213 219)' />, link: '/promotions', css: 'promotions' }
    ]
    const arrNavList2 = [
        { title: 'Table Games', icon: <BsFillGrid3X2GapFill size={20} color='rgb(209 213 219)' />, link: '/table', css: 'table' },
        { title: 'IBingo Games', icon: <Bs8CircleFill size={20} color='rgb(209 213 219)' />, link: '/ibingo', css: 'ibingo' },
        { title: 'Slot Games', icon: <BsNewspaper size={20} color='rgb(209 213 219)' />, link: '/slot', css: 'slot' },
        { title: 'Live Games', icon: <BsPersonVideo size={20} color='rgb(209 213 219)' />, link: '/live', css: 'live' },
        // { title: 'Virtual Games', icon: <BsBoxFill size={20} color='rgb(209 213 219)' />, link: '/virtual', css: 'virtual' }
    ]
    const arrNavList3 = [
        { title: 'FAQs', icon: <BsPatchQuestionFill size={20} color='rgb(209 213 219)' />, link: '/faq', css: 'faq' }
    ]

    const drawer = (
        <>
            <Toolbar>
                <Grid
                    container
                    direction={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{ my: 2 }}
                >
                    <img src={require('../assets/img/logo.png')} width={100} alt="Logo" />
                    <Typography 
                        variant='caption' 
                        display={'block'} 
                        gutterBottom 
                        sx={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'semibold' }}
                        color={'rgb(209 213 219)'}
                    >
                        Play safe and secure anywhere, anytime
                    </Typography>
                </Grid>
            </Toolbar>
            <Divider sx={{ background: 'rgb(209 213 219)', mx: 1, mb: 1}} />
            <List>
                {arrNavList.map((menu, index) => (
                    <ListItem key={index} disablePadding className={`menu-button ${sessionStorage.getItem('active') === menu.css ? 'is-active' : '' }`}>
                        <ListItemButton href={menu.link}>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText primary={menu.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Typography variant='body2' color={'rgb(209 213 219)'} sx={{ mx: 2, textTransform: 'uppercase' }}>Games</Typography>
            <List>
                {arrNavList2.map((menu, index) => (
                    <ListItem key={index} disablePadding className={`menu-button ${sessionStorage.getItem('active') === menu.css ? 'is-active' : '' }`}>
                        <ListItemButton href={menu.link}>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText primary={menu.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Typography variant='body2' color={'rgb(209 213 219)'} sx={{ mx: 2, textTransform: 'uppercase' }}>Need Help ?</Typography>
            <List>
                {arrNavList3.map((menu, index) => (
                    <ListItem key={index} disablePadding className={`menu-button ${sessionStorage.getItem('active') === menu.css ? 'is-active' : '' }`}>
                        <ListItemButton href={menu.link}>
                            <ListItemIcon>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText primary={menu.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
    const container = windows !== undefined ? () => windows().document.body : undefined;
    
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 0) {
            let background = document.getElementById("app-bar")
            background.style.background = 'rgba(255, 255, 255, 0.06)'
            background.style.behavior = "smooth"
        }
        else {
            let background = document.getElementById("app-bar")
            background.style.background = "transparent"
        }
    })

    const login = () => {
        window.open('https://go.fastwin.com.ph', '_blank')
    }
    // const register = () => {
    //     window.open('https://go.fastwin.com.ph/s/', '_blank')
    // }
    // const [open, setOpen] = React.useState(false);
    // const handleClickOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{ width: { md: `calc(100% - ${drawerWidth}px)` }, ml: { md: `${drawerWidth}px` } }}
                id='app-bar'
            >
                <Container maxWidth='xl'>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}></Typography>
                        <Button variant='contained' color='slate' sx={{ mx: 1 }} onClick={login}>
                            Login
                        </Button>
                        {/* <Button variant='contained' color='indigo' onClick={register}>
                            Register
                        </Button> */}

                        {/* - - - - - - - - - - REGISTER - - - - - - - - - - */}
                        <Button variant="contained" color='indigo' onClick={handleOpenReg}>
                            SIGN UP
                        </Button>
                        <Modal
                            fullWidth={fullWidth}
                            maxWidth={maxWidth}
                            open={openReg}
                            onClose={handleCloseReg} 
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            // style={{ display: "flex", justifyContent: "center", alignItems: "center"}}
                        >
                           <Box sx={styleReg} className='autoResize'>
                               {/* <Iframe
                                    title='Registration'
                                    styles={{ border: 'none', borderRadius: '5px' }}
                                    url="https://fastwin.ph:8081"
                                    // url='http://localhost:5500/'
                                    className="modal-position"
                                    display="block"
                                    // allowFullScreen
                                    width='100%'
                                    height='100%'
                                    // position="absolute"
                                /> */}
                                {
                                    iframeSrc && 
                                    <Iframe 
                                        id='myIframe' 
                                        className='modal-position' 
                                        width='100%' 
                                        height='100%' 
                                        src={iframeSrc}
                                        display='block'
                                        styles={{ border: 'none', borderRadius: '5px' }}
                                    />
                                }
                           </Box>
                        </Modal>

                        {/* <Dialog
                            fullWidth={fullWidth}
                            maxWidth={maxWidth}
                            open={openReg}
                            onClose={handleCloseReg}
                        >
                            <DialogContent className='regdialog' sx={{ height: "80vh", width: 'auto'}}>
                                <Iframe 
                                    url="https://fastwin.ph:8081"
                                    // url='http://localhost:5500/'
                                    className="modal-position"
                                    display="block"
                                    allowFullScreen
                                    width='100%'
                                    height='100%'
                                    position="absolute"
                                />
                            </DialogContent>
                        </Dialog>  */}
                        
                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
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

export default ResponsiveDrawer