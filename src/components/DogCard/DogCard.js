

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './DogCard.css';

function DogCard(props) {
 
    const {breed, reRender} = props;
  
    const [imageByBreed,setImageByBreed] = useState("");
    

    useEffect ( ()=> {
        axios.get("https://dog.ceo/api/breed/" +breed+"/images/random").then( res=>{
        setImageByBreed(res.data.message)
    })
    },[reRender])

    return (

                <Card m={4} spacing={3} className="c-dogCard">
                    <Card.Body className="c-dogCard-body" >
                        <p className="c-dogCard-text">{breed}</p>
                        <a href="#/breeds/a">
                            <Card.Img variant="top"  src={imageByBreed} className="c-dogCard-pic"></Card.Img>  
                        </a>
                    </Card.Body>
                </Card>  
        
    
        
    );
}

export default DogCard;




