

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'

import TvPage from './stores/pages/TvPage'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import MobileSingle from './stores/singleproduct/MobileSingle'
import UserCart from './stores/UserCart'
import FridgePage from './stores/pages/FridgePage'
import ComputerSingle from './stores/singleproduct/ComputerSingle'
import FurnitureSingle from './stores/singleproduct/FurnitureSingle'
import KitchenSingle from './stores/singleproduct/KitchenSingle'
import TvSingle from './stores/singleproduct/TvSingle'
import MenSingle from './stores/singleproduct/MenSingle'
import WatchSingle from './stores/singleproduct/WatchSingle'
import WomanSingle from './stores/singleproduct/WomanSingle'
import FridgeSingle from './stores/singleproduct/FridgeSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />               
        <Route path='/tv' element= {<TvPage />} />           
        <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/tv/:id' element = {<TvSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      </Routes>
    </div>
  )
}

export default App