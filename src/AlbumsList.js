import React, { useState } from 'react'
import styled from 'styled-components'
// import './AlbumList.css'


const AlbumsList = (props) => {

    const [style, setStyle] = useState(true)
    const [itemId, setItemId] = useState(null)

    const setMode = (id) => {
        setStyle(!style)
        setItemId(id)
    }

    const AlbumBlock = styled.section`
        margin: 40px;
        border: 5px solid pink;
        `

    return (
        props.products.map((product, index) => {
            return <div
                key={index}
                className={`img-wrapper ${itemId === index && style ? 'dark' : 'light'}`
                }
                onClick={() => setMode(index)}>
                <img src={`./img/${product.pic}`} className='album-pic' />
            </div>
        })
    )


}

export default AlbumsList

















// const McStyle = styled.section`
//     margin: 40px;
//     border: 5px solid pink;
//   `