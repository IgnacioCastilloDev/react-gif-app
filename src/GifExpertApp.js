import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Ejemplo } from './components/Ejemplo';
import { GifGrid } from './components/GifGrid';



function GifExpertApp() {

    const [categories, setCategories] = useState(['Goku']);


    /*     const handleAdd =()=>{
        setCategories([...categories,"Doraemon"])
        setCategories(cats=>[...cats,'HunterXhunter']) 
    } */

    return (
        <React.Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>

            

        </React.Fragment>

    )
}

export default GifExpertApp;



