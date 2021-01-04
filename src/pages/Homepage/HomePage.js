
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage(props) {
    
    return (
        <div className= "p-home">
            <p className= "p-home-head">DogBook</p>  
            <h1>Mens best friend</h1>
                <div>
                    <Link to= "/breeds"  className= "p-home-links">Woof!</Link>     
                </div>
            
                 
        </div>
    );
}

export default HomePage;
