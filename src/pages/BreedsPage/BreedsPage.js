import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import DogCard from '../../components/DogCard/DogCard';
import DogNavBar from '../../components/NavBar/NavBar';
import SearchBox from '../../components/SearchBox/SearchBox';

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
            <Row m={6} className="flex">
                <Form.Group> 
                    <Form.Control  value = {breedFilter} onChange= {e=> setBreedFilter(e.target.value) } as="textarea" className= "p-actors-search" placeholder= "Search actor" />
                </Form.Group>
                <Button onClick={reRenderPics} >Update</Button>
            </Row>
            <Row m={6} className="flex">
                {dogCards}
            </Row>
            
        </>
    );
}


export default BreedsPage;