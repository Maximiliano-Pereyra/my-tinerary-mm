import './App.css';
import{Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Main from './layouts/Main';
import PginasDeCards from './components/PginasDeCards';
import CardCity from './pages/CardCity';
import SingIn from './components/SignIn';
import SignUp from './pages/SignUp';
import NuevoHotel from './components/NuevoHotel'
import NuevaCiudad from './pages/NuevaCiudad'


function App() {
  return (
  
     <Main>
    <Routes>
    
    <Route path='/index' element={<Home/>} />
    <Route path='/hotels' element={<PginasDeCards/>}/>
    <Route path='/city' element={<CardCity/>}/>
    <Route path='/signIn' element={<SingIn/>} />
    <Route path='/signUp' element={<SignUp/>} />
    <Route path='/newCity' element={<NuevaCiudad/>} />
    <Route path='/newHotel' element={<NuevoHotel/>} />

    </Routes>
    </Main>
    
  )
  }
export default App;
