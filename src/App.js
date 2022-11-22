import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Hem} from './Components/Hem';
import {Layout} from './Components/Layout';
import LoginForm from './Components/LoginForm';
import MinaSidor from './Components/MinaSidor';
import Register from './Components/Register';
import Boka from "./Components/Boka";
import Cleanings from "./Components/Cleanings";
import Assign from "./Components/Assign";
import Contact from './Components/Contact';
import AdminBoka from "./Components/AdminBoka";
import Cleaners from "./Components/Cleaners";
import CleanerSignup from "./Components/CleanerSignup";
import Customers from "./Components/Customers";
import CustomerSignupAdmin from "./Components/CustomerSignupAdmin";
import UpdateCustomer from "./Components/UpdateCustomer";
import NotApproved from "./Components/NotApproved";



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
          <Route path='/customers' element={<Customers />}></Route>
          <Route path='/customer-signup' element={<CustomerSignupAdmin />}></Route>
          <Route path='/assign/:id' element={<Assign />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/update/:id' element={<UpdateCustomer />}></Route>
          <Route path='/approve/:id' element={<NotApproved />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
