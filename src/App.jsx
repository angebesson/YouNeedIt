import { useEffect, useState } from 'react';
import { Products } from './components';
import {getAllProducts} from './services/products';
import { Header } from './components';

import './App.css';

function App() {
  //llamada a la api
 const [products, setProducts] = useState([]);
  useEffect(()=>{
    getAllProducts()
    .then((res)=>{
      if(res.status ===200){
        setProducts(res.data.products)
              }else{
        console.log("Error")
      }
      
    })
    .catch((err)=>{
      console.log(err)

    });
  },[]);

const [filters, setFilters] = useState({
  category: 'all',
  minPrice:0,
})

const filterProducts = (products)=>{
      return products.filter(product =>{
        return(
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
}

const filteredProducts = filterProducts(products)
  return (
    <>
    <Header changeFilters = {setFilters}/>
      <Products products = {filteredProducts}/>
    </>
  )
}

export default App
