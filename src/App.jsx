import { useEffect, useState } from 'react';
import { Products } from './components';
import {getAllProducts} from './services/products';
import { Header } from './components';
import { useFilters } from './hooks/useFilters';
import { Footer } from './components/Footer/Footer';
import {IS_DEVELOPMENT} from './config'
import './App.css';


function App() {

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


const {filters,filterProducts,setFilters} = useFilters()
const filteredProducts = filterProducts(products)
  return (
    <>
    <Header changeFilters = {setFilters}/>
      <Products products = {filteredProducts}/>
      {IS_DEVELOPMENT && <Footer filters ={filters}/>}
    </>
  )
}
export default App
