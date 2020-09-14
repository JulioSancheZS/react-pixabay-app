import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ImagensGrid from '../Organisms/ImagensGrid';
import Form from '../Organisms/Form'

const apiKey = "7683956-909e219c3967c8e6803f3b67d";

const Imagenes = () => {

    //estado inicial para el array de foto
    const estadoInicial = {
        imgs: []
    }
    //hooks
    const [imgs, setImg] = useState([estadoInicial]);
    const [text, setText] = useState(''); // estado para buscar en el input y obtener el valor
    const [search, setSearch] = useState(); // estado para buscar del boton

    // cambia el texto
    const handleChange = e =>{
        setText(e.target.value)
    } 
   //este metodo es para poder hacer la busqueda en el formulario
    const Buscar= (e)=>{
        setSearch(text) 
        e.preventDefault(); // esto es para que el navegador no recargue la pagina
    }

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${apiKey}&q=${search}&image_type=photo`)
            .then(resp => {
                //console.log(resp.data.hits)
                setImg(resp.data.hits)
            }).catch(err => {
                console.log(err)
            })
    }, [search]);
    
    return (
        
        <div className="container">
            {
                    //imgs.map(i => <li key={i.id}>{i.tags}</li>)
                <>    
                    <Form Buscar={Buscar.bind(this)} handleChange={handleChange.bind(this)} text={text}/>
                    <ImagensGrid  imgs={imgs}/>
                </>
            }
        </div>
    )

}

export default Imagenes