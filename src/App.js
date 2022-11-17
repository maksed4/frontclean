import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Hem} from './Components/Hem';
import {Layout} from './Components/Layout';
import LoginForm from './Components/LoginForm';
import MinaSidor from './Components/MinaSidor';
import Register from './Components/Register';
import Boka from "./Components/Boka";
import Cleanings from "./Components/Cleanings";
import Assign from "./Components/Assign";
import AdminBoka from "./Components/AdminBoka";
import Cleaners from "./Components/Cleaners";
import CleanerSignup from "./Components/CleanerSignup";
import CleanerSignupInfo from "./Components/CleanerSignupInfo";


function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginForm />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/hem' element={<Hem />}></Route>
          <Route path='/minasidor' element={<MinaSidor />}></Route>
          <Route path='/boka' element={<Boka />}></Route>
          <Route path='/admin-boka' element={<AdminBoka />}></Route>
          <Route path='/cleanings' element={<Cleanings />}></Route>
          <Route path='/cleaners' element={<Cleaners />}></Route>
          <Route path='/cleaner-signup' element={<CleanerSignup />}></Route>
          <Route path='/cleaner-signup-info' element={<CleanerSignupInfo />}></Route>
          <Route path='/assign/:id' element={<Assign />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
