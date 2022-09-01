import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Button } from '../themes/Button';

import { fetchProducts } from '../redux/thunk/product';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const fetchbytitle = () => {
    dispatch(fetchProducts({ title: query }));
  };

  const keyDownHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(fetchProducts({ title: query }));
    }
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        placeholder="Feed me some keywords"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={keyDownHandler}
      />
      <Button id="submitsearch" onClick={fetchbytitle} sx={SummitButtonstyle}>
        Submit
      </Button>
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  background-color: white;
  padding: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5em;
  background: #333333;
  padding: 0.5em;
  border: 0.25em;
  border-radius: 5px;
  width: 40%;
  color: white;
`;

const SummitButtonstyle = {
  borderRadius: '5px',
  borderWidth: '0.1mm',
  color: '#333333',
  cursor: 'pointer',
  display: 'inline-block',
  margin: '0.5em',
  padding: '0.5em',
  textAlign: 'center',
  verticalAlign: 'baseline',
};
