'use client'
import Carousel from 'react-bootstrap/Carousel';
// import MyProjects from '/public/JSON/projects.json';
// import CarouselProjectItem from './carousel/carouselImages';
// import { getAllImages } from '../utils/functions';



export default function CarouselTag({projects, images}) {
  //const images = getAllImages();
  
  return (
    <Carousel className='bg-dark bg-opacity-75' style={{maxHeight:"70vh"}} id="carouselProjects">
      {
        projects.map((project, i) => (
          <Carousel.Item key={Object.values(images)[i][0]}>
            <img src={Object.values(images)[i][0]} alt={project.name + " slide"} className="d-block mw-100 h-auto m-auto" />
            <Carousel.Caption className='bg-dark bg-opacity-75'>
              <h3>{`${project.name} (${project.type})`}</h3>
              <p>{project.shortDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

// Ensure that 'react-bootstrap' is installed and correctly imported
// npm install react-bootstrap bootstrap
