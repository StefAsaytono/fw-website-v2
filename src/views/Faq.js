import React, { useState, lazy } from 'react'
import { Box, Container, CssBaseline, Toolbar, Typography, Accordion, AccordionSummary, AccordionDetails, ListItem, List, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Helmet } from 'react-helmet'

const ResponsiveDrawer = lazy(() => import('../components/ResponsiveDrawer'))
const Footer = lazy(() => import('../components/Footer'))
const drawerWidth = 260

const Faq = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fastwin - FAQ</title>
                <link rel="canonical" href="https://www.fastwin.ph/faq" />
                <meta name="description" content="Frequently Asked Questions to help you navigate online casino games properly! Having more questions?" />
                <meta property="og:title" content="Fastwin - FAQ" />
                <meta property="og:url" content="https://www.fastwin.ph/faq" />
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
                        <Typography variant='h1' sx={{ color: '#f9f9f9', fontSize: 20 }}>Frequent Ask Questions</Typography>
                        <Box sx={{ my: 5 }}>
                            <Accordion 
                                expanded={expanded === 'panel1'} 
                                onChange={handleChange('panel1')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel1' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How to register ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af' }}>
                                        {/* <Typography sx={{ fontSize: 14, textTransform: 'uppercase', color: '#9ca3af' }}>
                                            There are two (2) ways to create an account in Fastwin Platform. 
                                        </Typography>
                                        <List 
                                            sx = {{
                                                listStyleType: 'decimal',
                                                pl: 2,
                                                '& .MuiListItem-root': {
                                                    display: 'list-item',
                                                },
                                                color: '#9ca3af',
                                                fontSize: 14
                                            }}
                                        >
                                            <ListItem>
                                                Player enters their basic information, present 2 valid IDs, take a selfie with their valid ID for verification. 
                                            </ListItem>
                                        </List> */}
                                        <ListItem> - Go to the Fastwin Website: https://fastwin.ph</ListItem>
                                        <ListItem> - Click the 'Sign Up' button on the top right corner of the Navigation Bar. </ListItem>
                                        <ListItem> - Fill in the required inputs: </ListItem>
                                        <List
                                            sx = {{
                                                listStyleType: 'decimal',
                                                pl: 2,
                                                '& .MuiListItem-root': {
                                                    display: 'list-item',
                                                },
                                                color: '#9ca3af',
                                                fontSize: 14,
                                                ml: 3
                                            }}
                                        >
                                            <ListItem>Input your preferred username. (Only accepts AlphaNumeric characters.)</ListItem>
                                            <ListItem>Input Password. (Only accepts AlphaNumeric characters.)</ListItem>
                                            <ListItem>Input Contact Number. </ListItem>
                                            <ListItem>Input your Birthday. </ListItem>
                                            <ListItem>Choose your outlet or input your affiliate code (Optional). </ListItem>
                                            <ListItem>Check the checkbox if you accept the Terms and Conditions and Privacy Policy.</ListItem>
                                            <ListItem>Click 'Get OTP'.</ListItem>
                                            <ListItem>Wait for your OTP, it will be sent through SMS.</ListItem>
                                            <ListItem>Click Register.</ListItem>
                                        </List>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            {/* <Accordion 
                                expanded={expanded === 'panel2'} 
                                onChange={handleChange('panel2')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel2' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af', }}>
                                        How to register manually ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem' }}>
                                        <Box sx={{ color: '#9ca3af', fontSize: 14 }}>
                                            <ListItem>
                                                - Go to Fastwin website <Button sx={{ textTransform: 'lowercase' }} href='https://go.fastwin.com.ph/s/'>https://go.fastwin.com.ph/s/</Button> and click the “Sign-Up” button to create an account.
                                            </ListItem>
                                            <ListItem>
                                                - Enter First Name, Middle Name, Last Name, Birthdate.
                                            </ListItem>
                                            <ListItem>
                                                - Enter Contact Number, Email, Birth Place, Gender, Civil Status, Nationality, Address,
                                            </ListItem>
                                            <ListItem>
                                                - Primary ID Type and Number
                                            </ListItem>
                                            <ListItem>
                                                - Secondary ID number
                                            </ListItem>
                                            <ListItem>
                                                - Upload Photo of Primary ID and Seconday ID
                                            </ListItem>
                                            <ListItem>
                                                - Take a selfie while holding your Valid ID
                                            </ListItem>
                                            <ListItem>
                                                - Player set preffered username and password. 
                                            </ListItem>
                                            <ListItem>
                                                - Once completed, our customer service representative will call for the validation process.
                                            </ListItem>
                                        </Box>
                                    </Box>
                                </AccordionDetails>
                            </Accordion> */}
                            <Accordion 
                                expanded={expanded === 'panel3'} 
                                onChange={handleChange('panel3')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel3' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        Which ID's are accepted for the account verification process ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem' }}>
                                        <Typography sx={{ fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', color: '#9ca3af' }}>
                                            Any valid ID's such us:
                                        </Typography>
                                        <Box sx={{ color: '#9ca3af', fontSize: 14 }}>
                                            <ListItem>- Driver’s License</ListItem>
                                            <ListItem>- Passport</ListItem>
                                            <ListItem>- Professional Regulation Commission (PRC) ID</ListItem>
                                            <ListItem>- National Bureau of Investigation (NBI) Clearance</ListItem>
                                            <ListItem>- SSS Card (digitized)</ListItem>
                                            <ListItem>- Postal ID</ListItem>
                                            <ListItem>- Voter’s ID</ListItem>
                                            <ListItem>- Philhealth Card</ListItem>
                                            <ListItem>- Philippine ID Card</ListItem>
                                        </Box>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel4'} 
                                onChange={handleChange('panel4')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel4' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        I forgot my gaming account username/password
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem' }}>
                                        <ListItem sx={{ color: '#9ca3af', fontSize: 14 }}>
                                            - To retrieve your account, click <Button sx={{ textTransform: 'lowercase' }} href='https://go.fastwin.com.ph/lobby/login.aspx'>here</Button> and click the Player Self Service below the Login option, then choose Forgot Password. 
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel5'} 
                                onChange={handleChange('panel5')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel5' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How much is the minimum deposit amount ? 
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem' }}>
                                        <ListItem sx={{ color: '#9ca3af', fontSize: 14 }}>
                                            - The initial deposit is PHP 1,000.00 and the next succeeding minimum deposit is PHP 100.00.
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel6'} 
                                onChange={handleChange('panel6')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel6' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        What are the payment facilities available on Fastwin?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>- Maya</ListItem>
                                        <ListItem>- Fortune Pay</ListItem>
                                        <ListItem>- Over the counter</ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel7'} 
                                onChange={handleChange('panel7')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel7' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How to deposit using MAYA ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>
                                            Step 1: Login your player account.
                                        </ListItem>
                                        <ListItem>
                                            Step 2: Click "Cash In".
                                        </ListItem>
                                        <ListItem>
                                            Step 3: Enter the amount to be deposited on the account.
                                        </ListItem>
                                        <ListItem>
                                            Step 4: Click "Confirm".
                                        </ListItem>
                                        <ListItem>
                                            Step 5: Enter your MAYA credential or if you are using desktop or tablet you may scan the QR code for faster transaction.
                                        </ListItem>
                                        <ListItem>
                                            Step 6: Enter the One-time-Password for verification.
                                        </ListItem>
                                        <ListItem>
                                            Step 7: A receipt confirmation e-mail will be provided to the player after the transaction has been confirmed.
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel8'} 
                                onChange={handleChange('panel8')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel8' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How to deposit using Fortune Pay ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>
                                            Step 1: Login your player account.
                                        </ListItem>
                                        <ListItem>
                                            Step 2: Click "Cash In".
                                        </ListItem>
                                        <ListItem>
                                            Step 3: Enter the amount to be deposited on the account.
                                        </ListItem>
                                        <ListItem>
                                            Step 4: Click “Fortune Pay” as your selected payment solution provider. 
                                        </ListItem>
                                        <ListItem>
                                            Step 5: Click "Confirm".
                                        </ListItem>
                                        <ListItem>
                                            Step 6: Choose “Fortune Pay Wallet”. 
                                        </ListItem>
                                        <ListItem>
                                            Step 7: Enter your Fortune Pay Number and click “Request OTP”.
                                        </ListItem>
                                        <ListItem>
                                            Step 8: Enter the One-time-Password for verification.
                                        </ListItem>
                                        <ListItem>
                                            Step 9: Click “Pay” button.
                                        </ListItem>
                                        <ListItem>
                                            Step 10: A receipt confirmation e-mail will be provided to the player after the transaction has been confirmed.
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel9'} 
                                onChange={handleChange('panel9')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel9' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How to withdraw my playing credits using OVER THE COUNTER ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>
                                            - Log in to <Button sx={{ textTransform: 'lowercase' }} href='https://go.fastwin.com.ph/lobby/Login.aspx'>https://go.fastwin.com.ph/lobby/Login.aspx</Button>, click "cash out", give the withdrawal reference # to cashier, and wait for the approval of the request. 
                                        </ListItem>
                                        <ListItem>
                                            - Your preferred bank will be requested by our customer service agent in order to transfer the requested amount.
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel10'} 
                                onChange={handleChange('panel10')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel10' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How to withdraw using Fortune Pay wallet ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>
                                            - The player must have an existing Fortune Pay account. 
                                        </ListItem>
                                        <ListItem>
                                            - The player’s Fortune Pay account must be linked to his or her Fastwin account.
                                        </ListItem>
                                        <List 
                                            sx = {{
                                                listStyleType: 'decimal',
                                                pl: 2,
                                                '& .MuiListItem-root': {
                                                    display: 'list-item',
                                                },
                                                color: '#9ca3af',
                                                fontSize: 14,
                                                ml: 3
                                            }}
                                        >
                                            <ListItem>
                                                The player must click “CASH OUT”.
                                            </ListItem>
                                            <ListItem>
                                                Select Fortune Pay as your chosen payment solution provider.  
                                            </ListItem>
                                            <ListItem>
                                                Click the “Request OTP” 
                                            </ListItem>
                                            <ListItem>
                                                Enter the One-time-Password for verification.
                                            </ListItem>
                                        </List>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel11'} 
                                onChange={handleChange('panel11')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel11' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How long does withdrawal takes ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>
                                            - Minimum 3-5 minutes.
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel12'} 
                                onChange={handleChange('panel12')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel12' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        How long will it take for my deposit to reflect on my gaming account ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>
                                            - As soon as the transaction has been completed, the amount will be reflected on player's gaming account.
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion 
                                expanded={expanded === 'panel13'} 
                                onChange={handleChange('panel13')}
                                sx={{ p: 1, background: '#181d3f' }}
                            >
                                <AccordionSummary
                                    expandIcon={expanded === 'panel13' ? <RemoveIcon color= 'gray400' /> : <AddIcon color='gray400' />}
                                >
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        What is the minimum amount for withdrawal ?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{ padding:'0 1rem', color: '#9ca3af', fontSize: 14 }}>
                                        <ListItem>
                                            - There is no minimum amount for withdrawal, any amount is accepted.
                                        </ListItem>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Container>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default Faq