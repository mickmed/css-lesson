import './App.css';
import products from './Data'
import Header from './Header'
import AlbumsList from './AlbumsList'


function App() {


  const style={
    // backgroundColor:'green',
  
  }
  return (
    <div className="App">
      <Header />
      <div className="container" style={style}>
        <AlbumsList products={products} />
      </div>
    </div>
  );
}

export default App;


