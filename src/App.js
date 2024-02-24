import logo from './logo.svg';
import './App.css';
import Hero from './component/hero';
import Book from './component/book';
import Frontend from './component/frontendbook';
import Stats from './component/stats';
import Whoshouldbuy from './component/whoshouldbuy';
import Premium from './component/premium';
import Fre from './component/fre';
import Nav from './component/nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Frontend/>
      <Book/>
      <Stats/>
      <Whoshouldbuy/>
      <Premium/>
      <Fre/>
    </div>
  );
}

export default App;







