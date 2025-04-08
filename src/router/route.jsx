import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoaderOverly from '../components/loader';
import AboutUs from '../pages/about-us';
import Menu from '../pages/Menu-page';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Locations = React.lazy(() => import('../pages/locations'));
const Home = React.lazy(() => import('../pages/home'));

const RouteApp = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading ? (
        <LoaderOverly />
      ) : (
        <Suspense fallback={<LoaderOverly />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/location/:latitude/:longitude' element={<Locations />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Menu' element={<MenuPage />} />
          </Routes>
        </Suspense>
      )}
    </>
  );

  // Halaman AboutPage
  function AboutPage() {
    return (
      <div className="App">
        <Navbar />
        <AboutUs />
        <Footer />
      </div>
    );
  }

  // Halaman MenuPage
  function MenuPage() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
        <Footer />
      </div>
    );
  }
};

export default RouteApp;
