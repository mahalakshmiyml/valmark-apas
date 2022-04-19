import React from 'react'
import MainSlider from "../Components/Includes/MainSlider";
// import About from "./Components/About";
import Amenities from "../Components/Amenities";
import Overview from "../Components/Overview";
import Gallery from '../Components/Gallery';
// import SideForm from '../Components/SideForm';
import Location from '../Components/Location';
import Pricing from '../Components/Pricing';
import MasterPlan from '../Components/MaterPlan/MasterPlan';
// import Contact from './Contact';
import ProjectHighlights from '../Components/ProjectHighlights';
import GetInTouch from '../Components/GetInTouch';
import VirtualTour from './VirtualTour';

const Home = () => {
  return (
    <>
      <MainSlider />
      <Overview />
      <ProjectHighlights />      
      <Pricing />
      <MasterPlan />
      <Gallery />
      <Amenities />
      <VirtualTour />
      {/* <SideForm /> */}
      <Location /> 
      <GetInTouch />      
    </>
  )
}

export default Home