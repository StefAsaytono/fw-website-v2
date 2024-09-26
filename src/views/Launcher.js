import React, { lazy } from 'react'
import { Box, Container, Toolbar, IconButton, Typography } from '@mui/material'
import Iframe from 'react-iframe'
import CryptoJS from "crypto-js";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Helmet } from 'react-helmet-async'

const NotFound = lazy(() => import('../components/NotFound'))
const Soon = lazy(() => import('../components/Soon'))

const Launcher = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dataDecrypt = urlParams.get('d')
    const url2 = urlParams.get('u')

    const dataDecrypted = CryptoJS.AES.decrypt(dataDecrypt, process.env.REACT_APP_KEY, {
        iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV)
    });

    const result = dataDecrypted.toString(CryptoJS.enc.Utf8)
    console.log(url2)
    let res = result.split('&')
    let GameId = res[0]
    let GameName = res[1]
    let Provider = res[2]
    let backToLink = res[3]

    let URL = ''
    let urlBoolean = false

    if(Provider === 'Alfastreet') {
        urlBoolean = false
    }
    if(Provider === 'KGI-LiveDealer') {
        urlBoolean = false
    }
    if(Provider === 'Red Thunder') {
        urlBoolean = false
    }
    if(Provider === 'Caleta') {
        urlBoolean = true
        URL = url2
    }
    if(Provider === 'Evolution') {
        urlBoolean = false
        URL = url2
    }
    if(Provider === 'BF Games') {
        urlBoolean = true
        URL = url2
    }
    if(Provider === 'Vibra') {
        const characters ='0123456789';
        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        urlBoolean = true
        URL = `${process.env.REACT_APP_VIBRA_URL}/launcher/GameManager.php?channel=desktop&currency=PHP&gameId=${GameId}&gameMode=FUN&userId=test${generateString(3)}&siteId=kgi&token=test`
    }
    if(Provider === 'Zitro') {
        urlBoolean = true
        URL = `${process.env.REACT_APP_ZITRO_URL}?game=${GameId}&token=${process.env.REACT_APP_ZITRO_TOKEN}&lang=en&clienttype=web&demo=1&homeURL=${process.env.REACT_APP_LB_URL}`
    }
    if(Provider === 'Maxfair') {
        urlBoolean = true
        URL = process.env.REACT_APP_MAXFAIR
    }
    if(Provider === 'Highlight') {
        urlBoolean = true
        URL = process.env.REACT_APP_HIGHLIGHT
    }

    const handleBack = () => {
        window.open(`/${backToLink}`, '_self')
    }

    if(dataDecrypt === null || dataDecrypt === "") {
        return(<NotFound />)
    }
    else {
        return (
            <> 
                <Helmet>
                    <title>{Provider} - {GameName}</title>
                    <link rel='canonical' href='/launcher' />
                </Helmet>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth='xl' sx={{ minHeight: '80vh' }}>
                        <IconButton color="primary" aria-label="back" onClick={handleBack}>
                            <KeyboardBackspaceIcon sx={{ fontWeight: 'bold', color: '#f9f9f9' }} />
                        </IconButton>
                        {urlBoolean ?
                            <>
                                <Iframe 
                                    url= {URL}
                                    className='launcher'
                                    allow='fullscreen'
                                />
                            </> :
                            <>
                                <Soon />
                            </>
                        }
                        <Box sx={{ padding: '0.5rem' }}>
                            <Typography variant="h5" sx={{ color: '#fff' }} >
                                {GameName}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#fff' }} >
                                {Provider}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </>
        )
    }
}

export default Launcher