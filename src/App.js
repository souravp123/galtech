import './App.css';
import { HashRouter as BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';



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
