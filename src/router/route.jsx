import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoaderOverly from '../components/loader';
import AboutUs from '../pages/about-us';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Import kategori menu
import Makanan from '../pages/Menu-page/kategori/Makanan/Index';
import Minuman from '../pages/Menu-page/kategori/Minuman/index';
import Nasi from '../pages/Menu-page/kategori/Nasi/index';
import Mie from '../pages/Menu-page/kategori/Mie/index';
import Sayur from '../pages/Menu-page/kategori/Sayur/index';
import AddOn from '../pages/Menu-page/kategori/Add-on/index';

// Import komponen Kategori
import Kategori from "../pages/Menu-page/Kategori";

// Lazy load untuk halaman utama
const Locations = React.lazy(() => import('../pages/locations'));
const Home = React.lazy(() => import('../pages/home'));
const Menu = React.lazy(() => import('../pages/Menu-page/index'));

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
            <Route path='/about' element={<WithLayout><AboutUs /></WithLayout>} />
            <Route path='/menu' element={<WithLayout><Menu /></WithLayout>} />

            {/* Routing halaman kategori menu dengan komponen Kategori */}
            <Route path='/menu/makanan' element={<KategoriLayout><Makanan /></KategoriLayout>} />
            <Route path='/menu/minuman' element={<KategoriLayout><Minuman /></KategoriLayout>} />
            <Route path='/menu/nasi' element={<KategoriLayout><Nasi /></KategoriLayout>} />
            <Route path='/menu/mie' element={<KategoriLayout><Mie /></KategoriLayout>} />
            <Route path='/menu/sayur' element={<KategoriLayout><Sayur /></KategoriLayout>} />
            <Route path='/menu/addon' element={<KategoriLayout><AddOn /></KategoriLayout>} />
          </Routes>
        </Suspense>
      )}
    </>
  );

  // Komponen layout umum (tanpa kategori)
  function WithLayout({ children }) {
    return (
      <div className="App">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }

  // Komponen layout khusus kategori (dengan komponen tombol kategori)
  function KategoriLayout({ children }) {
    return (
      <div className="App">
        <Navbar />
        {/* <Kategori /> */}
        {children}
        <Footer />
      </div>
    );
  }
};

export default RouteApp;
