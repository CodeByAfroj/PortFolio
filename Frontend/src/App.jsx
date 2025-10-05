
import { Route, Routes } from 'react-router-dom'
import Body from "./pages/Body"
import Proj from './pages/Proj'
import Footer from './pages/Footer1'
import Header from './pages/Header'
import About from './pages/About'
import Particle from './components/Particle'
import SplashCursor from "./components/SplashCursor"
import Contact from './pages/Contact'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function App() {


//   return (
//     <>
//       <div className=''><Header/></div>
//       <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  
//   <Particle
//     particleColors={['#ffffff', '#ffffff']}
//     particleCount={200}
//     particleSpread={10}
//     speed={0.1}
//     particleBaseSize={100}
//     moveParticlesOnHover={true}
//     alphaParticles={false}
//     disableRotation={false}
//   />

//       <Routes>
//          <Route path='/' element={ <Body/> } />
//          <Route path='/about' element={ <About/> } />
//          <Route path='/projects' element={ <Proj/> } />
//       </Routes>
//       <Footer/>
//       </div>
//     </>
//   )
// }
function App() {
  return (
    <>
      <div className='app-container  ' style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>


      <SplashCursor />
        {/* Background Particle */}
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 0, 
             // Optional: lets user click through
          }}
        >
          <Particle
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Main content with higher z-index */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Header />
          
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact/> } />
            <Route path='/projects' element={<Proj />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
  />
          <Footer />
        </div>

      </div>
    </>
  )
}


export default App
