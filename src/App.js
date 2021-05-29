import './App.css';
import {Header} from './sections/Header'
import {WhoAmI} from './sections/whoAmI'
import {Knowledge} from './sections/Knowledges'
import {Education} from './sections/Education'
import {Projects} from './sections/Projects'
import {HireMe} from './sections/HireMe'
import {Footer} from './sections/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <WhoAmI />
      <Knowledge />
      <Education />
      <Projects />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
