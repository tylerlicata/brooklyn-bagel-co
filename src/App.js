// src/App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import Menu     from './pages/Menu';
import Order    from './pages/Order';
import Catering from './pages/Catering';
import About    from './pages/About';
import Contact  from './pages/Contact';
import './styles/globals.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/menu"     element={<Menu />}     />
        <Route path="/order"    element={<Order />}    />
        <Route path="/catering" element={<Catering />} />
        <Route path="/about"    element={<About />}    />
        <Route path="/contact"  element={<Contact />}  />
        <Route path="*" element={
          <main style={{ minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', paddingTop:'100px' }}>
            <div style={{ textAlign:'center' }}>
              <h1 style={{ color:'var(--green-primary)', marginBottom:'16px' }}>404</h1>
              <p style={{ marginBottom:'32px' }}>Page not found — but our bagels definitely are.</p>
              <a href="/" className="btn btn-primary">Back Home</a>
            </div>
          </main>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
