import React, { lazy, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { BsBoxFill } from 'react-icons/bs'
import CryptoJS from "crypto-js"
const Loading = lazy(() => import('./Loading'))

const VirtualGames = (props) => {
    const virtualGames = [
        { image: 'highlight/highlight3.png', gameName: 'Basketball', gameProvider: 'Highlight', GameId: '' }
    ]
    const [isLoading, setIsLoading] = useState(false)
    const handlePlay = (gameId, gameName, gameProvider, link) => {
        setIsLoading(true)
        const data = `${gameId}&${gameName}&${gameProvider}&${link}`
        const dataEncrypted = CryptoJS.AES.encrypt(data, process.env.REACT_APP_KEY, {
            iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV)
        }).toString()
        
        setTimeout(() => {
            setIsLoading(false)
            window.open(`/launcher?d=${encodeURIComponent(dataEncrypted)}`, '_self')
        }, 1000)
    }

    if(props.isHome) {
        return (
            <>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box
                        sx={{ display: 'flex', m: 2}}
                    >
                        <BsBoxFill size={20} color='#f9f9f9' />
                        <Typography variant='h1' sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                            Virtual Games
                        </Typography>
                    </Box>
                </Grid>
                {virtualGames.map((virtual, index) => {
                    return(
                        <Grid container item xs={4} lg={2} md={3} sm={6} key={index} sx={{ mb: 2 }} className='hovers'>
                            <img src={require(`../assets/games/${virtual.image}`)} alt={virtual.image} className="image" />
                            <div className="middle">
                                <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(virtual.GameId, virtual.gameName, virtual.gameProvider, '')} />
                                <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                            </div>
                            <div className="game-n">{virtual.gameName}</div>
                            <div className="game-p">{virtual.gameProvider}</div>
                        </Grid>
                    )
                })}
                <Loading open={isLoading} />
            </>
        )
    }
    else {
        return (
            <>
                <Box
                    sx={{ display: 'flex', mt: 5, mb: 2 }}
                >
                    <BsBoxFill size={20} color='#f9f9f9' />
                    <Typography sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                        Virtual Games
                    </Typography>
                </Box>
                {/* <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ mb: 5 }}
                >
                    {virtualGames.map((virtual, index) => (
                        <Grid container item xs={4} lg={2} md={3} sm={6} key={index} sx={{ mb: 2 }}>
                            <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                <img src={require(`../assets/games/${virtual.image}`)} alt={virtual.gameName} className="image" />
                                <div className="middle">
                                    <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(virtual.GameId, virtual.gameName, virtual.gameProvider, 'virtual')} />
                                    <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                </div>
                                <div className="game-n">{virtual.gameName}</div>
                                <div className="game-p">{virtual.gameProvider}</div>
                            </Grid>
                        </Grid>
                    ))}
                </Grid> */}
                <Loading open={isLoading} />
            </>
        )
    }
}

export default VirtualGames