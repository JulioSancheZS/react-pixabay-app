import React from 'react'
import ImageCard from '../Molecules/ImageCard'

const ImagensGrid = (props) => {

    return (

        //aqui ira la gria con todas las imagenes cargadas
        <div className="columns is-multiline">
            {
                props.imgs.length > 0 && props.imgs.map((imgs) => {

                    return (  
                        <ImageCard 
                         key={imgs.id}
                         largeImageURL={imgs.largeImageURL}
                         tags={imgs.tags}
                         pageURL={imgs.pageURL}
                        />              
                    )
                })
                /* imgs.map(c => (<ImageCard 
                     key={c.id}
                     id={c.id}
                     imageURL={c.largeImageURL}
                 />
                 ))        */
            }

        </div>
    )
}

export default ImagensGrid 