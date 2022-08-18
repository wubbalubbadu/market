import React,{useState, useEffect} from 'react'
import Request from '../Components/Request'
import {Box, Stack, Fab ,Paper, Button, Typography} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {createRequest } from '../redux/actions/requestsActions'
import {getCategories } from '../redux/actions/categoryActions'
import AddIcon from '@material-ui/icons/Add';

function Requests() {

  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
   
  }, []);
  
  const user = JSON.parse(localStorage.getItem('profile'));

  const defaultValues = {
    title: "",
    low_price: 0,
    high_price: 1,
    description: "",
    category: ""
  };
  
  const [formValues, setFormValues] = useState([defaultValues]);
  const [arr, setArr] = useState([0]);
  const navigate = useNavigate()
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
  console.log(formValues)
  try {
    
    formValues.map((request, id) => {
      dispatch(createRequest({...request, seller: user?.result?.name}))

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


      return (
      <div>
        <Box >
        <form onSubmit={handleSubmit}>
         { arr.map((item, i) => {
          return  <Request key={i} id={i+1} formValues={formValues} categories={categories} handleInputChange={handleInputChange(i)}/>
         })
         }
          
          
                  <div>
                  <Stack direction="row" justifyContent="space-between" spacing={2}>
                    <Typography>Number of Items</Typography>
  
                      <Typography>{arr.length}</Typography>
                      <Fab color="secondary"  onClick={addInput}>
                      <AddIcon />
                      </Fab>
        
                  </Stack>
              </div>
              <Button sx={{width: 150} }
                      variant="contained" 
                      type='submit'>  
                    <Typography > Request </Typography>
                  </Button>
          </form> 
    
        </Box>
      </div>
      
    )
}
  


export default Requests