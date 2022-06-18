import logo from './logo.svg';
import './App.css';
import {Route, Link, HashRouter} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
         <div>
          <Route exact path="/" component={Fib}/>
          <Route path="/otherpage" component={OtherPage}/>
         </div>
          
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
