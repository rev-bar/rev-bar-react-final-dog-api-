
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DogCard from './components/DogCard/DogCard';
// import BreedsPage from './pages/BreedsPage/BreedsPage';
// import HomePage from './pages/Homepage/HomePage';


// import ActorsPage from './pages/ActorPage';
// import HomePage from './pages/HomePage';
// import MoviePage from './pages/MoviePage';


function App() {
  return (
    <div className="App">

        {/* <HashRouter>
          <Switch>
            <Route exact path= "/"><HomePage/></Route>
            <Route exact path= "/breeds"><BreedsPage/></Route>

          </Switch>  
        </HashRouter>  */}
        <Row  m={4} spacing={3}>
 <DogCard/>
 <DogCard/>
 <DogCard/>


        </Row>

 
    </div>
  );
}

export default App;