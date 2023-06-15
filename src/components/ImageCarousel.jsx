import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ imageItems }) => {
    return (
        <Carousel fade className="carousel-fade">
            {imageItems.map((image, index) => (
                <Carousel.Item key={index} className="carousel-item">
                    <Image src={image} alt={`Image ${index + 1}`} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;