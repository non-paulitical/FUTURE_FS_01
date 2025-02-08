import React, { useEffect, useState } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Section, DropdownMenu, Box } from '@radix-ui/themes';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    import('../data/projects.json')
      .then((data) => setProjects(data.default))
      .catch((error) => console.log('Error loading projects: ' + error));
  }, []);

  return (
    <Section>
      <Section className='section-heading'>Projects</Section>
      <Section>
        <Section>Dropdown Menu</Section>
        <Section>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>{project.title}</SwiperSlide>
            ))}


          </Swiper>
        </Section>
      </Section>
    </Section>
  )
}

export default Projects