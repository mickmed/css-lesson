import React, { useState } from 'react'
import styled from 'styled-components'
import './AlbumList.css'


const AlbumsList = (props) => {

    const [style, setStyle] = useState(true)
    const [itemId, setItemId] = useState(null)

    const setMode = (id) => {
        setStyle(!style)
        setItemId(id)
    }
    //this is the block for the styled component
    const AlbumBlock = styled.section`
        margin: 40px;
        border: 5px solid pink;
        `

    return (
        props.products.map((product, index) => {
            return <AlbumBlock //notice use of styled component tag here
                key={index}
                className={`img-wrapper ${itemId === index && style ? 'dark' : 'light'}`}
                onClick={() => setMode(index)}>
                <img src={`./img/${product.pic}`} className='album-pic' />
            </AlbumBlock>
        })
    )
}

export default AlbumsList

















// const McStyle = styled.section`
//     margin: 40px;
//     border: 5px solid pink;
//   `