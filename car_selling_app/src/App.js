
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
//import Card from './Components/Cards/Card';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';


function App() {

  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [cardsPerPage, setCardsPerPage] = useState(6);

  useEffect(() =>{
    fetch('carApp.json')
    .then((res) => res.json())
    .then((res) => {
      setProduct(res);
       console.log(product.length)
    });
  },[]);

  const lastPageIndex = currentPage * cardsPerPage;
  const firstPageIndex =  lastPageIndex - cardsPerPage;
  const currCardPage = product.slice(firstPageIndex,lastPageIndex);
  console.log(currCardPage)
  

  return (
    <div className="App">
      <Header product={product} />

      <Home product={currCardPage}/>        

        <Footer 
          totalPages={product.length} 
          cardsPerPage={cardsPerPage} 
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} 
          />
        
    </div>
  );
}

export default App;
