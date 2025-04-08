import React from 'react'
import HeroSection from '../../components/HeroSection'
import FavoritMenu from '../../components/FavoritMenu'
import Location from '../../components/Location'
import Galery from '../../components/Galery'
import DefaultLayout from '../../components/layout/default-layout'

const Home = () => {
  return (
    <DefaultLayout title='Home'>
      <HeroSection />
      <FavoritMenu />
      <Location />
      <Galery />
    </DefaultLayout>
  )
}

export default Home