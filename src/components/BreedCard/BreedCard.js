

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './BreedCard.css';

function BreedCard(props) {
 
    const {imgURL} = props;
  
    // const [imageByBreed,setImageByBreed] = useState("");
    

     return (
        
                <Card m={4} spacing={3} className="c-breedCard">
                    <Card.Body className="c-breedCard-body" >
                        <Card.Img variant="top"  src={imgURL} className="c-dogCard-pic"></Card.Img> 
                </Card.Body>
                </Card>  
        
    
        
    );
}

export default BreedCard;




