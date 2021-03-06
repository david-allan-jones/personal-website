
import Carousel from 'react-material-ui-carousel'
import hefnerSunset from './img/hefner-sunset.jpg'
import yoyogiAutumn from './img/yoyogi-autumn.jpg'
import dallasNeon from './img/dallas-neon.jpg'
import Image from 'material-ui-image'
import i18next from '../../i18n/i18next'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    carousel_container: {
    }
}))

export default function LandingCarousel() {
    const [autoPlay, setAutoPlay] = useState(true)

    const classes = useStyles()
    const hefnerText = i18next.t('carousel.hefner')
    const yoyogiText = i18next.t('carousel.yoyogi')
    const dallasText = i18next.t('carousel.dallas')
    const items = [
        {
            src: hefnerSunset,
            alt: hefnerText,
            overlay: hefnerText
        },
        {
            src: yoyogiAutumn,
            alt: yoyogiText,
            overlay: yoyogiText
        },
        {
            src: dallasNeon,
            alt: dallasText,
            overlay: dallasText
        }
    ]

    function toCarouselItem({ src, alt, overlay }) {
        return <Image
            aspectRatio={(1/1)}
            key={alt}
            src={src}
            alt={alt}
            onClick={() => setAutoPlay(!autoPlay)}
        />
    }

    return (
        <Carousel
            autoPlay={autoPlay}
            interval={4000}
            className={classes.carousel_container}
        >
            {
                items.map(toCarouselItem)
            }
        </Carousel>
    )
}