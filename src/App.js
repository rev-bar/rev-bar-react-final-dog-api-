

import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/HomePage';


// import ActorsPage from './pages/ActorPage';
// import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';


function App() {
  return (
    <div className="App">

        <HashRouter>
          <Switch>
            <Route exact path= "/"><HomePage/></Route>
          </Switch>  
        </HashRouter> 
 
    </div>
  );
}

export default App;