import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Redirect } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import AnimalPage from './pages/AnimalPage';
import Ad from './pages/Ad';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/ilan-ver" element={<Ad />} />
          <Route exact path="/:id" element={<AnimalPage />}/>
        </Routes>
    </BrowserRouter>   

      <Footer />
    </div>
  );
}

export default App;
