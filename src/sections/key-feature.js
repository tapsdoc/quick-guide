/** @jsx jsx */
import {Box, jsx} from 'theme-ui';
import { Container } from 'theme-ui';
import SectionHeader from '../components/section-header';
import PostThumb1 from "../assets/blog/1.jpg";
import PostThumb2 from "../assets/blog/2.jpg";
import PostThumb3 from "../assets/blog/3.jpg";
import Carousel from "react-multi-carousel";
import ButtonGroup from "../components/button-group";
import PostCard from "../components/post-card";

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Marketing',
    postLink: '#',
    title: 'Parent'
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'School'
  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'Startup',
    postLink: '#',
    title: 'Business'
  }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function KeyFeature() {
  return (
      <section sx={{ variant: 'section.news' }}>
        <Container>
          <SectionHeader
              slogan="Welcome"
              title="Are you a..."
          />

          <Box sx={styles.carouselWrapper}>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="carousel-container"
                customButtonGroup={<ButtonGroup />}
                dotListClass="test"
                draggable={true}
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
            >
              {data.map((item) => (
                  <PostCard
                      key={item.id}
                      src={item.imgSrc}
                      alt={item.altText}
                      postLink={item.postLink}
                      title={item.title}
                  />
              ))}
            </Carousel>
          </Box>
        </Container>
      </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
