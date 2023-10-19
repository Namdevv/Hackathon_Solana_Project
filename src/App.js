
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './page/loginPage/LoginPage';
import FormLogin from './page/loginPage/FormLogin';
import Layout from './layout/Layout';
import NotFoundPage from './page/notFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<LoginPage />} />
            <Route path='/login' element = {<FormLogin />} />
            <Route path="*" element={<Layout Component={NotFoundPage} />} />
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
