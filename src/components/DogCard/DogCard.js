

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './DogCard.css';

function DogCard(props) {
 
    const {breed, reRender,index} = props;
    const [imageByBreed,setImageByBreed] = useState("");
    

    useEffect ( ()=> {
        axios.get("https://dog.ceo/api/breed/" +breed+"/images/random").then( res=>{
        setImageByBreed(res.data.message)
    })
    },[reRender])


    let breedURL = "#/breeds/"+breed;
    // console.log (breedURL); 

    return (

                <Card md={6} spacing={3} className="c-dogCard">
                    <Card.Body >
                        <p className="c-dogCard-text">{breed}</p>
                  
                    </Card.Body  >
                  
                            <a href={breedURL}>
                                <Card.Img variant="top"  src={imageByBreed} className="c-dogCard-pic"></Card.Img>  
                            </a>
                     
                </Card>  
        
    
        
    );
}

export default DogCard;




