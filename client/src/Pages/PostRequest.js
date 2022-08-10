import React,{useState} from 'react'
import PostHeader from '../Components/Postheader'
import Listing from '../Components/Listing'
import {Box, Stack, Paper, Button, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

function PostRequest() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [arr, setArr] = useState([0]);
  const navigate = useNavigate()
  const addInput = () => {
    setArr(s => {
      return [
        ...s,
        s.length
      ];
      
    });
  };

let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log('haylie')
    
  } catch (err) {
    console.log(err);
  }
};

const defaultValues = {
  title: "",
  price: 0,
  description: "",
  condition: "",
  photos: {},
  category: ""
};

const [formValues, setFormValues] = useState(defaultValues);
    
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
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
          return  <Listing key={i} id={i+1} formValues={formValues} handleInputChange={handleInputChange}/>
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