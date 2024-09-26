import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Banners = () => {
    const arrBanners = [
        { img: 'fastwin/web-fastwin-new.png', name: 'Fastwin Web' },
        { img: 'evo/web-bet&win.png', name: 'Bet & Win' }, 
        { img: 'redtiger/web_redtiger.jpg', name: 'Red Tiger Web' },
        { img: 'evo/web-evo2-new.png', name: 'Evolution Web' },
        { img: 'nolimit/web-nolimit-new.png', name: 'NoLimit Web' },
        { img: 'netent/web-netent-new.png', name: 'NetEnt Web' },
        { img: 'fp/web-fp-new.png', name: 'FP Web' },
        { img: 'beter/web-beter.png', name: 'Beter Web' },
        // { img: 'bfgames/web-bfgames-new.png', name: 'BF Games' },
        // { img: 'tomhorn/web-tomhorn-new.png', name: 'Tom Horn Web' },
        // { img: 'zitro/web-zitro.png', name: 'Zitro Web' }
    ]
    const arrBanners2 = [
        { img: 'fastwin/tab-fastwin-new.png', name: 'Fastwin Tablet', },
        { img: 'evo/tab-bet&win.png', name: 'Bet & Win' },
        { img: 'redtiger/tab_redtiger.jpg', name: 'Red Tiger Tab' },
        { img: 'evo/tab-evo2-new.png', name: 'Evolution Tablet' },
        { img: 'nolimit/tab-nolimit-new.png', name: 'NoLimit Tablet' },
        { img: 'netent/tab-netent-new.png', name: 'NetEnt Tablet' },
        { img: 'fp/tab-fp-new.png', name: 'FP Tablet' },
        { img: 'beter/tab-beter.png', name: 'Beter Tablet' },
        // { img: 'bfgames/tab-bfgames-new.png', name: 'BF Games Tablet' },
        // { img: 'tomhorn/tab-tomhorn-new.png', name: 'Tom Horn Tablet' },
        // { img: 'zitro/tab-zitro.png', name: 'Zitro Tablet' }
    ]
    const arrBanners3 = [
        { img: 'fastwin/mob-fastwin-new.png', name: 'Fastwin Mobile' },
        { img: 'evo/mob-bet&win.png', name: 'Bet & Win' },
        { img: 'redtiger/mob_redtiger.png', name: 'Red Tiger Mob' },
        { img: 'evo/mob-evo2-new.png', name: 'Evolution Mobile' },
        { img: 'nolimit/mob-nolimit-new.png', name: 'NoLimit Mobile' },
        { img: 'netent/mob-netent-new.png', name: 'NetEnt Mobile' },
        { img: 'fp/mob-fp-new.png', name: 'FP Mobile' },
        { img: 'beter/mob-beter.png', name: 'Beter Mobile' },
        // { img: 'bfgames/mob-bfgames-new.png', name: 'BF Games Mobile' },
        // { img: 'tomhorn/mob-tomhorn-new.png', name: 'Tom Horn Mobile' },
        // { img: 'zitro/mob-zitro.png', name: 'Zitro Mobile' }
    ]
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} className="banners-web">
                {arrBanners.map((banner, index) => {
                    return(
                        <div key={index} onClick={() => window.open('https://go.fastwin.com.ph/lobby/login.aspx', '_blank')}>
                            <img src={require(`../assets/banners/${banner.img}`)} className="banners-i" alt={banner.name} />
                        </div>
                    )
                })}
            </Carousel>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} className="banners-tablet">
                {arrBanners2.map((banner, index) => {
                    return(
                        <div key={index} onClick={() => window.open('https://go.fastwin.com.ph/lobby/login.aspx', '_blank')}>
                            <img src={require(`../assets/banners/${banner.img}`)} className="banners-i" alt={banner.name} />
                        </div>
                    )
                })}
            </Carousel>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} className="banners-mobile">
                {arrBanners3.map((banner, index) => {
                    return(
                        <div key={index} onClick={() => window.open('https://go.fastwin.com.ph/lobby/login.aspx', '_blank')}>
                            <img src={require(`../assets/banners/${banner.img}`)} className="banners-i" alt={banner.name} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Banners