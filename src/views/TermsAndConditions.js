import React, { lazy } from 'react'
import { CssBaseline, Box, Container, Toolbar, Typography, List, ListItem } from '@mui/material'
import { Helmet } from 'react-helmet'

const ResponsiveDrawer = lazy(() => import('../components/ResponsiveDrawer'))
const Footer = lazy(() => import('../components/Footer'))
const drawerWidth = 260

const TermsAndConditions = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fastwin - Terms and Conditions</title>
                <link rel="canonical" href="https://www.fastwin.ph/terms-and-conditions" />
                <meta name="description" content="As one of the first and most trusted online casino sites in the Philippines and a PAGCOR online casino" />
                <meta property="og:title" content="Fastwin - Terms and Conditions" />
                <meta property="og:url" content="https://www.fastwin.ph/terms-and-conditions" />
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
                        <Typography variant='h1' sx={{ color: '#f9f9f9', fontSize: 20 }}>Terms and Conditions</Typography>
                        <Box sx={{ my: 3 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                AGREEMENT TO TERMS
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                            These Terms and Conditions constitute a legally binding agreement made between you and Kirschner Games International, Inc. (KGI), concerning your access to and use of Fastwin Games. You agree that by accessing and using the Fastwin Games, you have read, understood, and agree to be bound by all these terms and conditions.
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                USER REPRESENTATIONS
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                By accessing and using the Fastwin Games, you represent and warrant that: 
                            </Typography>
                            <List 
                                sx = {{
                                    listStyleType: 'decimal',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'rgb(209 213 219)'
                                }}
                            >
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    All registration information you submit is true, accurate, current and complete;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    You will maintain the accuracy of such information and promptly update such registration information as necessary;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    You will not use Fastwin Games for any illegal or unauthorized purpose; and
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    You will not use this Web site for any purpose that is unlawful or prohibited by these terms, conditions, and notices.
                                </ListItem>
                            </List>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                It is your exclusive responsibility to ensure the due compliance of the above‐mentioned rules, before registering with Fastwin.
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2 }}>
                                USER REGISTRATION
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                KGI will "NOT" allow registration from the following:
                            </Typography>
                            <List 
                                sx = {{
                                    listStyleType: 'decimal',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'rgb(209 213 219)'
                                }}
                            >
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Government officials or employees connected directly with the operation of the Government or any of its agencies;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Members of the Armed Forces of the Philippines, including the Army, Navy, Air Force or Philippine National Police;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Persons under 21 years of age or students of any school, college or university in the Philippines;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Philippine Amusement and Gaming Corporation (PAGCOR) officials and employees;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    KGI employees;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Gaming Site Operators and employees;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Unregistered players; and
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Banned individuals.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Gaming Employees License (GEL) holder.
                                </ListItem>
                            </List>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2 }}>
                                ACCOUNT CREATION
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                To access Fastwin Games, all players may register either personally at any authorized Fastwin gaming outlet or through the Fastwin website which shall be completed after verification by the Fastwin outlet.
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                For registration, please submit the following:
                            </Typography>
                            <List 
                                sx = {{
                                    listStyleType: 'decimal',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'rgb(209 213 219)'
                                }}
                            >
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>Complete name;</ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>Place of residence;</ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>Valid e‐mail address; and</ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>Residential landline/mobile phone number.</ListItem>
                            </List>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                You are responsible for the secrecy of your own account number and password. If you suspect that your personal information is stolen, please inform us immediately to change the information.
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                You are allowed to open one (1) account per Fastwin Outlet. Opening of multiple accounts is prohibited. Should we have reasonable suspicions that you have opened multiple accounts with us, we reserve the right in our absolute discretion to freeze your account or to close your account immediately. In this event, all your winnings will be forfeited and you will be liable for damages and costs incurred by Fastwin as a result of this fraud.
                            </Typography>

                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2 }}>
                                ACCOUNT TERMINATION
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                We reserve the right to immediately close any account if it was found that the information provided is inaccurate and/or insufficient.
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                Further, we reserve the right to close your account at any time, without stating the reason. In any case, the balance left on your account will be returned to you.
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                The terminated player’s account balance shall be contributed to the government.
                            </Typography>
                            {/* <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                Further, we reserve the right to close your account at any time, without stating the reason. In any case, the balance left on your account will be returned to you.
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                You may cash out from your account at any time provided that payments have been confirmed through the cashier of the authorized Fastwin outlet. If the amount exceeds PHP 10,000, KGI will arrange for the immediate transfer of the amount withdrawn through its Satellite Office or through its Agent.
                            </Typography> */}

                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2 }}>
                                BETS
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, my: 1 }}>
                                All bets accepted by Fastwin Games are subjected to the following terms & conditions:
                            </Typography>
                            <List 
                                sx = {{
                                    listStyleType: 'decimal',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'rgb(209 213 219)'
                                }}
                            >
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    You must ensure that you understand the terms of the registration of the bet request before you confirm the placing of the bet.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Fastwin Games accepts bets within the territory of the Philippines ONLY. 
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Students, employees of KGI, PAGCOR, and any of its associated companies, Philippine government officials, members of the Philippine military and law enforcement agencies, are not allowed to place bets with Fastwin.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    You may place bets up to the game’s bet limit. KGI reserves the right in its sole discretion to amend both cash‐in, cash‐out and betting limits and to accept or reject all or part of the bets.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    It is your responsibility to ensure the bet details are correct. We do not assume liability for correctness, completeness or up‐to‐datedness of the information services provided.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    You are solely responsible for your own account transactions. Please be sure to review bets before sending them in. 
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    The necessary funds must be deposited into your betting account before the bet can be accepted by Fastwin. Once bets have been placed and acceptance has been confirmed, you can no longer cancel or change it.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Funds deposited into your account do not earn any interest.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    It is your responsibility to notify our support services immediately should funds be credited erroneously to your Fastwin account. Should this occur, these funds are not available for use and we reserve the right to withdraw these funds and to void any transactions placed using them.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    All winnings will be credited to your account. Winnings credited to an account in error are not available for use and we reserve the right to void any transaction involving such funds.
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    Fastwin will not take responsibility for missing or duplicate wagers made, and will not entertain discrepancy requests because a play is missing or duplicated.
                                </ListItem>
                            </List>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2 }}>
                                PROHIBITED ACTIVITIES
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, my: 1 }}>
                                The prohibited activities are the following:
                            </Typography>
                            <List 
                                sx = {{
                                    listStyleType: 'decimal',
                                    pl: 2,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                    color: 'rgb(209 213 219)'
                                }}
                            >
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    To act on behalf of another person or third party;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    To deposit money originating from criminal activity;
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    To use in any manner whatsoever your account or that of third party’s for money laundering or any other illegal purpose; and
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    To allow any third party using your login details. You accept full responsibility for the consequences of allowing such activity and, without derogating from the generality of any other indemnity contained herein, indemnifies and holds Fastwin harmless in respect of any damages arising from the same.
                                </ListItem>
                            </List>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2, mb: 1 }}>
                                DISCLAIMER OF WARRRANTIES
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                KGI does not accept any responsibility for failure in any equipment or telecommunication that prevents the placing of correct bets. Any rights not expressly granted herein are reserved.
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2, mb: 1 }}>
                                LIMITATION OF LIABILITY AND INDEMNIFICATION
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                KGI will not be liable to you for any indirect, incidental, consequential, special, punitive or other similar damages, including but not limited to loss of revenues, lost profits, lost data or other intangible losses (however such losses are qualified) arising out of or relating in any way to these Terms and Conditions. 
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2, mb: 1 }}>
                                AMENDMENTS TO THIS TERMS AND CONDITIONS
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                KGI reserves the right to amend these Terms and Conditions and any of the rules at any time without prior notification. All editions will show version number and validity start date.
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2, mb: 1 }}>
                                SEVERABILITY
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mt: 1 }}>
                                A player’s violation of any provisions of the Terms of Use shall be ground for the cancellation or suspension of his/her remote gaming platform account, and/or the forfeiture of funds thereof, as the case may be. *Forfeited funds shall be part of the GGR.
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2, mb: 1 }}>
                                PREVAILING LANGUAGE
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                In the event of there being a discrepancy between the English language version of these terms and conditions and any other language version, the English language version will prevail. 
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2, mb: 1 }}>
                                DISPUTES AND APPLICABLE LAW
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                KGI shall treat any breach of these Terms and Conditions as a serious matter and we may take any steps at law, which we deem fit and proper to protect our interests.
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                This Terms and Conditions shall be governed by and construed according to the laws of the Republic of the Philippines.
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mt: 2, mb: 1 }}>
                                CONTACT INFORMATION
                            </Typography>
                            <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                If you have any questions about this Agreement, please contact us.
                            </Typography>
                        </Box>
                    </Container>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default TermsAndConditions