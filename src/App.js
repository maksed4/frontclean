import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hem } from './Components/Hem';
import { Layout } from './Components/Layout';
import LoginForm from './Components/LoginForm';
import MinaSidor from './Components/MinaSidor';
import Register from './Components/Register';


function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="Hem" element={<Layout />} >
          <Route index element={<Hem />} />
          <Route path="Registration" element={<Register />} />
          <Route path="MinaSidor" element={<MinaSidor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
