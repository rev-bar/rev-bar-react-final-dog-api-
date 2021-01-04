import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BreedCard from '../../components/BreedCard/BreedCard';
import DogNavBar from '../../components/NavBar/NavBar';
import './BreedsChoicePage.css';

function BreedsChoice() {

    const [breedPics,setBreedPics] = useState([]);

    const {index} = useParams();
    // console.log(breedIndex);
 
   
    const breed ="hound";

        useEffect ( ()=> {
            axios.get("https://dog.ceo/api/breed/"+breed+"/images").then(res => 
            setBreedPics(res.data.message) )
      },[])

    
  //prepering data for render:

  const dogCards = breedPics.map((imgURL,index) => <BreedCard imgURL= {imgURL} key= {index} /> )

    return (
        <div>
            <DogNavBar></DogNavBar>
            <p>{index}</p>

            <p className="p-breedChoice-head">{breed}</p>
            <Row m={6} className="flex">
            {dogCards}
            </Row> 
            
        </div>
    );
}

export default BreedsChoice;

