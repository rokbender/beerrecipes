import React from 'react'
import { useEffect } from 'react';
import useBeerStore from './BeerStore';
import Home from './pages/Home';
import BeerPage from './pages/BeerPage';
import { BrowserRouter, Routes, Route,Link,HashRouter } from 'react-router-dom';




function App() {
  
  const getFetch= useBeerStore(((state)=>state.fetchData))


  useEffect(()=>{
      getFetch(1)
  }, [])


  



  return (

       <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/beer/:id" element={<BeerPage />} />
          
        </Routes>
      </HashRouter>
        
        
      
      
  )

  
}

export default App;

