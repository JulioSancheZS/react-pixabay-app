import React from 'react'

const Sobre =() => {


    return(

        <div className="container mt-6" >
            <h1 className="title">Sobre este proyecto</h1>
            <p className="subtitle">Este es mi primer proyecto en ReactJS, el cual obtiene imágenes de la API gratuita de PIXABAY</p>
            <p>Para este proyecto he usado: </p>
            <p>ReactJS</p>
            <p>Hooks</p>
            <p>react-router-dom</p>
            <p>Bulma Framework</p>
            <p>Atomic Design</p>
            <a className="is-primary" href="https://github.com/JulioSancheZS/react-pixabay-app">Repositorio en github</a>
        </div>
    )
}

export default Sobre