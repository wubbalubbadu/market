import React from 'react';
import {
  Typography,
  Divider,
  Container,
  InputLabel,
  styled,
  Select,
  FormControl,
  MenuItem,
  TextField,
  Grid,
  Button,
} from '@mui/material';
import Delete from '@mui/icons-material/Delete';

const StyledForm = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  width: 200,
}));

function Request({
  id, handleInputChange, formValues, categories, deleteInput,
}) {
  categories = categories.map((x) => x.name);
  return (
    <>
      <Container justifyContent="center">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography>
              Item
              {id}
            </Typography>
            <Button onClick={() => deleteInput(id)}>
              <Delete style={{ color: 'black' }} />
            </Button>
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
              value={formValues[id - 1].title}
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
                  value={formValues[id - 1].category}
                  onChange={handleInputChange}
                >
                  {categories.map((item, i) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
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
              value={formValues[id - 1].low_price}
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
              value={formValues[id - 1].high_price}
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
              value={formValues[id - 1].description}
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