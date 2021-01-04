
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Row } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import BreedsChoice from './pages/BreedChoice/BreedsChoicePage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
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
            <Route exact path= "/breeds"><BreedsPage/></Route>
            <Route exact path= "/breeds/:id"><BreedsChoice/></Route>
            
          </Switch>  
        </HashRouter> 

 
    </div>
  );
}

export default App;