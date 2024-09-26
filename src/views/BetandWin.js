import React, { lazy } from 'react'
import { Box, Container, CssBaseline, Toolbar, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import { Helmet } from 'react-helmet'

const ResponsiveDrawer = lazy(() => import('../components/ResponsiveDrawer'))
const Footer = lazy(() => import('../components/Footer'))
const drawerWidth = 260

function WelcomeBonus() { 

  const rows = [
    // { weeknum: '1', date: '17-Jun 00:00 AM ~ 23-Jun 23:59 PM' }, 
    // { weeknum: '2', date: '24-Jun 00:00 AM ~ 30-Jun 23:59 PM' },
    // { weeknum:'3', date: '01-Jul 00:00 AM ~ 07-Jul 23:59 PM' },
    // { weeknum:'4', date: '08-Jul 00:00 AM ~ 14-Jul 23:59 PM' },
    // { weeknum:'5', date: '15-Jul 00:00 AM ~ 21-Jul 23:59 PM' },
    // { weeknum:'6', date: '22-Jul 00:00 AM ~ 28-Jul 23:59 PM' },
    // { weeknum:'7', date: '29-Jul 00:00 AM ~ 04-Aug 23:59 PM' },
    // { weeknum:'8', date: '05-Aug 00:00 AM ~ 11-Aug 23:59 PM' },
    { weeknum:'9', date: '12-Aug 00:00 AM ~ 18-Aug 23:59 PM' },
    { weeknum:'10', date: '19-Aug 00:00 AM ~ 25-Aug 23:59 PM' },
    { weeknum:'11', date: '26-Aug 00:00 AM ~ 01-Sep 23:59 PM' },
    { weeknum:'12', date: '02-Sep 00:00 AM ~ 08-Sep 23:59 PM' },
    { weeknum:'13', date: '09-Sep 00:00 AM ~ 15-Sep 23:59 PM' },
    { weeknum:'14', date: '16-Sep 00:00 AM ~ 22-Sep 23:59 PM' },
    { weeknum:'15', date: '23-Sep 00:00 AM ~ 29-Sep 23:59 PM' },
    { weeknum:'16', date: '30-Sep 00:00 AM ~ 06-Oct 23:59 PM' },
    { weeknum:'17', date: '07-Oct 00:00 AM ~ 13-Oct 23:59 PM' },
    { weeknum:'18', date: '14-Oct 00:00 AM ~ 20-Oct 23:59 PM' },
    { weeknum:'19', date: '21-Oct 00:00 AM ~ 27-Oct 23:59 PM' },
    { weeknum:'20', date: '28-Oct 00:00 AM ~ 03-Nov 23:59 PM' },
    { weeknum:'21', date: '04-Nov 00:00 AM ~ 10-Nov 23:59 PM' },
    { weeknum:'22', date: '11-Nov 00:00 AM ~ 17-Nov 23:59 PM' },
    { weeknum:'23', date: '18-Nov 00:00 AM ~ 24-Nov 23:59 PM' },
    { weeknum:'24', date: '25-Nov 00:00 AM ~ 01-Dec 23:59 PM' },
    { weeknum:'25', date: '02-Dec 00:00 AM ~ 08-Dec 23:59 PM' },
    { weeknum:'26', date: '09-Dec 00:00 AM ~ 15-Dec 23:59 PM' },
    { weeknum:'27', date: '16-Dec 00:00 AM ~ 22-Dec 23:59 PM' },
    { weeknum:'28', date: '23-Dec 00:00 AM ~ 29-Dec 23:59 PM' },
  ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fastwin - Welcome Bonus</title>
                <link rel="canonical" href="https://www.fastwin.ph/welcomebonus" />
                <meta name="description" content="Welcome Bonus" />
                <meta property="og:title" content="Fastwin - Welcome Bonus" />
                <meta property="og:url" content="https://www.fastwin.ph/welcomebonus" />
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
                      <Box sx={{width: '100%', overflow: 'hidden'}} className='cursor'>
                        <img src={require('../assets/promotions/web-bet&win.png')} width={'100%'} onClick={() => window.open('https://go.fastwin.com.ph/lobby/login.aspx', '_blank')} className='banners-i banners-web' />
                        <img src={require('../assets/promotions/tab-bet&win.png')} width={'100%'} onClick={() => window.open('https://go.fastwin.com.ph/lobby/login.aspx', '_blank')} className='banners-i banners-tablet' />
                        <img src={require('../assets/promotions/mob-bet&win.png')} width={'100%'} onClick={() => window.open('https://go.fastwin.com.ph/lobby/login.aspx', '_blank')} className='banners-i banners-mobile' />
                      </Box>

                      <Box>
                        <Typography variant='h4' className='promo-title' sx={{textAlign: 'center'}}>Bet & Win</Typography>
                        <Typography className='promo-title' sx={{textAlign: 'center'}}>June 17, 2024 - December 29, 2024</Typography>
                        <img src={require(`../assets/providers/evolution.png`)} width={'300px'} style={{ display: 'flex', margin: '0 auto', marginTop: '20px'}} />
                        <Typography className='promo-title' sx={{textAlign: 'center', marginTop: '20px'}}>Join Bet & Win now and win your HUGE prizes! </Typography>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Button variant="contained" sx={{ padding: '20px 40px 20px 40px', fontSize: '16px', margin: '20px', background: 'rgb(30, 50, 87)' }} onClick={() => window.open('https://go.fastwin.com.ph/lobby/login.aspx', '_blank')}> PLAY NOW! </Button>
                        </div>

                        <Typography variant='h6' mt={6} sx={{color: 'white', letterSpacing: 2}}>MECHANICS</Typography>
                        <Typography sx={{color: 'white'}}>
                          <ol style={{paddingLeft: '40px', listStyleType: 'decimal'}}>
                          <li>
                              Open to all registered players. Unregistered players may click the 'SIGN UP' button above. 
                            </li>
                            <li>
                              The Reward Drop winners are based on the players who wager in any Evolution & First Person Baccarat, Evolution & First Person Roulette, Crazy Time, and Funky Time during the promo reward drop periods.
                            </li>
                            <li>
                              During the promotion period, 1,000 prizes worth 6,875,000 PHP of Reward Game bet amount and a maximum payout prize of 1,375,000 PHP will be distributed to players weekly.
                            </li>
                            <li>
                              The winners should go to the "Promotion" tab in the EVO Lobby and receive the Reward Game.
                            </li>
                            <li>
                              The winner will receive 5 times the bet amount of the expected prize to play the Reward Game. 
                              <Typography my={2}>For example: A player who expects to win 550 PHP will receive a 2,750 PHP bet amount to play the Reward Game and has a chance of winning up to 550 PHP.</Typography>
                            </li>
                            <li>
                              Winners need to complete all Reward Games to receive the winning amount during the Reward Game.
                            </li>
                            <li>
                              The Qualified Members will continue to be eligible for prizes in the next period.
                            </li>
                            <li>
                              The Reward Drop will run weekly from 12-Aug,2024 00:00 AM~ 29-Dec,2024 23:59 PM(UTC+0):
                            </li>
                          </ol>
                        </Typography>
                        
                          <TableContainer component={Paper} sx={{ maxWidth: 800, background: 'rgba(237, 237, 237, 0.35)', display: 'flex', margin: '0 auto' }}>
                            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell align='center' sx={{ fontWeight: 'bold', color: 'white', letterSpacing: '2px', borderBottomColor: 'rgb(135, 135, 135)' }}>WEEK #</TableCell>
                                  <TableCell align="center" sx={{ fontWeight: 'bold', color: 'white', letterSpacing: '2px', borderBottomColor: 'rgb(135, 135, 135)' }}>DATE</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows.map((row) => (
                                  <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                    <TableCell align="center" sx={{ color: 'white', borderBottomColor: 'rgb(135, 135, 135)' }}>{row.weeknum}</TableCell>
                                    <TableCell align="center" sx={{ color: 'white', borderBottomColor: 'rgb(135, 135, 135)' }}>{row.date}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>

                        <Typography variant='h6' mt={6} sx={{color: 'white', letterSpacing: 2}}>TERMS and CONDITIONS</Typography>
                        <Typography sx={{color: 'white'}}>
                          <ol style={{paddingLeft: '40px', listStyleType: 'decimal'}}>
                          <li>
                              <strong>Deposit and Customer Eligibility:</strong> These terms and conditions apply to all new registrations and deposits made to Fastwin games, which exclusively accept registrations and deposits from domestic customers within the Philippines. Customers must be at least 21 years of age to register, deposit, and place bets with Fastwin. Fastwin reserves the right to reject transactions involving minors.
                            </li>
                            <li>
                              <strong>Restricted Individuals:</strong> Students of any school, college, or university in the Philippines, employees of Inter-active Entertainment Solutions Technologies, Inc., Philippine Amusement and Gaming and Gaming Corporation (PAGCOR), and any of its associated companies, Philippine government officials, members of the Philippine military and law enforcement agencies, are not allowed to place bets with Fastwin.
                            </li>
                            <li>
                              <strong>Compliance Responsibility:</strong> Customers are solely responsible for ensuring their compliance with the rules of the promotion before participating. Fastwin games shall have absolute discretion in accepting or rejecting all or parts of player participation in any aspect of this promotion.
                            </li>
                            <li>
                              <strong>Modification of Terms and Changes to Game Rules:</strong> Fastwin reserves the right to modify these terms and conditions and change any of the promotion rules at any time without prior notification. Customers are encouraged to review the terms and rules of the game regularly to stay informed about any updates or changes. This is subject to PAGCOR approval.
                            </li>
                          </ol>
                        </Typography>

                      </Box>
                    </Container>
                    
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default WelcomeBonus