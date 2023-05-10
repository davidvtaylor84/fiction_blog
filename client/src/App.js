import './App.css';
import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
