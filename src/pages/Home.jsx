import { useOutletContext } from 'react-router-dom';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Amenities from '../sections/Amenities';
import Gallery from '../sections/Gallery';
import Videos from '../sections/Videos';
import Events from '../sections/Events';
import NearbyPlaces from '../sections/NearbyPlaces';
import MapSection from '../sections/MapSection';
import FAQ from '../sections/FAQ';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Support from '../sections/Support';

export default function Home() {
  const { onBookNow } = useOutletContext();

  return (
    <>
      <Hero onBookNow={onBookNow} />
      <About />
      <Amenities />
      <Gallery />
      <Videos />
      <Events />
      <NearbyPlaces />
      <MapSection />
      <FAQ />
      <Testimonials />
      <Contact />
      <Support />
    </>
  );
}
