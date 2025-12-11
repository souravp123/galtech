import './App.css';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MainBanner from './components/MainBanner';



function App() {
  return (
    <>
      <BrowserRouter basename="/galtech">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  

  );
}

export default App;
