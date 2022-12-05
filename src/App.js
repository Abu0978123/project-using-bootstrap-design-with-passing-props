import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
// import Error from './components/Error';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/contact'element={<Contact/>} />
        <Route path='/services'element={<Services/>} />
        {/* <Route path='/*'element={<Error/>} /> */}
        <Route render={() => <Navigate to="/about" />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
</>
  );
}

export default App;
