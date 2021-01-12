import './App.css'
import products from './Data'
import Header from './Header/Header'
import AlbumsList from './AlbumList/AlbumsList'

function App() {

  //here we set an inline style using an object literal
  const style={
    backgroundColor:'green'
  }

  return (
    <div className="App">
      <Header />
      //set style here
      <div className="container" style={style}>
        <AlbumsList products={products} />
      </div>
    </div>
  )
}

export default App


