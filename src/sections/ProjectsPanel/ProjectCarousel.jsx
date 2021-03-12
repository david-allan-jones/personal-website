
import Carousel from 'react-material-ui-carousel'
import Image from 'material-ui-image'

export default function ProjectCarousel({ className, items }) {
    function toCarouselItem({ src, alt }) {
        return <Image
            key={alt}
            src={src}
            alt={alt}
        />
    }

    return (
        <Carousel
            swipe={true}
            className={className}
            autoPlay={false}
            animation='slide'
            indicators={true}
        >
            {items.map(toCarouselItem)}
        </Carousel>
    )
}