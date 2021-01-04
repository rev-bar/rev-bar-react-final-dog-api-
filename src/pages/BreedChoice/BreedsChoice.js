import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DogCard from '../../components/DogCard/DogCard';
import DogNavBar from '../../components/NavBar/NavBar';

function BreedsChoice(props) {

    const [breeds,setBreeds] = useState([]);
    const [reRender,setReRender] = useState(5);


        useEffect ( ()=> {
            axios.get("https://dog.ceo/api/breeds/list/all").then(res => 
            setBreeds(Object.keys(res.data.message) ))
      },[])
  //prepering data for render:

  const dogCards = breeds.map((breed,index) => <DogCard breed= {breed} key= {index} /> )

    return (
        <div>

            <DogNavBar></DogNavBar>
            <Row m={6} className="flex">
            {dogCards}
            </Row>
            
        </div>
    );
}

export default BreedsChoice;

