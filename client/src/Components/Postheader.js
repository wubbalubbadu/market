import React, {useState} from 'react'
import {Typography,Button, styled, AppBar, Fab, Box, Select, FormControl, MenuItem, InputLabel, Stack} from '@mui/material'
import {theme} from "../themes/Theme"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const StyledForm = styled(FormControl)(({theme}) => ({
    margin: theme.spacing(1),
    width: 200,
  }));
  
  
function PostHeader({arr, addInput, method, handleMethodChange}){


    return  (
      <>
          <AppBar sx={{ display: 'inline' }} >
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <StyledForm >

            <FormControl>
                <InputLabel id="post-or-request-label" >Method</InputLabel>
                <Select
                    labelId="post-or-request-label"
                    id="post-or-request"
                    value={method}
                    onChange={handleMethodChange}
                >
                    <MenuItem value={'Post Your Items'}>Post Your Items</MenuItem>
                    <MenuItem value={'Request an Item'}>Request an Item</MenuItem>
                </Select>
                </FormControl>
                </StyledForm>
                <div>
                  <Stack direction="row" justifyContent="space-between" spacing={2}>
                    <Typography>Number of Items</Typography>
  
                      <Typography>{arr.length}</Typography>
                      <Fab color="secondary"  onClick={addInput}>
                      <AddIcon />
                    </Fab>
                  </Stack>
              </div>
                
                </Stack>
          </AppBar>
        </>
      )
}

export default PostHeader