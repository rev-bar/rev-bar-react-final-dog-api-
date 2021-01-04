import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import DogCard from '../../components/DogCard/DogCard';
import DogNavBar from '../../components/NavBar/NavBar';

import './BreedsPage.css';

function BreedsPage() {

    const [breeds,setBreeds] = useState([]);
    const [reRender,setReRender] = useState(5);


        useEffect ( ()=> {
            axios.get("https://dog.ceo/api/breeds/list/all").then(res => 
            setBreeds(Object.keys(res.data.message) ))
      },[])

    function reRenderPics(){
        let newNum = reRender+2;
        setReRender(newNum);
        // alert("renderr");
        
    }


    //prepering data for render:

    const dogCards = breeds.map((breed,index) => <DogCard breed= {breed} key= {index} reRender= {reRender} /> )

    return (
        <div>
            <DogNavBar></DogNavBar>
            <Row m={6} className="flex">
                <Button onClick={reRenderPics} >Update</Button>
            </Row>
            <Row m={6} className="flex">
            {dogCards}
            </Row>
            
        </div>
    );
}


export default BreedsPage;