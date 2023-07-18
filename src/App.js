import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavigationBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact></Contact>
    <Footer/>
    </div>
  );
}

export default App;
