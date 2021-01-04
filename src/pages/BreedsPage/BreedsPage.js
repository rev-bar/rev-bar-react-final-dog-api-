import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DogCard from '../../components/DogCard/DogCard';

function BreedsPage() {

    const [imageByBreed,setImageByBreed] = useState("");
    

    useEffect ( ()=> {
        axios.get("https://dog.ceo/api/breed/hound/images/random").then( res=>{
        console.log (res.data.message);
        setImageByBreed(res.data.message)
        console.log (imageByBreed);
    })
    },[])

    return (
        <div>
            <DogCard imageByBreed= {imageByBreed}/>
        </div>
    );
}

export default BreedsPage;