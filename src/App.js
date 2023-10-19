
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './page/loginPage/LoginPage';
import FormLogin from './page/loginPage/FormLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<LoginPage />} />
            <Route path='/login' element = {<FormLogin />} />
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
