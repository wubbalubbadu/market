import React, {useState} from 'react'
import {Typography,Button, styled, AppBar, Box, Select, FormControl, MenuItem, InputLabel, Stack} from '@mui/material'
import {ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../themes/Theme"
import IncrementDecrement from './IncrementDecrement'

const StyledForm = styled(FormControl)(({theme}) => ({
    margin: theme.spacing(1),
    width: 200,
  
  }));
  
  
function PostHeader(){

    const [method, setMethod] = useState('Post Your Items')
    const handleChange = (event) => {
        setMethod(event.target.value)
    }
    return  (
        <ThemeProvider theme={theme}>
          <AppBar sx={{ display: 'inline' }} >
          <Stack direction="row">
            <StyledForm >
            <FormControl>
                <InputLabel id="post-or-request-label" >Method</InputLabel>
                <Select
                    labelId="post-or-request-label"
                    id="post-or-request"
                    value={method}
                    onChange={handleChange}
                >
                    <MenuItem value={'Post Your Items'}>Post Your Items</MenuItem>
                    <MenuItem value={'Request an Item'}>Request an Item</MenuItem>
                </Select>
                </FormControl>
                </StyledForm>
                <IncrementDecrement/>
                <Button sx={{width: 150} }
                    // component={Link}
                    // to="/post_request_items"
                    variant="contained" 
                    color="secondary" 
                >  
                  <Typography > POST </Typography>
                </Button>
                </Stack>
          </AppBar>
        </ThemeProvider>
      )
}

export default PostHeader