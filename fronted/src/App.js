import logo from './logo.svg';
import './App.css';
import Home from './Component/Landing_Page/Home_Page/Home';
import Menubar from './Component/Landing_Page/Menubar_Page/Menubar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './Component/Registration/Register';
import Login from './Component/Login_page/Login';
import About from './Component/Landing_Page/About/About'
import Contact from './Component/Landing_Page/ContactUs/Contact'
function App() {
  return (
    <>  

       <BrowserRouter>
       <Menubar/>

       <Routes>  

        {/* Login and Register */}
        <Route path="/Register" element={<Register/>} /> 
        <Route path="/Login" element={<Login/>} />

         {/* Landing page   */}

         <Route path='/About' element={<About/>}></Route>
         <Route path="/Contact" element={<Contact/>}></Route> 

        

       </Routes>
       </BrowserRouter>
    
    </>
  );
}

export default App;
