import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Stack, Item, Autocomplete, TextField, Button, Tabs, Tab, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductList from './Sell/ProductList';
import RequestList from './Requests/RequestList';
import TabSwitch from './TabSwitch';
import SearchBar from './SearchBar';

function PostSection({ products, requests }) {
  const currTab = useSelector((state) => state.tabReducer.tab);
  // console.log('products at postsection', products)
  return (
    <PostSectDiv>
      <SearchBar>Search</SearchBar>
      <TabSwitch />
      {currTab === 0 ? (
        <ProductList products={products} />
      ) : (
        <RequestList requests={requests} />
      )}
    </PostSectDiv>
  );
}

export default PostSection;

const PostSectDiv = styled.div`
  background: white;
  width: 60%;
  border-radius: 5px;
  max-height: 80%;
  flex: 2;
  padding: 2%;
  padding-right: 0.5%;
`;
