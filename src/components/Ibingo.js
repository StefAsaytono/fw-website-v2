import React, { lazy, useRef, useState } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { BsArrowLeftCircle, BsArrowRightCircle, Bs8CircleFill } from "react-icons/bs";
import axios from 'axios'
import CryptoJS from "crypto-js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Loading = lazy(() => import('./Loading'))

const Ibingo = (props) => {
    const BingoGames = [
        { image: 'maxfair/75.png', gameName: 'Bingo75', gameProvider: 'Maxfair', GameId: '' },
        { image: 'maxfair/alpaca.png', gameName: 'Alpaca Bingo', gameProvider: 'Maxfair', GameId: '' },
        { image: 'maxfair/black-beans.png', gameName: 'Black Beans', gameProvider: 'Maxfair', GameId: '' },
        { image: 'maxfair/boxing.png', gameName: 'Boxing Bingo', gameProvider: 'Maxfair', GameId: '' },
        { image: 'maxfair/candy.png', gameName: 'Bingo Candy', gameProvider: 'Maxfair', GameId: '' },
        { image: 'maxfair/golden.png', gameName: 'Golden Bingo', gameProvider: 'Maxfair', GameId: '' },
        { image: 'maxfair/polo.png', gameName: 'Bingo Pollo', gameProvider: 'Maxfair', GameId: '' },
        // { image: 'ortiz/ace-mania1.png', gameName: 'Ace Mania', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/goal.png', gameName: 'Goal Mania', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/triple-bonus1.png', gameName: 'Triple Bonus', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/ace-bonus.png', gameName: 'Ace Bonus', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/bubble.png', gameName: 'Bubble Mania', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/bingole.png', gameName: 'Bingole', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/beach.png', gameName: 'Beach Bingo', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/gambeta.png', gameName: 'Gambeta Bingo', gameProvider: 'Ortiz', GameId: '' },
        // { image: 'ortiz/bingo61.png', gameName: '6 Bingo', gameProvider: 'Ortiz', GameId: '' },
        { image: 'caleta/bingo-icons/bingotrevodasorte.jpg', gameName: 'Bingo Trevo da Sorte', gameProvider: 'Caleta', GameId: 'cg_bingotrevodasorte' },
        { image: 'zitro/bingo-icons/doblebonus.jpg', gameName: 'Doble Bonus', gameProvider: 'Zitro', GameId: 'doblebonus' },
        { image: 'zitro/bingo-icons/fishmania.jpg', gameName: 'Fish Mania', gameProvider: 'Zitro', GameId: 'fishmania' },
        { image: 'zitro/bingo-icons/hotdice.jpg', gameName: 'Hot Dice', gameProvider: 'Zitro', GameId: 'hotdice' },
        { image: 'zitro/bingo-icons/calaca.jpg', gameName: 'La Calaca Bingo', gameProvider: 'Zitro', GameId: 'calaca' },
        { image: 'zitro/bingo-icons/mexican-lottery.jpg', gameName: 'Mexican Lottery', gameProvider: 'Zitro', GameId: 'mexican-lottery' },
        { image: 'zitro/bingo-icons/power4bonus.jpg', gameName: 'Power 4 Bonus', gameProvider: 'Zitro', GameId: 'power4bonus' },
        { image: 'zitro/bingo-icons/power.jpg', gameName: 'Power Mania Bonus', gameProvider: 'Zitro', GameId: 'power' },
        { image: 'zitro/bingo-icons/spinbingo.jpg', gameName: 'Spin Bingo', gameProvider: 'Zitro', GameId: 'spinbingo' },
        { image: 'zitro/bingo-icons/tripleBonus.jpg', gameName: 'Triple Bonus', gameProvider: 'Zitro', GameId: 'tripleBonus' },
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

    const sliderRefIbingo = useRef();
    const gotoPrev = (category) => {
        if(category === 'ibingo') {
            sliderRefIbingo.current.slickPrev()
        }
    }
    const gotoNext = (category) => {
        if(category === 'ibingo') {
            sliderRefIbingo.current.slickNext()
        }
    }
    const [isLoading, setIsLoading] = useState(false)
    const token = () => {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(32).substring(1)
        };
        return ("1-"+S4()+S4()+"-"+S4()+S4()).toUpperCase()
    }
    const handlePlay = (gameId, gameName, gameProvider, link) => {
        setIsLoading(true)
        const data = `${gameId}&${gameName}&${gameProvider}&${link}`
        const dataEncrypted = CryptoJS.AES.encrypt(data, process.env.REACT_APP_KEY, {
            iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV)
        }).toString()
        if(gameProvider === 'Caleta') {
            const body = {
                "user": "test",
                "country": "PH",
                "currency": "FUN",
                "operator_id": "dfnn",
                "token": token(),
                "game_code": gameId,
                "lang": "en",
                "lobby_url": process.env.REACT_APP_LB_URL,
                "deposit_url": process.env.REACT_APP_LB_URL
            }
            axios.post(`${process.env.REACT_APP_AGATHA_URL}/api/v1/lobby/fastwin/seamless/caleta/wallet/encrypt?key=${process.env.REACT_APP_AGATHA_KEY}`, body).then((response) => {
                axios.post(`${process.env.REACT_APP_CALETA_URL}/api/game/url`, body, {
                    headers: { 'authorization': response.data.data.signature }
                }).then((response) => {
                    setTimeout(() => {
                        setIsLoading(false)
                        window.open(`/launcher?d=${encodeURIComponent(dataEncrypted)}&u=${encodeURIComponent(response.data.url)}`, '_self')
                    }, 1000)
                }).catch((error) => {
                    console.log(error)
                })
            }).catch((error) => {
                setIsLoading(false)
                console.log(error)
            })
        }
        else {
            setTimeout(() => {
                setIsLoading(false)
                window.open(`/launcher?d=${encodeURIComponent(dataEncrypted)}`, '_self')
            }, 1000)
        }
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
                        <Bs8CircleFill size={20} color='#f9f9f9' />
                        <Typography sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                            iBingo Games
                        </Typography>
                    </Box>
                    <div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-around"
                            alignItems="center"
                            sx={{ mx: 1}}
                        >
                            <BsArrowLeftCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoPrev('ibingo')}/>
                            <BsArrowRightCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoNext('ibingo')}/>
                        </Grid>
                    </div>
                </Grid>
                <Slider {...gamesSettings} ref={sliderRefIbingo}>
                    {BingoGames.map((bingo, index) => {
                        return(
                            <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                <img src={require(`../assets/games/${bingo.image}`)} alt={bingo.gameName} className="image" />
                                <div className="middle">
                                    <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(bingo.GameId, bingo.gameName, bingo.gameProvider, '')} />
                                    <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                </div>
                                <div className="game-n">{bingo.gameName}</div>
                                <div className="game-p">{bingo.gameProvider}</div>
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
                    sx={{ display: 'flex', mt: 5, mb: 2 }}
                >
                    <Bs8CircleFill size={20} color='#f9f9f9' />
                    <Typography variant="h1" sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                        iBingo Games
                    </Typography>
                </Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mb: 5 }}
                >
                    {BingoGames.map((bingo, index) => (
                        <Grid container item xs={4} lg={2} md={3} sm={3} key={index} sx={{ mb: 2 }}>
                            <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                <img src={require(`../assets/games/${bingo.image}`)} alt={bingo.gameName} className="image" />
                                <div className="middle">
                                    <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(bingo.GameId, bingo.gameName, bingo.gameProvider, 'ibingo')} />
                                    <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                </div>
                                <div className="game-n">{bingo.gameName}</div>
                                <div className="game-p">{bingo.gameProvider}</div>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Loading open={isLoading} />
            </>
        )
    }
}

export default Ibingo