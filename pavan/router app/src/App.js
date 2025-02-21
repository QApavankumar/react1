import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import { useState } from 'react';
import NoMatchUrl from './components/NoMatchUrl';
function App() {
  const [redirectmsg, setRedirectmsg] = useState(false);
  return (
   <div>
    <Navbar/>
<Routes>
<Route path="/" element={<Home/>} ></Route>
<Route path="about" element={<About/>}></Route>
<Route path="contact" element={<Contact />}></Route>
<Route path="order-summary" element={<OrderSummary />}></Route>
<Route path="*" element={<NoMatchUrl />}></Route>
</Routes>
      
    </div>
  );
}

export default App;
