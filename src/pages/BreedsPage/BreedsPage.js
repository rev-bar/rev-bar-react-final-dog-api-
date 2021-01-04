import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DogCard from '../../components/DogCard/DogCard';
import Nav from '../../components/NavBar/NavBar';
import './BreedsPage.css';

function BreedsPage() {

  
    const [breeds,setBreeds] = useState([]);

        useEffect ( ()=> {
            axios.get("https://dog.ceo/api/breeds/list/all").then(res => 
            setBreeds(Object.keys(res.data.message) ))
      },[])

    
    //prepering data for render:

    const dogCards = breeds.map((breed,index) => <DogCard breed= {breed} key= {index} /> )

    return (
        <div p-breedsPage >
            {/* <DogNavBa */}
            <Row m={6} className="flex">
            {dogCards}
            </Row>
            
        </div>
    );
}


export default BreedsPage;