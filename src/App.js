import './App.css'
import products from './Data'
import Header from './Header/Header'
import AlbumsList from './AlbumList/AlbumsList'


function App() {

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AlbumsList products={products} />
      </div>
    </div>
  );
}

export default App


