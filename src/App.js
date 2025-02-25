
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Payments from './components/Payments';
import Bookings from './components/Bookings';
import Notifications from './components/Notifications';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
  return (
   <div>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="Bookings" element={<Bookings/>}></Route>
<Route path="Notifications" element={<Notifications/>}></Route>
<Route path="Payments" element={<Payments/>}></Route>
<Route path="Profile" element={<Profile/>}></Route>
<Route path="Search" element={<Search/>}></Route>
<Route path="Settings" element={<Settings/>}></Route>




</Routes>
   </div>
  );
}

export default App;
