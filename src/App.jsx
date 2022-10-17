import './App.css';
import Navbar from './components/features/Navbar/Navbar.component';
import Router from './components/router/Router.component';
import Footer from './components/features/Footer/Footer.component';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
};