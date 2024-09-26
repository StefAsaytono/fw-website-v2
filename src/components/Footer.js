import React from 'react'
import { Box, Grid, Typography, Container, Divider } from '@mui/material'
import { BsGeoAltFill, BsPhoneVibrateFill, BsSendFill, BsTelephoneFill, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }} className='footer-background'>
            <Container>
                <Grid container direction='row'>
                    <Grid item xs={12} md={12} lg={3} sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: 18, mb: 2 }} className='cursor'>Quick Links</Typography>
                        <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={() => window.open('https://go.fastwin.com.ph/register/privacy.aspx', '_blank')}>Privacy Policy</Typography>
                        <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={() => window.open('/responsible-gaming', '_self')}>Responsible Gaming</Typography>
                        <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={() => window.open('/terms-and-conditions', '_self')}>Terms and Conditions</Typography>
                        <Typography sx={{ fontSize: 14, mb: 1 }} className='cursor' onClick={() => window.open('https://go.fastwin.com.ph/register/SelfService.aspx', '_blank')}>Self Service</Typography>
                    </Grid>

                    <Grid item xs={12} md={12} lg={6} sx={{ mb: 2 }}>
                        <Typography sx={{ mb: 2, fontSize: 18 }}>Contact Us</Typography>
                        <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
                            <BsGeoAltFill color='#0E1B51' size={20} />
                            <Typography sx={{ fontSize: 14, mx: 2 }}>5F PDCP Bank Center Herrera St. Salcedo Village, Makati City, Philippines, 1227</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
                            <BsTelephoneFill color='#0E1B51' size={17} />
                            <Typography sx={{ fontSize: 14, mx: 2 }}>(02) 8-2451-213</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
                            <BsPhoneVibrateFill color='#0E1B51' size={25} />
                            <Typography sx={{ fontSize: 14, mx: 2 }}>+63 960 926 2544 / +63 947 405 7544</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 2, mr: 2 }}>
                            <BsSendFill color='#0E1B51' size={20} />
                            <Typography sx={{ fontSize: 14, mx: 2 }}>support@fastwin.ph</Typography>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={12} lg={3} sx={{ mb: 2 }}>
                        <Typography sx={{ mb: 2, fontSize: 18 }}>Licensed by PAGCOR</Typography>
                        <Box sx={{ display: 'flex', mb: 4, mr: 3 }}>
                            <img src={require('../assets/img/pagcor-logo.png')} alt='PAGCOR Logo' width={100} />
                            <img src={require('../assets/img/21+.png')} alt='Game Responsibly Logo' width={200} height={40} />
                        </Box>
                        <Typography sx={{ mb: 2, fontSize: 18 }}>Follow Us</Typography>
                        <Box sx={{ display: 'flex', mb: 2, mr: 3 }}>
                            <Box sx={{ mr: 3 }}>
                                <BsFacebook color='#4267B2' size={25} sx={{ px: 1 }} className='cursor' onClick={() => window.open('https://www.facebook.com/fastwinphofficial', '_blank')}/>
                            </Box>
                            <Box sx={{ mr: 3 }}>
                                <BsTwitter color='#00ACEE' size={25} className='cursor' onClick={() => window.open('https://twitter.com/fastwinph', '_blank')}/>
                            </Box>
                            <Box sx={{ mr: 3 }}>
                                <BsInstagram color='#d62976' size={25} className='cursor' onClick={() => window.open('https://www.instagram.com/fastwinph', '_blank')}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 3 }}/>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography>Copyright &copy; {new Date().toISOString().split('-')[0]}</Typography>
                    <Typography>All Rights Reserved</Typography>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer