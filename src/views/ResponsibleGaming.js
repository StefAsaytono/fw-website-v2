import React, { useState, lazy } from 'react'
import { Box, CssBaseline, Container, Toolbar, Tabs, Tab, Typography, List, ListItem, Button } from '@mui/material'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';

const ResponsiveDrawer = lazy(() => import('../components/ResponsiveDrawer'))
const Footer = lazy(() => import('../components/Footer'))
const drawerWidth = 260

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}
  
const ResponsibleGaming = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fastwin - Responsible Gaming</title>
                <link rel="canonical" href="https://www.fastwin.ph/responsible-gaming" />
                <meta name="description" content="As one of the first and most trusted online casino sites in the Philippines and a PAGCOR online casino" />
                <meta property="og:title" content="Fastwin - Responsible Gaming" />
                <meta property="og:url" content="https://www.fastwin.ph/responsible-gaming" />
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
                        <Typography variant='h1' sx={{ color: '#f9f9f9', fontSize: 20 }}>Responsible Gaming</Typography>
                        <Box sx={{ width: '100%', my: 2 }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs variant='scrollable' scrollButtons allowScrollButtonsMobile value={value} onChange={handleChange} color='gray'>
                                <Tab sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)' }} label="Community Responsibility" {...a11yProps(0)} />
                                <Tab sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)' }} label="Gaming Limitations" {...a11yProps(1)} />
                                <Tab sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)' }} label="Strategies on Gaming" {...a11yProps(2)} />
                                <Tab sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)' }} label="Need help?" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Community Responsibility
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Fastwin is committed to responsible gambling. Remote gambling is a legitimate form of entertainment that is experienced by millions of players worldwide. For most players remote gambling is an enjoyable experience, however, the reality must be accepted that a small percentage of players engaging in remote gambling might have a problem with gambling taking over their life and finances. Being a socially responsible company means taking caring of our players, means having a proactive approach about the problems that affect the community. This is why Fastwin has adopted and is fully committed to the strictest application and enforcement of the following policies:
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Restricting Access by Minors or Non-qualified Players
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Fastwin requires new players to go through a KYC process to verify that they are of lawful age in their respective jurisdiction and at least 21 years old and qualified as a remote gaming player. Should we have a suspicion of a false declaration or minors attempting to use our services we will further pursue reasonable measures to verify this. In this respect, if we have a suspicion to this extent, we reserve the right to suspend an account and request proof of identity and age from the player to verify compliance with this policy.
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    We also ensure that our advertising, sponsorship and promotional activity are not targeted at minors or any non-qualified players.
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Fastwin does not allow anybody under the age of 21 or non-qualified players to use our services. This policy is in full compliance and exceeds the requirements of the rules and regulations of the remote gambling authority that oversees and licenses our operation; Philippine Amusement and Gaming Corporation (PAGCOR), Philippines.
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    We pledge to do all we can but we need your help also to:
                                </Typography>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Use child protection software to block remote gambling sites from computers minors might have access to.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Do not leave the computer/mobile devices unattended when you are logged on to our site.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Do not leave the "Save Password" option enabled on any Fastwin login screen.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Create separate profiles for minors on computers/mobile devices so that when they log in they cannot access your information.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - If you suspect someone under the age of 21 is registered with us as a player, please contact us immediately.
                                    </ListItem>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Controlling Compulsive Gambling
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Compulsive gambling does not benefit Fastwin. We strive to have a safe, fun environment on our site. Compulsive gamblers are a problem for their families, friends and their lives, creating an unstable, unsafe environment.
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Fastwin is committed to detecting and reducing compulsive gambling. We have a system to track player's activities, and we are constantly working to design and enforce controls designed to limit gambling patterns that are out of control.
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    While the majority of people do gamble within their means, for some, it can spiral out of control. We strive not only to identify compulsive gamblers, but also help them address their problem and prevent other players from becoming compulsive gamblers.
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                    In order to help you keep control, we would like you to remember the following:
                                </Typography>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Gambling should be seen as entertainment, address it as if you are paying for entertainment so do not over pay for your entertainment.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Gambling should NOT be seen as a genuine way of making money.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Avoid chasing losses.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Only gamble what you can afford to lose.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - Keep track of the time and amount of money you spend gambling.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, pt: 0 }}>
                                        - If you need to take a break from gambling, please send an email at keepitfun@pagcor.ph or visit PAGCOR website at https://pagcor.ph/regulatory
                                    </ListItem>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Raising Standards Worldwide
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Fastwin wants to increase the standards in our target territories; hence we are self-imposing standards of utmost responsibility, integrity, transparency, legitimacy and awareness. We work to raise the bar of integrity worldwide because we believe that operating at the highest standards benefits everyone.
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Accountability and Integrity
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    We believe that we are only as good as our player’s perception of us. Therefore, the highest level of integrity is the only standard by which Fastwin can operate to have our players have that perception of us.
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Payouts
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Fastwin is committed to prompt payment of customer cash out requests.
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Commitment to Customer Service
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    At Fastwin, our highest priority is customer satisfaction. That's why you can contact us in a various number of ways through our Customer Service Support Team is available 24 hours a day, seven days a week to offer technical support, aid in dispute resolution, and answer your questions.
                                </Typography>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Gaming Limitations
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Pursuant to Presidential Decree 1869, as amended by Republic Act 9487, persons under 21 years of age or students of any school, college or university in the Philippines are not allowed to play in this gaming establishment.
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Pursuant to Malacañang Memorandum Circular No. 8, the following are not allowed to enter, stay and/or play in this gaming establishment:
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
                                        Government officials and employees connected directly with the operation of the government or any of its agencies; and
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Active employees of the Philippine National Police (PNP) and Armed Forces of the Philippines (AFP).
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        In accordance with the recent policy pronouncement of the President of the Philippines, immediate relatives (i.e. spouse, children and parents) of government officials are not allowed to play.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Fastwin Players shall not play in open venues such as streets, parks, malls, restaurants, churches or places of worship, markets, and other venues which are in direct and full view of the public.
                                    </ListItem>
                                </List>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Strategies on Gaming
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Here are some strategies you can use to play safe and have fun.
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
                                        Don’t gamble when you’re upset or stressed.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Limit your alcohol intake while gambling.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Know how the games work before you wager.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Set budget and time limits – there are tools available on many slot machines, mobile and internet gambling sites to help you monitor your play.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Take frequent breaks – move around, get some fresh air, have something to eat or a coffee.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Only gamble with money you have – never borrow money or use money intended for necessities, like rent or food.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Don’t try to win back what you’ve lost.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Gambling is not a way to make money so don’t think of it as a chance to win money for a trip, to pay bills or to pay off debt.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Stick to your budget by leaving your credit and debit cards at home.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Balance gambling with other recreational activities.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        If you’re no longer having fun, stop playing.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Don’t depend on “good luck” strategies – they don’t increase your chances of winning
                                    </ListItem>
                                </List>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={3}>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Signs of Inclination to Gaming
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Ignoring your feelings only makes them worse. Eventually, they will begin to affect not just you, but your family and friends, too. Pay attention to how gambling makes you feel and know the warning signs before you develop a problem.
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
                                        Feeling guilty, anxious, frustrated or worried about your gambling.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Thinking or talking about gambling more than usual.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Gambling to win back money you’ve lost or thinking that a “big win” is right around the corner.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Experiencing extreme highs from wins and extreme lows from losses.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Finding it difficult to control or stop gambling, or feeling irritable when you try to stop.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Feeling a sense of emptiness or loss when you’re not gambling.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Borrowing money, selling things, committing (or considering committing) criminal acts to obtain money for gambling.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Having increased debt, unpaid bills, or other financial troubles because of your gambling.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Gambling to escape personal problems or to relieve feelings of anxiety, depression, anger, or loneliness.
                                    </ListItem>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        Gambling instead of attending family or other social functions or neglecting family or household responsibilities because of gambling.
                                    </ListItem>
                                </List>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Type of Exclusion Programs 
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
                                        SELF EXCLUSION
                                    </ListItem>
                                    <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                        One can exclude themselves from any gaming establishments operated and regulated by PAGCOR. One may request for an exclusion period of 6 moths, 1 year, or 5 years.
                                    </Typography>
                                    <Button variant='contained' color='indigo' href='files/PAGCOR Self-Exclusion-Application-Form.pdf' download>
                                        Download Pagcor Self Exclusion Form
                                    </Button>
                                    <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14 }}>
                                        FAMILY EXCLUSION
                                    </ListItem>
                                    <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                        One may even exclude their family members such as spouse, child at least 18 years old, or even their parents. One may request for an exclusion period of 3 months, 6 months or 1 year.
                                    </Typography>
                                    <Button variant='contained' color='indigo' sx={{ mb: 2 }} href='files/PAGCOR Family-Exclusion-Application-Form.pdf' download>
                                        Download Pagcor Family Exclusion Form
                                    </Button>
                                    <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                        All exclusion orders shall take effect in all PAGCOR operated and regulated gaming facilities. Once the PAGCOR Exclusion Form is fully accomplished, submit inside a sealed long-sized brown envelop with the following written on it:
                                    </Typography>
                                    <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2, fontWeight: 'bold' }}>
                                        APPLICATION FOR EXCLUSION ORDER
                                    </Typography>
                                    <List sx={{ py: 0 }}>
                                        <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                            Gaming Licensing and Development Department 
                                        </ListItem>
                                        <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                            12th Floor | Contact No.: 755-3904 
                                        </ListItem>
                                        <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                            PAGCOR Main Corporate Office 
                                        </ListItem>
                                        <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                            IMET BPO Tower, CBP-1A Metropolitan Park, 
                                        </ListItem>
                                        <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                            Roxas Boulevard, Pasay City 
                                        </ListItem>
                                    </List>
                                </List>
                                <Typography sx={{ fontWeight: 'bold', color: 'rgb(209 213 219)', mb: 1 }}>
                                    Help Center
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, mb: 2 }}>
                                    Fastwin follows the guidelines of institutions dedicated to addressing the social impact of gambling. To help players gamble responsibly, we commit to work with these institutions to develop responsible policies and practices:
                                </Typography>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, fontWeight: 'bold' }}>
                                    Bridges of Hope Drugs and Alcohol Rehabilitation Foundation, Inc.
                                </Typography>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Headquarters
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    364 Aguirre Avenue, Phase 3, BF Homes, Parañaque City, Metro Manila 
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Tel. No. (02) 622-0193
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    New Manila Branch, 12 Orestes Lane, Mariposa Street 
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Tel. No. (02) 502-0600; (0917) 856-0623
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Email: help@bridgesofhope.ph
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Website: www.bridgesofhope.com.ph
                                </ListItem>
                                <Typography sx={{ color: 'rgb(209 213 219)', fontSize: 14, fontWeight: 'bold', mt: 2 }}>
                                    Life Change Recovery Center
                                </Typography>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Dr. Randy Misael S. Dello
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    05 Scout Rallos Street, Kamuning, Brgy. Sacred Heart, Quezon City
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Telephone numbers: (02) 415-7964 / 415-6529
                                </ListItem>
                                <ListItem sx={{ color: 'rgb(209 213 219)', fontSize: 14, py: 0 }}>
                                    Website: www.lifechangerecoverycenter.com
                                </ListItem>
                            </CustomTabPanel>
                        </Box>
                    </Container>
                    <Footer />
                </Box>
            </Box>
        </>
    )
}

export default ResponsibleGaming