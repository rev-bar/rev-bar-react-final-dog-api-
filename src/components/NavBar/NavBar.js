import { Nav, Navbar } from "react-bootstrap";
import './NavBar.css';

function DogNavBar(props) {
    return (
        <Navbar bg="light" className="c-navBar">
  
            <Nav.Link href="#/" className="c-navBar-links">
                <img className="c-navBar-logo" id="dogIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuj_L-NpbuRpl78Sfh5tdZV6BM5lJXgiUcSw&usqp=CAU" alt="dogLogo"></img>
            </Nav.Link>
            <Nav.Link href="#/breeds">Breeds</Nav.Link>
            <Nav.Link href="#/breeds">About</Nav.Link>

                    




</Navbar>
       

    );
}

export default DogNavBar;