import './App.css';
import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<CreatePost/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
