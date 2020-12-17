import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFetchGifs(category);

    /* const [images, setImages] = useState([])
    //Ejecutar funcion solo cuando se renderiza el componente por primera vez
    useEffect(() => {
       getGifs(category).then(imgs=>
        setImages(imgs))
    }, [category]) */

    return (
        <>
          <h3>{category}</h3> 
          {loading? <p>Loading</p> : null}
        <div className="card-grid">  
            {
                images.map(img =>
                    (
                        <GifGridItem
                         key = {img.id}
                         {...img} />
                    ))
            }
        </div>
        </>
    )
}
