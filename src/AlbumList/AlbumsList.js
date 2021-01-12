import React, { useState } from 'react'
import './AlbumList.css'

const AlbumsList = (props) => {

    return (
        props.products.map((product, index) => {
            return <div
                key={index}
                className={`img-wrapper`}
                >
                <img src={`./img/${product.pic}`} className='album-pic' />
            </div>
        })
    )
}

export default AlbumsList
















