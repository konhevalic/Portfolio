import './App.css';
import {Header} from './sections/Header'
import {WhoAmI} from './sections/whoAmI'
import {Projects} from './sections/Projects'
import {Footer} from './sections/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <WhoAmI />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
