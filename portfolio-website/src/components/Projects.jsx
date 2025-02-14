import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Section, DropdownMenu, Button } from '@radix-ui/themes';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  //* Loads the projects
  useEffect(() => {
    import('../data/projects.json')
      .then((data) => {
        setProjects(data.default);
        const uniqueCategories = ['All', ... new Set(data.default.map(p => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.log('Error loading projects: ' + error));
  }, []);

  //* Filters the projects categorically
  useEffect(() => {
    let proxyFilteredProjects = [];

    if (selectedCategory === 'All') {
      proxyFilteredProjects = projects;
    } else {
      proxyFilteredProjects = projects.filter(p => p.category === selectedCategory)
    }

    setFilteredProjects(proxyFilteredProjects);

  }, [selectedCategory, projects]);

  return (
    <Section>
      <Section className='section-heading'>Projects</Section>
      <Section>
        <Section className='mb-3'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button className='flex items-center gap-1 bg-button p-1 rounded-md'>
                {selectedCategory}
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="min-w-[120px] bg-navbar border border-[#4F228D] rounded-md shadow-lg z-10 outline-none text-base-text hover:bg-[#3a1d6c]">
              {categories.map((category, index) => (
                <DropdownMenu.Item
                  key={index}
                  className="text-base-text px-4 py-2 hover:bg-[#2b134c] cursor-pointer focus:outline-none"
                  onSelect={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>

        </Section>
        <Section className="p-1.5 border-1 border-[#80808036] rounded-md">
          <Swiper
            className='swiper'
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true
            }}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation
            breakpoints={{
              1024: {
                navigation: {
                  enabled: true
                }
              }
            }}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide className='p-4' key={index}>
                <div>
                  <div className="image">
                    <img src={project.image} alt={project.imageAlt} />
                  </div>
                  <div className="text font-bold">
                    <h1>Title: <span className='font-light'>{project.title}</span></h1>
                    <p>Description: <span className='font-light'>{project.description}</span></p>
                    <p>Tech Stack: <span className='font-light'>{project.techStack.join('--')}</span></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}


          </Swiper>
        </Section>
      </Section>
    </Section>
  )
}

export default Projects