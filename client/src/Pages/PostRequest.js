import React,{useState} from 'react'
import PostHeader from '../Components/Postheader'
import Listing from '../Components/Listing'
import {Box, Stack, Paper, Button, Typography} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {createProduct } from '../redux/actions/productsActions'
import {getCategories } from '../redux/actions/categoryActions'

function PostRequest() {
  
  const user = JSON.parse(localStorage.getItem('profile'));
  const defaultValues = {
    title: "",
    price: 0,
    description: "",
    condition: "",
    images: {
      public_id: "test/rsltmafcyek9v4fm7oid",
      url: "https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg",
    },
    category: ""
  };
  
  const [formValues, setFormValues] = useState([defaultValues]);
  const [arr, setArr] = useState([0]);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        s.length
      ];
      
    });
    setFormValues(s => {
      return [
        ...s,
        defaultValues
      ]
    })
  };

//  const categories = useSelector((state) => state.categories);
//  console.log(categories)

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    formValues.map((product, id) => {
      dispatch(createProduct({...product, seller: user?.result?.name}))

    })
    alert('successful')
    setTimeout(()=> {
      navigate('/')
    }, 1000)
    
    
  } catch (err) {
    console.log(err);
  }
};

const handleInputChange = i => (e) => {
  
  let { name, value } = e.target;

  setFormValues(s => s.map((item, id) => {
    return (id === i? {...item, [name]: value} : item)
  })
)
  console.log(formValues)
};



  const [method, setMethod] = useState('Post Your Items')
  const handleMethodChange = (event) => {
      setMethod(event.target.value)
  }

  if (!user?.result?.name) {
    setTimeout(() => {
      navigate('/')
    }, 1000)
    return (
      <h1>please sign in</h1>
    )
  }

  else {
      return (
      <div>
        <Box >
        <Stack spacing = {10}>
  
          <PostHeader arr={arr} addInput={addInput} method = {method} handleMethodChange={handleMethodChange} key={1}/>
          {method === 'Post Your Items' ? <form onSubmit={handleSubmit}>
         { arr.map((item, i) => {
          return  <Listing key={i} id={i+1} formValues={formValues} handleInputChange={handleInputChange(i)}/>
         })
         }
          
          <Button sx={{width: 150} }
                      variant="contained" 
                      type='submit'>  
                    <Typography > POST </Typography>
                  </Button>
          </form> : <h1>request</h1>}
   
          </Stack>
        </Box>
      </div>
      
    )
}
  
}

export default PostRequest