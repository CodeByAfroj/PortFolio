import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Body from "./pages/Body"
import Proj from './pages/Proj'
import Footer from './pages/Footer1'
import Header from './pages/Header'
import About from './pages/About'
import Particle from './components/Particle'
import SplashCursor from "./components/SplashCursor"
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Router>
        <div 
          className='app-container'
          style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}
        >

          {/* Cool cursor effect */}
          <SplashCursor />

          {/* Background particles */}
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              zIndex: 0, 
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

          {/* Main content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Header />
            
            <Routes>
              <Route path='/' element={<Body />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
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
      </Router>
    </>
  )
}

export default App
