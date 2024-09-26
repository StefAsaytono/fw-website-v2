import React, { lazy, useEffect } from 'react'
import { Box, Container, CssBaseline, Toolbar, Typography, Grid } from '@mui/material'
import { Helmet } from "react-helmet"

const AgeVerification = lazy(() => import('../components/AgeVerification'))
const ResponsiveDrawer = lazy(() => import('../components/ResponsiveDrawer'))
const Banners = lazy(() => import('../components/Banners'))
const Ibingo = lazy(() => import('../components/Ibingo'))
const Slot = lazy(() => import('../components/Slot'))
const LiveGames = lazy(() => import('../components/LiveGames'))
const TableGames = lazy(() => import('../components/TableGames'))
const GamePartners = lazy(() => import('../components/GamePartners'))
const Footer = lazy(() => import('../components/Footer'))
const Payment = lazy(() => import('../components/Payment'))
const VirtualGames = lazy(() => import('../components/VirtualGames'))
const drawerWidth = 260

const Home = () => {
    const displayText = [
        {title: 'Register', content: 'Creating an account is as easy as 1-2-3!', number: 1},
        {title: 'Deposit', content: 'We accept online payments and transfers. Hassle free!', number: 2},
        {title: 'Play!', content: 'What are you waiting for? BIG CASH PRIZES AWAIT!', number: 3},
    ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fastwin - PAGCOR Licensed</title>
                <link rel="canonical" href="https://www.fastwin.ph" />
                <meta name="description" content="Best in online gaming entertainment from bingo games, live dealer, casino and slot games, lottery, and sports betting - PAGCOR Licensed" />
                <meta property="og:title" content="Fastwin in the remote gaming platform developed and designed for electronic gaming outlets and its avid patrons." />
                <meta property="og:url" content="https://www.fastwin.ph" />
                <meta property="og:type" content="website" />
                <meta name="keywords" content="fastwin, Fastwin, Fastwin Ph, Online Gaming, Casino Online Gaming, Online Gaming Entertainment, Table Games, IBingo Games, Multiplay Live Games, Virtual Games, Slot Games, Remote Gaming Platform, Legit Online Remote Gaming Platform, Fastwin Gaming Lobby, Most Trusted Philippine Online Casinos, legal Philippines gambling sites, Philippine live-dealer casino, Philippine online slots, online blackjack games, online roulette wheels, online video poker, keno, craps, baccarat, bingo, real money win, big jackpot, bingo win, regulated bingo, legal casino, casino philippines, online bingo philippines, bingo win, fastwin casino, online casino, online casino real money, no deposit bonus casino, Gcash, PayMaya, Maya, GrabPay, Shopee, PayPal, FortunePay, Online slots, Blackjack strategies, Roulette tips, Poker tournaments, Casino bonuses, Live dealer games, Progressive jackpots, Baccarat rules, Craps strategy, Mobile casino games, Best casino apps, High roller casinos, High roller casino,  Free spins, Casino promotions, Winning at slots, Casino loyalty programs, Card counting, No deposit bonuses, Virtual poker rooms, Responsible gambling advice, Poker hands, Mobile gambling, Winning strategies, Slot tournaments, Card counting techniques, Online gambling legality, Best odds games, Casino reviews, VIP loyalty programs, Responsible gambling tips" />
            </Helmet>
            
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <ResponsiveDrawer />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, width: { xs: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Container maxWidth='xl'>
                        <Banners />
                        <Typography variant="h1" className='join-today' sx={{ textAlign: 'center', color: '#f9f9f9', textTransform: 'uppercase', mt: 3  }}>
                            Don't miss out, join today!
                        </Typography>
                        <Typography className='having-fun' sx={{ textAlign: 'center', color: '#f9f9f9', textTransform: 'uppercase' }}>
                            Start having fun with us
                        </Typography>
                        <Grid sx={{ flexGrow: 1, mt: 5 }} container>
                            <Grid container justifyContent="center" spacing={2}>
                            {displayText.map((data, key) => {
                                return(
                                    <>
                                        <Grid item key={key} xs>
                                            <div className='circle'>
                                                {data.number}
                                            </div>
                                            <Typography variant="h6" className='title' sx={{ color: '#f9f9f9', textTransform: 'uppercase', mx: 1, alignItems: 'center' }}>
                                                {data.title}
                                            </Typography>
                                            <Typography variant="body2" className='text' sx={{ color: '#f9f9f9', mx: 1, mb: 2 }}>
                                                {data.content}
                                            </Typography>
                                        </Grid>
                                    </>
                                )
                            })}
                            </Grid>
                        </Grid>
                        
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid 
                                container
                                xs={12} md={12}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid xs={12} md={12} lg={6}
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{ my: 2 }}
                                >
                                    <img src={require('../assets/img/fastwin-tab.png')} width={'50%'} alt="FW" />
                                </Grid>
                                <Grid xs={12} md={12} lg={6}>
                                    <Typography variant='h5' sx={{ color: '#f9f9f9' }}>
                                        Who is Fastwin?
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ color: '#f9f9f9', mb: 2 }}
                                    >
                                        Fastwin provides the best online gaming pleasure, including a comprehensive range of bingo games, casino and slot machine games, lottery, and sports betting services. We are devoted to creating a safe and secure playing environment while offering you the greatest online gaming entertainment.
                                    </Typography>
                                    <Typography
                                        variant="body1" 
                                        sx={{ color: '#f9f9f9', mb: 5 }}
                                    >
                                        With the deployment of more secure membership verification, Fastwin will make sure that only players who have registered are accessing their accounts.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <TableGames isHome={true} />
                        <Ibingo isHome={true} />
                        <Slot isHome={true} />
                        <LiveGames isHome={true} />
                        {/* <VirtualGames isHome={true} /> */}
                        <GamePartners />
                        <Payment />
                    </Container>
                    <Footer />
                </Box>
                <AgeVerification />
            </Box>
        </>
    )
}

export default Home