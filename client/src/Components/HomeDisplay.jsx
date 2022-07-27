import React ,{useEffect}from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setProducts} from '../redux/actions/productsActions'
import Postsection from './Postsection';
import Sidebar from './Sidebar';
import axios from 'axios'
import {Box, Stack } from '@mui/material'


function HomeDisplay() {

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

  return (
          
    <Box bgcolor="skyblue" padding={2}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Sidebar setProducts={setProducts} />
        <Postsection products={products} />
      </Stack>
    </Box>
  )

}

export default HomeDisplay