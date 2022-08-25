import React, { useState } from "react";
import {
  Typography,
  Divider,
  Container,
  InputLabel,
  styled,
  Select,
  FormControl,
  Stack,
  Input,
  Radio,
  FormControlLabel,
  RadioGroup,
  MenuItem,
  TextField,
  Grid,
} from "@mui/material";
import { theme } from "../themes/Theme";

const StyledForm = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  width: 200,
}));

function Request({ id, handleInputChange, formValues, categories }) {
  categories = categories.map((x) => x.name);
  return (
    <>
      <Container justifyContent="center">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography>Item {id}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Title: </Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="name-input"
              name="title"
              label="Required *"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>Category: </Typography>
          </Grid>
          <Grid item xs={4}>
            <StyledForm>
              <FormControl>
                <InputLabel id="category-select-label">Required *</InputLabel>
                <Select
                  name="category"
                  defaultValue=""
                  value={formValues.category}
                  onChange={handleInputChange}
                >
                  {categories.map((item, i) => {
                    return (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </StyledForm>
          </Grid>
          <Grid item xs={1}>
            <Typography>Price: </Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="price-input"
              name="low_price"
              label="Required *"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={formValues.low_price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={0}>
            <Typography>----</Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="price-input"
              name="high_price"
              label="Required *"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={formValues.high_price}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={4}>
            <Typography>description: </Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="description-input"
              name="description"
              multiline
              rows={4}
              placeholder="my description blah blah"
              type="text"
              value={formValues.description}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  );
}
export default Request;
