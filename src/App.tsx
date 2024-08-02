import './components/Introduction'
import './App.css'
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

function App() {

  return ( 
    <>
      <Introduction name='David Adeniyi' title='Carleton CS Student' />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}

export default App
