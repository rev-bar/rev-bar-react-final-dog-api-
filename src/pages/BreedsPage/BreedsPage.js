import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import DogCard from '../../components/DogCard/DogCard';
import DogNavBar from '../../components/NavBar/NavBar';


import './BreedsPage.css';

function BreedsPage() {

    // const {breeds} =props;
    const [breeds,setBreeds] = useState([]);
    const [breedFilter,setBreedFilter] = useState("");
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
    const filteredBreeds = breeds.filter(breed => breed.toLowerCase().includes( breedFilter.toLowerCase()) )

    const dogCards = filteredBreeds.map((breed,index) => <DogCard breed= {breed} index= {index} key= {index} reRender= {reRender} /> )

    return (
        <>
            <DogNavBar></DogNavBar>
            <Row  className="p-breedsPage-filter flex">
                <Form.Group> 
                
                    <Form.Control  value = {breedFilter} onChange= {e=> setBreedFilter(e.target.value) } as="textarea" className= "p-actors-search" placeholder= "Breed filter" />
                </Form.Group>
                <Button onClick={reRenderPics} >Update</Button>
            </Row>
            <Row md={6} className="flex p-breedsPage-cards">
                {dogCards}
                {/* <DogCard breed= "hound"/> */}
            </Row>
            
        </>
    );
}


export default BreedsPage;