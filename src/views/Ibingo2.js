import React, { lazy } from 'react'
import { Box, Container, CssBaseline, Toolbar } from '@mui/material'
import { Helmet } from 'react-helmet'

const ResponsiveDrawer = lazy(() => import('../components/ResponsiveDrawer'))
const Footer = lazy(() => import('../components/Footer'))
const Ibingo = lazy(() => import('../components/Ibingo'))
const GamePartners = lazy(() => import('../components/GamePartners'))
const Payment = lazy(() => import('../components/Payment'))
const drawerWidth = 260

const Ibingo2 = () => {
    return (
        <> 
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fastwin - IBingo Games</title>
                <link rel="canonical" href="https://www.fastwin.ph/ibingo" />
                <meta name="description" content="Best in online gaming entertainment from bingo games - PAGCOR Licensed" />
                <meta property="og:title" content="Fastwin - IBingo Games" />
                <meta property="og:url" content="https://www.fastwin.ph/ibingo" />
                <meta property="og:type" content="website" />
                <meta name="keywords" content="fastwin, Fastwin, Fastwin Ph, Online Gaming, Casino Online Gaming, Online Gaming Entertainment, Table Games, IBingo Games, Multiplay Live Games, Virtual Games, Slot Games, Remote Gaming Platform, Legit Online Remote Gaming Platform, Fastwin Gaming Lobby, Most Trusted Philippine Online Casinos, legal Philippines gambling sites, Philippine live-dealer casino, Philippine online slots, online blackjack games, online roulette wheels, online video poker, keno, craps, baccarat, bingo, real money win, big jackpot, bingo win, regulated bingo, legal casino, casino philippines, online bingo philippines, bingo win, fastwin casino, online casino, online casino real money, no deposit bonus casino, Gcash, PayMaya, Maya, GrabPay, Shopee, PayPal, FortunePay, Online slots, Blackjack strategies, Roulette tips, Poker tournaments, Casino bonuses, Live dealer games, Progressive jackpots, Baccarat rules, Craps strategy, Mobile casino games, Best casino apps, High roller casinos, High roller casino,  Free spins, Casino promotions, Winning at slots, Casino loyalty programs, Card counting, No deposit bonuses, Virtual poker rooms, Responsible gambling advice, Poker hands, Mobile gambling, Winning strategies, Slot tournaments, Card counting techniques, Online gambling legality, Best odds games, Casino reviews, VIP loyalty programs, Responsible gambling tips" />
            </Helmet>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <ResponsiveDrawer />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, width: { sx: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Container maxWidth='xl'>
                        <Ibingo isHome={false} />
                        <GamePartners />
                        <Payment />
                    </Container>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default Ibingo2