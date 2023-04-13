import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Comments } from '../../../components/Comments';
import { SocialLinks } from '../../../components/SocialLinks';
import "./styles.css";

const images = [
  'https://picsum.photos/800/500',
  'https://picsum.photos/800/500',
  'https://picsum.photos/800/500',
  'https://picsum.photos/800/500',
];

const Photos = () => (
  <div className="photos">
    <Carousel
      showThumbs={true}
      showIndicators={false}
      showArrows={false}
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
    <SocialLinks likes={12} views={128} />
      <Comments
        comments={[
            {
                id: 1,
                avatarUrl: 'https://i.pravatar.cc/50',
                author: 'Иван Петров',
                time: '10 минут назад',
                text: 'Очень интересная новость! Надеюсь, что ремонт дорог пройдет без проблем.',
            },
            {
                id: 1,
                avatarUrl: 'https://i.pravatar.cc/50',
                author: 'Мария Сидорова',
                time: '5 минут назад',
                text: 'Я тоже с нетерпением жду начала ремонта дорог. Надеюсь, что они будут сделаны качественно.',
            }
        ]}
      />
  </div>
);

export default Photos;
