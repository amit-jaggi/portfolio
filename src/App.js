import './App.css';
import {DataBase} from './Components/DataBase/DataBase';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';


const App = () => {
  const title = document.getElementById('application-title');
  title.innerHTML = 'Portfolio';

  return (
    <DataBase>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </DataBase>
  );
}

export default App;
