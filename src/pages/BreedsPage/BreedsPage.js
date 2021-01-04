import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DogCard from '../../components/DogCard/DogCard';

function BreedsPage() {

  const breeds = ["affenpinscher","african"];


    
    //prepering data for render:

    const dogCards = breeds.map((breed,index) => <DogCard breed= {breed}
                                                    key= {index}
                                                    breed= {breed}  
    
                                                />  )

    return (
        <div>
            {dogCards}
        </div>
    );
}


export default BreedsPage;