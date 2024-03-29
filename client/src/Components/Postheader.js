import React from 'react';
import {
  styled, AppBar, Select, FormControl, MenuItem, InputLabel, Stack,
} from '@mui/material';

const StyledForm = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  width: 200,
}));

function PostHeader({
  method, handleMethodChange,
}) {
  return (
    <AppBar sx={{ display: 'inline', bgcolor: 'white', boxShadow: 0 }}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <StyledForm>
          <FormControl hiddenLabel="true">
            {/* <InputLabel id="post-or-request-label">Method</InputLabel> */}
            <Select
              labelId="post-or-request-label"
              id="post-or-request"
              value={method}
              onChange={handleMethodChange}
            >
              <MenuItem value="Post Your Items">Post Your Items</MenuItem>
              <MenuItem value="Request an Item">Request an Item</MenuItem>
            </Select>
          </FormControl>
        </StyledForm>

      </Stack>
    </AppBar>
  );
}

export default PostHeader;