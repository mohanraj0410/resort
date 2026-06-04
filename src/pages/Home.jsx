import { lazy, Suspense } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';

const Amenities = lazy(() => import('../sections/Amenities'));
const Gallery = lazy(() => import('../sections/Gallery'));
const Videos = lazy(() => import('../sections/Videos'));
const Events = lazy(() => import('../sections/Events'));
const NearbyPlaces = lazy(() => import('../sections/NearbyPlaces'));
const FAQ = lazy(() => import('../sections/FAQ'));
const Contact = lazy(() => import('../sections/Contact'));
const MapSection = lazy(() => import('../sections/MapSection'));
const Support = lazy(() => import('../sections/Support'));

function SectionFallback() {
  return <div className="section-padding min-h-[12rem]" aria-hidden />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Amenities />
        <Gallery />
        <Videos />
        <Events />
        <NearbyPlaces />
        <FAQ />
        <MapSection />
        <Contact />
        <Support />
      </Suspense>
    </>
  );
}
