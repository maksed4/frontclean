import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import MinaSidor from './Components/MinaSidor';
import Register from './Components/Register';



function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='Registration' element={<Register />} />
        <Route path="MinaSidor" element={<MinaSidor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
