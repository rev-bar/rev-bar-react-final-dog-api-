

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './DogCard.css';

function DogCard(props) {
 
    // const imageByBreed ="https:\/\/images.dog.ceo\/breeds\/affenpinscher\/n02110627_12431.jpg"; 

    const {breed} = props;
  
    const [imageByBreed,setImageByBreed] = useState("");


    useEffect ( ()=> {
        axios.get("https://dog.ceo/api/breed/" +breed+"/images/random").then( res=>{
        console.log (res.data.message);
        setImageByBreed(res.data.message)
    })
    },[])

    return (
        <div> 
                <Card xs={12} spacing={3} className="c-dogCard">
                    <Card.Body className="c-dogCard-body" >
                        <p className="c-dogCard-text">{breed}</p>
                        <Card.Img variant="top"  src={imageByBreed} className="c-dogCard-pic"></Card.Img>  
                    </Card.Body>
                </Card>  
        </div>
    
        
    );
}

export default DogCard;




