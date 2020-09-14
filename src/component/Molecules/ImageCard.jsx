import React from 'react'
import PropTypes from 'prop-types'

const ImageCard = ({ largeImageURL, tags, pageURL }) => (
    //tarjeta la cual se muestran las imagenes
    <>
        <div className="column is-one-quarter-desktop is-half-tablet">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by2">
                        <img src={largeImageURL} alt={ tags} />
                    </figure>  
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item" href={pageURL} target="_blank">
                        Descargar
                    </a>
                </footer>
            </div>
        </div>
    </>
)

ImageCard.propTypes = {
    largeImageURL: PropTypes.string
}

export default ImageCard