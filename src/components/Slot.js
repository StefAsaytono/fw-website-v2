import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Grid, Typography, Box } from '@mui/material'
import { BsArrowLeftCircle, BsArrowRightCircle, BsNewspaper } from "react-icons/bs"
import Loading from './Loading'
import CryptoJS from "crypto-js"
import axios from 'axios'
import { UserAgent } from 'react-useragent';

const Slot = (props) => {   
    const [IPAddress, setIPAddress] = useState("")
    const [platform, setPlatform] = useState("")

    const SlotGames = [
        { image: 'bfgaming/bfgslots/Book of Gates.jpg', gameName: 'Book of Gates', gameProvider: 'BF Games', GameId: 'BFGbook-of-gates' },
        { image: 'bfgaming/bfgslots/Book of Gods.jpg', gameName: 'Book of Gods', gameProvider: 'BF Games', GameId: 'BFGbook-of-gods' },
        { image: 'bfgaming/bfgslots/Burning Slots.jpg', gameName: 'Burning Slots', gameProvider: 'BF Games', GameId: 'BFGburning-slots' },
        { image: 'bfgaming/bfgslots/Burning Slots 20.jpg', gameName: 'Burning Slots 20', gameProvider: 'BF Games', GameId: 'BFGburning-slots-20' },
        { image: 'bfgaming/bfgslots/Burning Slots 40.jpg', gameName: 'Burning Slots 40', gameProvider: 'BF Games', GameId: 'BFGburning-slots-40' },
        { image: 'bfgaming/bfgslots/Cave of Fortune.jpg', gameName: 'Cave of Fortune', gameProvider: 'BF Games', GameId: 'BFGcave-of-fortune' },
        { image: 'bfgaming/bfgslots/Cave of Gold.jpg', gameName: 'Cave of Gold', gameProvider: 'BF Games', GameId: 'BFGcave-of-gold' },
        { image: 'bfgaming/bfgslots/Disco Lights.jpg', gameName: 'Disco Lights', gameProvider: 'BF Games', GameId: 'BFGdisco-lights' },
        { image: 'bfgaming/bfgslots/Dragons Chance.jpg', gameName: 'Dragons Chance', gameProvider: 'BF Games', GameId: 'BFGdragons-chance' },
        { image: 'bfgaming/bfgslots/Horizon Hunters.jpg', gameName: 'Horizon Hunters', gameProvider: 'BF Games', GameId: 'BFGhorizon-hunters' },
        { image: 'bfgaming/bfgslots/Stunning Hot.jpg', gameName: 'Stunning Hot', gameProvider: 'BF Games', GameId: 'BFGaa827330-f395-41bc-98fa-9626dfb24f8b' },
        { image: 'bfgaming/bfgslots/Sweet Reward.jpg', gameName: 'Sweet Reward', gameProvider: 'BF Games', GameId: 'BFGsweet-reward' },
        { image: 'bfgaming/bfgslots/Stunning Hot 20 Deluxe.jpg', gameName: 'Stunning Hot 20 Deluxe', gameProvider: 'BF Games', GameId: 'BFG8c7ce246-6bda-4b36-bead-e2a2b7cf955d' },
        { image: 'tomhorn/slots/VS243Christmas92_TNP.png', gameName: '243 Christmas Fruits', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VS243Crystal_TNP.png', gameName: '243 Crystal Fruits', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSBoB_TNP.png', gameName: 'The Secret of BA', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSCricket_TNP.png', gameName: 'Cricket Mania', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSDragFenix_TNP.png', gameName: 'Dragon vs Phoenix', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSFluxberry_TNP.png', gameName: 'Fluberry', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSGold_TNP.png', gameName: 'Gold X', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSHawaii92_TNP.png', gameName: 'Hawaiian Fever', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSLine_TNP.png', gameName: 'Frutopia', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSlotBOS_TNP.png', gameName: 'Book of Spells', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSlotHB_TNP.png', gameName: 'Hot Blizzard', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSLuckyst_TNP.png', gameName: '81 Frutas Grandes', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSMermaids92_TNP.png', gameName: '3 Mermaids', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSPengwins_TNP.png', gameName: 'Peng Wins', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSThunder92_TNP.png', gameName: 'Triple Thunder', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSVampires92_TNP.png', gameName: 'Book of Vampires', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSVegasM92_TNP.png', gameName: '81 Vegas Magic', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSWheel_TNP.png', gameName: 'Wheel of Luck Hold & Win', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'tomhorn/slots/VSWolf_TNP.png', gameName: 'Wolf Sierra', gameProvider: 'Tom Horn Gaming', GameId: '' },
        { image: 'aruze/dragon.png', gameName: 'Extreme Dragon', gameProvider: 'Aruze Gaming', GameId: '' },
        { image: 'aruze/kylin.png', gameName: 'Extreme Kylin', gameProvider: 'Aruze Gaming', GameId: '' },
        { image: 'aruze/phoenix.png', gameName: 'Extreme Phoenix', gameProvider: 'Aruze Gaming', GameId: '' },
        { image: 'aruze/tortoise.png', gameName: 'Extreme Tortoise', gameProvider: 'Aruze Gaming', GameId: '' },
        // { image: 'red-thunder/dragon.jpg', gameName: 'Dragons Hoard', gameProvider: 'Red Thunder', GameId: '' },
        // { image: 'red-thunder/elevator.jpg', gameName: 'Elevator Ecstacy', gameProvider: 'Red Thunder', GameId: '' },
        { image: 'caleta/slot-icons/basketballpro.jpg', gameName: 'Basketball Pro', gameProvider: 'Caleta', GameId: 'cg_basketballpro' },
        { image: 'caleta/slot-icons/chinacharms.jpg', gameName: 'China Charms', gameProvider: 'Caleta', GameId: 'cg_chinacharms' },
        { image: 'caleta/slot-icons/enchantedcash.jpg', gameName: 'Enchanted Cash', gameProvider: 'Caleta', GameId: 'cg_enchantedcash' },
        { image: 'caleta/slot-icons/footballpro.jpg', gameName: 'Football Pro', gameProvider: 'Caleta', GameId: 'cg_footballpro' },
        { image: 'caleta/slot-icons/heroesempire.jpg', gameName: 'Heroes Sempire', gameProvider: 'Caleta', GameId: 'cg_heroesempire' },
        { image: 'caleta/slot-icons/lostsaga.jpg', gameName: 'Lost Saga', gameProvider: 'Caleta', GameId: 'cg_lostsaga' },
        { image: 'caleta/slot-icons/luckyexpress.jpg', gameName: 'Lucky Express', gameProvider: 'Caleta', GameId: 'cg_luckyexpress' },
        { image: 'caleta/slot-icons/madamefortune.jpg', gameName: 'Madame Fortune', gameProvider: 'Caleta', GameId: 'cg_madamefortune' },
        { image: 'caleta/slot-icons/magicforest.jpg', gameName: 'Magic Forest', gameProvider: 'Caleta', GameId: 'cg_magicforest' },
        { image: 'caleta/slot-icons/torchoffire.jpg', gameName: 'Torch of Fire', gameProvider: 'Caleta', GameId: 'cg_torchoffire' },
        { image: 'vibra/slot/clover.jpg', gameName: 'Clover Fantasy', gameProvider: 'Vibra', GameId: 'CLOVERSFANTASY7Q5' },
        { image: 'vibra/slot/Codex.jpg', gameName: 'Codex', gameProvider: 'Vibra', GameId: 'CODEX9R0' },
        { image: 'vibra/slot/LuckyFruit.jpg', gameName: 'Lucky Fruits', gameProvider: 'Vibra', GameId: 'LUCKYFRUITZ9U6' },
        { image: 'vibra/slot/Make-a-wish.jpg', gameName: 'Make a Wish', gameProvider: 'Vibra', GameId: 'MAKEAWISH8Q1' },
        { image: 'vibra/slot/mystic-jocker.jpg', gameName: 'Mystic Joker', gameProvider: 'Vibra', GameId: 'MYSTICJOKER3Q2' },
        { image: 'vibra/slot/Patagonia.jpg', gameName: 'Patagonia Wild', gameProvider: 'Vibra', GameId: 'PATAGONIA5T3' },
        { image: 'vibra/slot/piggy-cash.jpg', gameName: 'Piggy Cash', gameProvider: 'Vibra', GameId: 'PIGGYCASH5I3' },
        { image: 'vibra/slot/Popeye.jpg', gameName: 'Popeye Slots', gameProvider: 'Vibra', GameId: 'POPEYE6M4' },
        { image: 'vibra/slot/Quake.jpg', gameName: 'Quake', gameProvider: 'Vibra', GameId: 'QUAKE3K5' },
        { image: 'vibra/slot/SpinIsland.jpg', gameName: 'Spin Island', gameProvider: 'Vibra', GameId: 'SPINISLAND7N9' },
        { image: 'vibra/slot/Phantom.jpg', gameName: 'The Phantom', gameProvider: 'Vibra', GameId: 'PHANTOM1T1' },
        { image: 'vibra/slot/wildgemes.jpg', gameName: 'Wild Gems', gameProvider: 'Vibra', GameId: 'WILDGEMS7I3' }
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

    const sliderRefSlot = useRef();
    const gotoPrev = (category) => {
        if(category === 'slot') {
            sliderRefSlot.current.slickPrev()
        }
    }
    const gotoNext = (category) => {
        if(category === 'slot') {
            sliderRefSlot.current.slickNext()
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
        else if(gameProvider === 'BF Games'){
            function generateUUID() {
                let d = new Date().getTime();
                let d2 = (typeof performance !== 'undefined' && performance.now && (performance.now() * 1000)) || 0;

                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    let r = Math.random() * 16;
                    if (d > 0) {
                        r = (d + r) % 16 | 0;
                        d = Math.floor(d / 16);
                    } else {
                        r = (d2 + r) % 16 | 0;
                        d2 = Math.floor(d2 / 16);
                    }
                    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
            }

            axios.post(process.env.REACT_APP_BFGAMES_URL, {
                "gameId": gameId,
                "gameMode": "demo",
                "currency": "PHP",
                "playerId": "",
                "license": "philippines",
                "language": "EN",
                "playerIP": '45.60.153.130',
                "platform": platform,
                "sessionToken": generateUUID()
            },{
                headers: {
                    "X-API-Key": process.env.REACT_APP_BFGAMES_KEY
                }
            })
            .then((response) => {
                setIsLoading(false)
                if (response.data.url){
                    window.open(`/launcher?d=${encodeURIComponent(dataEncrypted)}&u=${encodeURIComponent(response.data.url)}`, '_self')
                } 
                else {
                    console.log('Response did not contain a URL')
                }
            })
            .catch((error) => {
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

    useEffect(() => {
        axios.get(`https://api.ipify.org?format=json`).then((res) => {
            setIPAddress(res.data.ip)
        }).catch((error) => {
            console.log(error)
        })
    },[])

    if(props.isHome) {
        return (
            <>
                <UserAgent render={({ ua }) => { return ua.mobile ? setPlatform('Mobile') : setPlatform("Desktop") }} />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box
                        sx={{ display: 'flex', m: 2}}
                    >
                        <BsNewspaper size={20} color='#f9f9f9' />
                        <Typography variant='h1' sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                            Slot Games
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
                            <BsArrowLeftCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoPrev('slot')}/>
                            <BsArrowRightCircle size={22} color='#f9f9f9' className='cursor' onClick={() => gotoNext('slot')}/>
                        </Grid>
                    </div>
                </Grid>
                <Slider {...gamesSettings} ref={sliderRefSlot}>
                        {SlotGames.map((slot, index) => {
                            return(
                                <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                    <img src={require(`../assets/games/${slot.image}`)} alt={slot.gameName} className="image" />
                                    {
                                        slot.GameId === '' ?
                                            <div></div>
                                        : 
                                        <div className="middle">
                                            <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(slot.GameId, slot.gameName, slot.gameProvider, '')} />
                                            <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                        </div>
                                    }
                                    <div className="game-n">{slot.gameName}</div>
                                    <div className="game-p">{slot.gameProvider}</div>
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
                    <BsNewspaper size={20} color='#f9f9f9' />
                    <Typography sx={{ fontSize: 18, color: '#f9f9f9', mx: 1 }} >
                        Slot Games
                    </Typography>
                </Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mb: 5 }}
                >
                    {SlotGames.map((slot, index) => (
                        <Grid container item xs={4} lg={2} md={3} sm={3} key={index} sx={{ mb: 2 }}>
                            <Grid container direction='row' justifyContent='center' alignItems='center' key={index} className="hovers">
                                <img src={require(`../assets/games/${slot.image}`)} alt={slot.gameName} className="image" />
                                {
                                    slot.GameId === '' ?
                                        <div></div>
                                    :
                                    <div className="middle">
                                        <img className='cursor' src={require('../assets/img/icons8-play-50.png')} alt="Play" width={40} onClick={() => handlePlay(slot.GameId, slot.gameName, slot.gameProvider, 'slot')} />
                                        <Typography sx={{ fontSize: 14, color: '#ffffff', fontWeight: 'semibold' }}>Demo</Typography>
                                    </div>
                                }
                                <div className="game-n">{slot.gameName}</div>
                                <div className="game-p">{slot.gameProvider}</div>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Loading open={isLoading} />
            </>
        )
    }
}

export default Slot