
  import React from 'react'
  import { BrowserRouter,Routes, Route } from 'react-router-dom'
  import Page from '../pages/page/page'
import Solutions from '../pages/solutions'
import Pricing from '../pages/page/pricing'
import Studies from '../pages/page/Studies'
import Blog from '../pages/page/blog'
import About from '../pages/page/about'
  export default function router() {
    return (
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Page/>}/>
           <Route path="/solutions" element={<Solutions />}/>
           <Route path="/pricing" element={<Pricing />}/>
           <Route path="/studies" element={<Studies />}/>
           <Route path="/blog" element={<Blog />}/>
           <Route path="/about" element={<About />}/>
        </Routes>
       </BrowserRouter>


    )
  }
  