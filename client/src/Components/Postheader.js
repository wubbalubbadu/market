import React, {useState} from 'react'
import {Typography,Button, styled, AppBar, Fab, Box, Select, FormControl, MenuItem, InputLabel, Stack} from '@mui/material'
import {ThemeProvider } from "@material-ui/core/styles";
import {theme} from "../themes/Theme"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const StyledForm = styled(FormControl)(({theme}) => ({
    margin: theme.spacing(1),
    width: 200,
  }));
  
  
function PostHeader({arr, addInput, method, handleMethodChange}){


    return  (
        <ThemeProvider theme={theme}>
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
               
                
                </Stack>
          </AppBar>
        </ThemeProvider>
      )
}

export default PostHeader