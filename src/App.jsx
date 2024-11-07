import { useEffect, useState } from 'react'
import { Navigation } from './layouts/Navigation';
import { ScrollBar } from './layouts/scrollBar';
import { Error } from './layouts/Error';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import logo from "./assets/images/myLogo.png"
import { Projects } from './pages/projects/projects';
import { AppProvider } from './context/AppContext';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);    

      }, 2000);
  }, []);

  return (
    !isLoading ?
      <>
        <AppProvider>

          <Navigation />
          <ScrollBar />

          <Routes>
            <Route path="/*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AppProvider>
      </>
      :
      <div className="h-screen bg-black flex flex-col gap-y-5 items-center justify-center transition-all">
        <img className="w-72 animate-pulse" src={logo} alt="" />
        <h1 className="text-white boldPoppin animate-pulse text-4xl uppercase">Loading ... </h1>
      </div>
  )
}

export default App
