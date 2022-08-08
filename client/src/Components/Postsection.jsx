import React from "react";
import ProductList from "../Sell/ProductList";
import TabSwitch from "./TabSwitch";
import SearchBar from "./SearchBar";

import styled from "styled-components";

function PostSection({ products }) {
  return (
    <PostSectDiv>
      <SearchBar>Search</SearchBar>
      <TabSwitch>TabSwitch</TabSwitch>
      <ProductList products={products} />
      {/* {currentTab === 'sell' ? <ProductList products={products} /> : <RequestList />} */}
    </PostSectDiv>
  );
}

export default PostSection;

const PostSectDiv = styled.div`
  background: pink;
  width: 60%;
  border-radius: 5px;
  max-height: 80%;
  flex: 2;
  padding: 2%;
`;
