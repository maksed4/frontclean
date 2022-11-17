import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Hem} from './Components/Hem';
import {Layout} from './Components/Layout';
import LoginForm from './Components/LoginForm';
import MinaSidor from './Components/MinaSidor';
import Register from './Components/Register';
import Boka from "./Components/Boka";
import Cleanings from "./Components/Cleanings";
import Assign from "./Components/Assign";


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
          <Route path='/cleanings' element={<Cleanings />}></Route>
          <Route path='/assign/:id' element={<Assign />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
