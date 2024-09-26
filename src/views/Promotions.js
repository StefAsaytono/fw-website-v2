import React, { lazy } from 'react'
import { Box, Container, CssBaseline, Toolbar, Typography, Grid } from '@mui/material'
import { Helmet } from 'react-helmet'

const ResponsiveDrawer = lazy(() => import('../components/ResponsiveDrawer'))
const Footer = lazy(() => import('../components/Footer'))
const drawerWidth = 260

const Promotions = () => {

    const promotions = [
        { images: 'thumbnail-bet&win.png', promoName: 'Bet & Win', provider: 'Evolution', link: '/betandwin'}
        // { images: 'promo-coming-soon.png', promoName: 'Coming Soon', provider: ''}
    ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fastwin - Promotions</title>
                <link rel="canonical" href="https://www.fastwin.ph/promotions" />
                <meta name="description" content="More promotions available soon!" />
                <meta property="og:title" content="Fastwin - Promotions" />
                <meta property="og:url" content="https://www.fastwin.ph/promotions" />
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
                    <Container maxWidth='xl' sx={{ height: '100%' }}>
                        <Typography variant='h1' sx={{ color: '#f9f9f9', fontSize: 20, mb: 2}}>Promotions</Typography>
                        
                        {promotions.map((promo, index) => (
                            <Grid container item xs={4} lg={2} md={3} sm={3} key={index} sx={{ mb: 3 }}>
                                <Grid 
                                    container direction='row' 
                                    justifyContent='center' 
                                    alignItems='center' 
                                    key={index} 
                                    className="hovers"
                                >
                                    <img src={require(`../assets/promotions/${promo.images}`)} className="image cursor"/>
                                    <div className="middle">
                                        <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={()=> window.location.href = `${promo.link}`} />
                                        <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>
                                            {/* Read More */}
                                        </Typography>
                                    </div>
                                    <div className="game-n">{promo.promoName}</div>
                                    <div className="game-p">{promo.provider}</div>
                                </Grid>
                            </Grid>
                        ))}
                            
                    </Container>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default Promotions