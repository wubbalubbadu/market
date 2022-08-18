import React from "react";
import ProductList from "./Sell/ProductList";
import TabSwitch from "./TabSwitch";
import SearchBar from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";

import styled from "styled-components";
import { Grid, Stack, Item, Autocomplete, TextField, Button, Tabs, Tab, Divider } from "@mui/material";
import { TabUnstyled } from '@mui/base';

function PostSection({ products }) {
  console.log('products at postsection', products)
  return (
    <PostSectDiv>
      <Stack direction="column" spacing={1} divider={<Divider flexItem />}
        sx={{ mb: 1 }}
      >
        <Stack direction="row" alignItems='center' spacing={1}
          sx={{
            p: '2px',
          }}
        >
          <Autocomplete
            options={[{label: 'a'}, {label: 'b'}, {label: 'c'}]}
            sx={{
              '& input': {
                height: '4px',
              },
              width: '200px',
              '& button': {
                transform: 'none'
              }
            }}
            popupIcon={<SearchIcon />}
            freeSolo
            forcePopupIcon={true}
            renderInput={(params) => <TextField {...params}  /> }
          />
          <Button variant="outlined">Submit</Button>
        </Stack>
        <Grid
          container
          sx={{
            backgroundColor: '#FCC5CC',
            borderRadius: '30px',
          }}
        >
          <Tabs variant="fullWidth" value="product" TabIndicatorProps={{style: { display: 'none' }}}>
            <Tab value="product" label="Sell"
              sx={{ p: 0, borderRadius: '30px' }} />
            <Tab value="request" label="Request"
              sx={{ p: 0, borderRadius: '30px' }} />
          </Tabs>
        </Grid>
      </Stack>
      <ProductList products={products} />
      {/* {currentTab === 'sell' ? <ProductList products={products} /> : <RequestList />} */}
    </PostSectDiv>
  );
}

export default PostSection;

const PostSectDiv = styled.div`
  background: #FDD8DD;
  width: 60%;
  border-radius: 5px;
  max-height: 80%;
  flex: 2;
  padding: 2%;
`;
