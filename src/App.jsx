import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Teaching from '@/pages/Teaching'
import Initiatives from '@/pages/Initiatives'
import Achievement from '@/pages/Achievement'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename || undefined}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="initiatives" element={<Initiatives />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
