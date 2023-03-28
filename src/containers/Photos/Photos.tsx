import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./styles.css";

const images = [
  'https://via.placeholder.com/250x150',
  'https://via.placeholder.com/250x150',
  'https://via.placeholder.com/250x150',
  'https://via.placeholder.com/250x150',
];

const MyCarousel = () => (
  <Carousel showThumbs={false}>
    {images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Slide ${index + 1}`} />
      </div>
    ))}
  </Carousel>
);

export default MyCarousel;
