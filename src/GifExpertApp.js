import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';

const GifExpertApp = ({Titulo = 'Gif Expert App'}) => {
    
    const [categories, setCategories] = useState (['baymax']);
        
    // const handleAdd = () => {
    //     setCategories( cats => [...cats,'HunterxHunter']);
    // };
    
    return (
        
       
        <>
            <h1 className = "animate__animated animate__bounce animate__repeat-3"> { Titulo } </h1>
            <hr />

            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))

                }
            </ol>
        </>
    );


}

export default GifExpertApp;