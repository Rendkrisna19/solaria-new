import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoaderOverly from '../components/loader';
import AboutUs from '../pages/about-us';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Import kategori menu
import MenuPaket from '../pages/Menu-page/kategori/menu_paket/Index';
import MenuSpecial from '../pages/Menu-page/kategori/menu_special/index';
import MenuPorsi from '../pages/Menu-page/kategori/menu_porsi/index';
import NasiGoreng from '../pages/Menu-page/kategori/nasi_goreng/index';
import Sayur from '../pages/Menu-page/kategori/Sayur/index';
import AddOn from '../pages/Menu-page/kategori/Add-on/index';
import Snack from "../pages/Menu-page/kategori/Snack/index"
import MieGoreng from "../pages/Menu-page/kategori/mie_goreng/index"
import Kwetiau from "../pages/Menu-page/kategori/kwetiau/index"
import Bihun from "../pages/Menu-page/kategori/bihun/index"

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
            <Route path='/menu/paket' element={<KategoriLayout><MenuPaket /></KategoriLayout>} />
            <Route path='/menu/special' element={<KategoriLayout><MenuSpecial /></KategoriLayout>} />
            <Route path='/menu/porsi' element={<KategoriLayout><MenuPorsi /></KategoriLayout>} />
            <Route path='/menu/nasi-goreng' element={<KategoriLayout><NasiGoreng/></KategoriLayout>} />
            <Route path='/menu/mie-goreng' element={<KategoriLayout><MieGoreng /></KategoriLayout>} />
            <Route path='/menu/kwetiau' element={<KategoriLayout><Kwetiau /></KategoriLayout>} />
            <Route path='/menu/bihun' element={<KategoriLayout><Kwetiau /></KategoriLayout>} />
            <Route path='/menu/sayur' element={<KategoriLayout><Sayur /></KategoriLayout>} />
            <Route path='/menu/addon' element={<KategoriLayout><AddOn /></KategoriLayout>} />
            <Route path='/menu/snack' element={<KategoriLayout><Snack /></KategoriLayout>} />
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
