import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Linux from './pages/Linux'
import Python from './pages/Python'
import Web from './pages/Web'
import Cyber from './pages/Cyber'
import Go from './pages/Go'
import Backend from './pages/Backend'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/backend" element={<Backend />} />
      <Route path="/linux" element={<Linux />} />
      <Route path="/python" element={<Python />} />
      <Route path="/web" element={<Web />} />
      <Route path="/cyber" element={<Cyber />} />
      <Route path="/go" element={<Go />} />
    </Routes>
  )
}

export default App
