import React from 'react';
import Navbar from './components/sectionNavber/Navber';
import Header from"./components/sectionHeader/Header"
import Need from './components/sectionNeed/Need';
import Service from './components/sectionService/Service';

function App(){
  return(
    <div className="app">
      <Navbar/>
      <Header/>
      <Need/>
      <Service/>
    </div>
  )
}

export default App;