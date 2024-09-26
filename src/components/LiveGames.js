import React, { lazy, useState, useRef } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { BsArrowLeftCircle, BsArrowRightCircle, BsPersonVideo } from "react-icons/bs"
import CryptoJS from "crypto-js"
import axios from "axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Loading = lazy(() => import('./Loading'))

const LiveGames = (props) => {
    const LiveDealerGames = [
        // { image: 'sa/First Person Dream Catcher.jpg', gameName: 'First Person Dream Catcher', gameProvider: 'Evolution', GameId: 'rng-dreamcatcher' },
        // { image: 'sa/First Person Lightning Baccarat DNT.jpg', gameName: 'First Person Lightning Baccarat DNT', gameProvider: 'Evolution', GameId: 'rng-lbaccarat000' },
        // { image: 'sa/First Person American Roulette DNT.jpg', gameName: 'First Person American Roulette DNT', gameProvider: 'Evolution', GameId: 'rng-rt-american0' },
        // { image: 'sa/First Person Lightning Roulette DNT.jpg', gameName: 'First Person Lightning Roulette DNT', gameProvider: 'Evolution', GameId: 'rng-rt-lightning' },
        // { image: 'sa/First Person Baccarat.jpg', gameName: 'First Person Baccarat', gameProvider: 'Evolution', GameId: 'rngbaccarat00000' },
        // { image: 'sa/First Person Deal or No Deal.jpg', gameName: 'First Person Deal or No Deal', gameProvider: 'Evolution', GameId: 'RngDealNoDeal001' },
        // { image: 'sa/First Person Dragon Tiger.jpg', gameName: 'First Person Dragon Tiger', gameProvider: 'Evolution', GameId: 'rng-dragontiger0' },
        // { image: 'sa/First Person Golden Wealth Baccarat.jpg', gameName: 'First Person Golden Wealth Baccarat', gameProvider: 'Evolution', GameId: 'rng-gwbaccarat00' },
        // { image: 'sa/First Person Mega Ball.jpg', gameName: 'First Person Mega Ball', gameProvider: 'Evolution', GameId: 'RngMegaBall00001' },
        // { image: 'sa/First Person Roulette.jpg', gameName: 'First Person Roulette', gameProvider: 'Evolution', GameId: 'rrng-rt-european0' },
        // { image: 'sa/First Person XXXtreme Lightning Roulette.jpg', gameName: 'First Person XXXtreme Lightning Roulette', gameProvider: 'Evolution', GameId: 'XxxtremeLigh0001' },
        { image: 'sa/First Person Dream Catcher.jpg', gameName: 'First Person Dream Catcher', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Lightning Baccarat DNT.jpg', gameName: 'First Person Lightning Baccarat DNT', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person American Roulette DNT.jpg', gameName: 'First Person American Roulette DNT', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Lightning Roulette DNT.jpg', gameName: 'First Person Lightning Roulette DNT', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Baccarat.jpg', gameName: 'First Person Baccarat', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Deal or No Deal.jpg', gameName: 'First Person Deal or No Deal', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Dragon Tiger.jpg', gameName: 'First Person Dragon Tiger', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Golden Wealth Baccarat.jpg', gameName: 'First Person Golden Wealth Baccarat', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Mega Ball.jpg', gameName: 'First Person Mega Ball', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person Roulette.jpg', gameName: 'First Person Roulette', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/First Person XXXtreme Lightning Roulette.jpg', gameName: 'First Person XXXtreme Lightning Roulette', gameProvider: 'Evolution', GameId: '' },
        { image: 'sa/sexy.png', gameName: 'Sexy Hall', gameProvider: 'SA Gaming', GameId: '' },
        { image: 'sa/viki.png', gameName: 'Viki', gameProvider: 'SA Gaming', GameId: '' },
        { image: 'sa/patti.png', gameName: 'Teen Patti', gameProvider: 'SA Gaming', GameId: '' },
        { image: 'sa/blackjack.png', gameName: 'Blackjack', gameProvider: 'SA Gaming', GameId: '' },
        { image: 'sa/diamond.png', gameName: 'Diamond Hall', gameProvider: 'SA Gaming', GameId: '' }
    ]
    const [isLoading, setIsLoading] = useState(false)
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

    const sliderRefLiveGames = useRef();
    const gotoPrev = (category) => {
        if(category === 'live') {
            sliderRefLiveGames.current.slickPrev()
        }
    }
    const gotoNext = (category) => {
        if(category === 'live') {
            sliderRefLiveGames.current.slickNext()
        }
    }
    const handlePlay = (gameId, gameName, gameProvider, link) => {
        setIsLoading(true)
        const data = `${gameId}&${gameName}&${gameProvider}&${link}`
        const dataEncrypted = CryptoJS.AES.encrypt(data, process.env.REACT_APP_KEY, {
            iv: CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV)
        }).toString()
        window.open(`/launcher?d=${encodeURIComponent(dataEncrypted)}`, '_self')
        // if(gameProvider === 'Evolution'){
        //     function generateUUID() {
        //         var d = new Date().getTime()
        //         var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0
        //         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        //             var r = Math.random() * 16
        //             if(d > 0) {
        //                 r = (d + r)%16 | 0;
        //                 d = Math.floor(d/16);
        //             } 
        //             else {
        //                 r = (d2 + r)%16 | 0;
        //                 d2 = Math.floor(d2/16);
        //             }
        //             return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        //         });
        //     }
        //     axios.post(process.env.REACT_APP_EVOLUTION_URL, {
        //         "uuid": generateUUID().toLowerCase(),
        //         "demo": {
        //           "language": "en",
        //           "currency": "PHP"
        //         },
        //         "config": {
        //           "game": {
        //             "playMode": "demo",
        //             "table": {
        //               "id": gameId
        //             }
        //           },
        //           "channel": {
        //             "wrapped": false
        //           }
        //         }
        //     }, {
        //         headers : {
        //             "Access-Control-Allow-Origin": "*"
        //         }
        //     }).then((res) => {
        //         setIsLoading(false)
        //         window.open(`/launcher?d=${encodeURIComponent(dataEncrypted)}&u=${encodeURIComponent(`${process.env.REACT_APP_EVOLUTION_URL}${res.data.entry}`)}`, '_self')
        //     }).catch((error) => {
        //         setIsLoading(false)
        //         console.log(error)
        //     })
        // }
        // else{
        //     setTimeout(() => {
        //         setIsLoading(false)
        //         window.open(`/launcher?d=${encodeURIComponent(dataEncrypted)}`, '_self')
        //     }, 1000)
        // }
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
                        <BsPersonVideo size={20} color='#f9f9f9' />
                        <Typography sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                            Live Games
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
                            <BsArrowLeftCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoPrev('live')}/>
                            <BsArrowRightCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoNext('live')}/>
                        </Grid>
                    </div>
                </Grid>
                <Slider {...gamesSettings} ref={sliderRefLiveGames}>
                    {LiveDealerGames.map((bingo, index) => {
                        return(
                            <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                <img src={require(`../assets/games/${bingo.image}`)} alt={bingo.gameName} className="image" />
                                {
                                    bingo.GameId === '' ?
                                        <div></div>
                                    : 
                                    <div className="middle">
                                        <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(bingo.GameId, bingo.gameName, bingo.gameProvider, '')} />
                                        <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                    </div>
                                }
                                <div className="game-n">{bingo.gameName}</div>
                                <div className="game-p">{bingo.gameProvider}</div>
                            </Grid>
                        )
                    })}
                </Slider>
            </>
            // <Box>
            //     <Grid
            //         container
            //         direction="row"
            //         justifyContent="center"
            //         alignItems="center"
            //         sx={{ my: 5 }}
            //     >
            //         <Grid container justifyContent="flex-end" xs={12} md={12} lg={6} sx={{ pr: 5 }}>
            //             <img src={require('../assets/img/live-dealer.png')} alt="LiveDealer" width={'50%'} />
            //         </Grid>
            //         <Grid xs={12} md={12} lg={6}>
            //             <Typography sx={{ fontSize: 20, color: '#f9f9f9' }}>
            //                 <BsPersonVideo size={20} color='#f9f9f9' /> Live Dealer
            //             </Typography>
            //             <Typography sx={{ my: 2, color: '#f9f9f9' }}>
            //                 Unsurprisingly, one of the first games offered by internet casinos in live dealer format was live baccarat, the high rollers' game. As a natural "one-to-many" game where a single transaction on a single table can accommodate numerous internet participants, it's also a wonderful fit for live gaming.
            //             </Typography>
            //             <Button variant='contained' color='orange' onClick={() => window.open('https://go.fastwin.com.ph', '_blank')} sx={{ color: '#f9f9f9' }}>Play Now</Button>
            //         </Grid>
            //     </Grid>
            // </Box>
        )
    }
    else {
        return(
            <>
                <Box
                    sx={{ display: 'flex', mt: 5, mb: 2 }}
                >
                    <BsPersonVideo size={20} color='#f9f9f9' />
                    <Typography variant='h1' sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                        Live Games
                    </Typography>
                </Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{ mb: 5 }}
                >
                    {LiveDealerGames.map((live, index) => (
                        <Grid container item xs={4} lg={2} md={3} sm={3} key={index} sx={{ mb: 3 }}>
                            <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                <img src={require(`../assets/games/${live.image}`)} alt={live.image} className="image" />
                                {
                                    live.GameId === '' ?
                                        <div></div>
                                    :
                                    <div className="middle">
                                        <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(live.GameId, live.gameName, live.gameProvider, 'live')} />
                                        <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                    </div>
                                }
                                <div className="game-n">{live.gameName}</div>
                                <div className="game-p">{live.gameProvider}</div>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Loading open={isLoading} />
            </>
        )
    }
}

export default LiveGames