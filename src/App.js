import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route  }
    from 'react-router-dom';
import Home from './pages';
import About from './pages';
import Locations from './pages/Location';
import Menu from './pages/Menu';
import Contact from './pages/Order';
import Reservation from './pages/Reservation';
import Footer from './components/Footer';
import Appetizers from "./Menu";
import LocalDishes from "./Menu/localdishes";
import Shakes from "./Menu/shakes";
import Beverages from "./Menu/beverages";
 
function App() {
    return (
        <div className='bg-cyan-50'>
        <Router>
            <Navbar />
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route exact path='/about'  element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/Location' element={<Locations />} />
                <Route path='/Reservation'  element={<Reservation />} />
                <Route path='/Menu' element={<Menu />}>
                {/* Nested Routes */}
                    <Route path='/Menu' element={<Appetizers />} />
                    <Route path='localdishes' element={<LocalDishes />} />
                    <Route path='shakes' element={<Shakes />} />
                    <Route path='beverages' element={<Beverages />} />
                </Route>
            </Routes>
            <Footer/>



        </Router>            
        </div>

    );
}
 
export default App;