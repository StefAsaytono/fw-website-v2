import React, { useRef, useState, lazy } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Grid, Typography, Box } from '@mui/material'
import { BsArrowLeftCircle, BsArrowRightCircle, BsFillGrid3X2GapFill } from "react-icons/bs";
import CryptoJS from "crypto-js"
const Loading = lazy(() => import('./Loading'))

const TableGames = (props) => {
    const TableGames = [
        // { image: 'promo-coming-soon.png', gameName: 'Coming Soon', gameProvider: '', GameId: '' }
        // { image: 'red-thunder/colorgames.jpg', gameName: 'Color Game', gameProvider: 'Red Thunder', GameId: '' },
        // { image: 'alfastreet/baccarat1.png', gameName: 'Baccarat 1', gameProvider: 'Alfastreet', GameId: '' },
        // { image: 'alfastreet/baccarat2.png', gameName: 'Baccarat 2', gameProvider: 'Alfastreet', GameId: '' },
        // { image: 'alfastreet/baccarat3.png', gameName: 'Baccarat 3', gameProvider: 'Alfastreet', GameId: '' },
        // { image: 'alfastreet/roulette1.png', gameName: 'Roulette 1', gameProvider: 'Alfastreet', GameId: '' },
        // { image: 'alfastreet/roulette2.png', gameName: 'Roulette 2', gameProvider: 'Alfastreet', GameId: '' },
        // { image: 'alfastreet/fantan.png', gameName: 'Fantan', gameProvider: 'Alfastreet', GameId: '' },
        // { image: 'alfastreet/sicbo.png', gameName: 'Sicbo', gameProvider: 'Alfastreet', GameId: '' },
    ]

    var gamesSettings = {
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 2,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1419,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                }
            }
        ]
    }

    const sliderRefTable = useRef();
    const gotoPrev = (category) => {
        if(category === 'table') {
            sliderRefTable.current.slickPrev()
        }
    }
    const gotoNext = (category) => {
        if(category === 'table') {
            sliderRefTable.current.slickNext()
        }
    }
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
                        <BsFillGrid3X2GapFill size={20} color='#f9f9f9' />
                        <Typography variant='h1' sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                            Table Games
                        </Typography>
                    </Box>
                    <div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{ mx: 1 }}
                        >
                            <BsArrowLeftCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoPrev('table')}/>
                            <BsArrowRightCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoNext('table')}/>
                        </Grid>
                    </div>
                </Grid>
                
                <Slider {...gamesSettings} ref={sliderRefTable}>
                        {TableGames.map((table, index) => {
                            return(
                                <Grid 
                                    container 
                                    direction='row' 
                                    justifyContent='center' 
                                    alignItems='center' 
                                    key={index} 
                                    className="hovers"
                                >
                                    <img src={require(`../assets/games/${table.image}`)} alt={table.gameName} className="image" />
                                    {/* <div className="middle">
                                        <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(table.GameId, table.gameName, table.gameProvider, '')} />
                                        <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                    </div> */}
                                    <div className="game-n">{table.gameName}</div>
                                    <div className="game-p">{table.gameProvider}</div>
                                </Grid>
                            )
                        })}
                </Slider>
                <Loading open={isLoading} />
            </>
        )
    }
    else {
        return(
            <>
                <Box
                    sx={{ display: 'flex', my: 2 }}
                >
                    <BsFillGrid3X2GapFill size={20} color='#f9f9f9' />
                    <Typography sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                        Table Games
                    </Typography>
                </Box>
                <Grid
                    container
                    direction="row"
                    // justifyContent="center"
                    // alignItems="center"
                    sx={{ mb: 5 }}
                >
                    {TableGames.map((table, index) => (
                        <Grid container item xs={4} lg={2} md={3} sm={3} key={index} sx={{ mb: 3 }}>
                            <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                <img src={require(`../assets/games/${table.image}`)} alt={table.gameName} className="image" />
                                {/* <div className="middle">
                                    <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(table.GameId, table.gameName, table.gameProvider, 'table')} />
                                    <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                </div> */}
                                <div className="game-n">{table.gameName}</div>
                                <div className="game-p">{table.gameProvider}</div>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Loading open={isLoading} />
            </>
        )
    }
}

export default TableGames