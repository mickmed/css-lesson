
const AlbumsList = (props) => {

    return (
        props.products.map((product, index) => {
            return <div
                key={index}
                className={`img-wrapper`
                }>
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