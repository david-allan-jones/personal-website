
import Carousel from 'react-material-ui-carousel'

export default function ProjectCarousel({ className, items }) {
    function toCarouselItem({ src, alt }) {
        return <img
            key={alt}
            src={src}
            alt={alt}
        />
    }

    return (
        <Carousel
            autoPlay={false}
            swipe={true}
            className={className}
            animation='slide'
        >
            {items.map(toCarouselItem)}
        </Carousel>
    )
}