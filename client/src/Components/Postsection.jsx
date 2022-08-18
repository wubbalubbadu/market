import React from "react";
import ProductList from "./Sell/ProductList";
import RequestList from "./Requests/RequestList";
import TabSwitch from "./TabSwitch";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

import styled from "styled-components";

function PostSection({ products, requests }) {
  const currTab = useSelector((state) => state.tabReducer.tab);
  // console.log('products at postsection', products)
function PostSection({ products }) {
  return (
    <PostSectDiv>
      <SearchBar>Search</SearchBar>
      <TabSwitch></TabSwitch>
      {currTab === 0 ? (
        <ProductList products={products} />
      ) : (
        <RequestList requests={requests} />
      )}
    </PostSectDiv>
  );
}}

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
