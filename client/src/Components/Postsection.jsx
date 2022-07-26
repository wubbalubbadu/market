<<<<<<< HEAD
import React, {useState} from 'react'
import {theme} from "../themes/Theme";
import ProductList from './ProductList';

=======
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {theme} from "../themes/Theme";
import ProductList from './ProductList';
import {setProducts} from '../redux/actions/productsActions'

import axios from 'axios'
>>>>>>> main
import { Box, styled } from '@mui/material';

const SearchBar=styled("div")({
  backgroundColor:"white",
})


function PostSection() {
<<<<<<< HEAD
  const [products, setProducts] = useState(SAMPLE_PRODUCTS)
  console.log("testing",products)
=======

  const products = useSelector((state)=>state.productsReducer.products)
  const dispatch = useDispatch()
  const fetchProducts = async () => {
    const response = await axios
    .get('http://localhost:5000/api/products')
    .catch((err)=> {
      console.log(err)
    })
    dispatch(setProducts(response.data.products))
  }
  useEffect(()=>{
    fetchProducts()
  },[])
>>>>>>> main

  return (
    <Box bgcolor="pink" flex={2} padding={2}>
      <SearchBar>Search</SearchBar>
      <ProductList products={products} />  
<<<<<<< HEAD
      {/* passing in sample products into ProductList component */}
=======

>>>>>>> main
   </Box>
  )
}

const SAMPLE_PRODUCTS = [
  {
    title: "Hotpot Cooker",
    price: 50,
    description: "Amazing Hotpot Cooker at your hand, get it with 50 bucks and you can enjoy hotpot in your own kitchen!",
    images: {
      "public_id": "test/rsltmafcyek9v4fm7oid",
      "url": "https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg"
    },
    category: "cooking",
    condition: "used",
    checked: "True",
    seller: "userid1-juliachu",
  },
  {
    title: "Iron Curler",
    price: 5,
    description: "want the perfect curl? this is what you need",
    images: {
<<<<<<< HEAD
      public_id: "test/rsltmafcyek9v4fm7oid",
      url: "https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg"
=======
      "public_id": "test/rsltmafcyek9v4fm7oid",
      "url": "https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg"
>>>>>>> main
    },
    category: "Makeup",
    condition: "New",
    checked: "True",
    checked: "True",
    seller: "userid2-hayliewu",
}
]

export default PostSection