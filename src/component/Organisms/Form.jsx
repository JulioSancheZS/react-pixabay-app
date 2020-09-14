import React from 'react'

const Form = (prop) => (

    <>
        <form onSubmit={prop.Buscar}>
            <div className="columns is-mobile mt-6">
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            onChange={prop.handleChange} 
                            value={prop.text} 
                            className="input is-primary" 
                            type="text" 
                            placeholder="Busqueda" 
                            />                         
                    </div>
                </div>
                <div className="control">
                    <button className="button is-primary">Buscar</button>
                </div>
            </div>
        </form>
    </>
)

export default Form