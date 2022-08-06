import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import axios from "axios";

function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const searchbytitle = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/products?title[regex]=" + query
    );
    dispatch(setProducts(response.data.products));
    // console.log("click submitsearch, keyword", { query });
  };

  return (
    <SearchBox>
      <SearchInput
        placeholder="Feed me some keywords"
        onChange={(e) => setQuery(e.target.value)}
      ></SearchInput>
      <SummitButton id="submitsearch" onClick={searchbytitle}>
        Submit
      </SummitButton>
    </SearchBox>
  );
}

export default SearchBar;

const SearchBox = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  background-color: white;
  padding: 2px;
`;

const SearchInput = styled.input`
  padding: 0.5em;
  background: papayawhip;
  border: 0.25em;
  border-radius: 5px;
  width: 40%;
`;

const SummitButton = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 5px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
  vertical-align: baseline;
`;
