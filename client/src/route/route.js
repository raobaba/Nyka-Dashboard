import {Routes , Route} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Analytics from '../components/Analytics';
import Signup from '../components/Signup';

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>
  )
}

export default Routing