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
  Stack,
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
        <Grid container rowSpacing={2} sx={{ mt: '20px' }}>
          <Grid container xs={12} sx={{ bgcolor: 'white' }}>
            <Stack flexDirection="row" justifyContent="space-between" sx={{ alignItems: 'center' }}>
              <Typography sx={{ fontWeight: '800', fontSize: '24px' }}>
                Item
                &nbsp;
                {id}
              </Typography>
              <Button onClick={() => deleteInput(id)}>
                <Delete style={{ color: 'black' }} />
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={6} xs={12} sx={{ bgcolor: 'white' }}>
            <Stack flexDirection="row">
              <Typography>
                Title:
                &nbsp;
                &nbsp;
              </Typography>
              <TextField
                id="name-input"
                name="title"
                label="Required *"
                type="text"
                value={formValues[id - 1].title}
                onChange={handleInputChange}
                sx={{ width: '80%' }}
              />
            </Stack>
          </Grid>
          <Grid item lg={3} xs={6} sx={{ bgcolor: 'white' }}>
            <Stack flexDirection="row">
              <Typography>
                Category:
                &nbsp;
                &nbsp;
              </Typography>
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
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack flexDirection="row">
              <Typography>
                Price Range:
                &nbsp;
                &nbsp;
              </Typography>
              <Grid lg={3}>
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
              <Typography>
                &nbsp;
                to
                &nbsp;
              </Typography>
              <Grid item lg={3} xs={3}>
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
            </Stack>
          </Grid>
          <Grid container lg={8} xs={12} rowGap={0} sx={{ mt: '20px' }}>
            <Grid item lg={12}>
              <Typography>
                description:
                &nbsp;
                &nbsp;
              </Typography>
            </Grid>
            <Grid item lg={12} xs={12}>
              <TextField
                id="description-input"
                name="description"
                multiline
                rows={4}
                placeholder="my description blah blah"
                type="text"
                value={formValues[id - 1].description}
                onChange={handleInputChange}
                sx={{ width: '90%' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ mt: '30px' }} />
    </>
  );
}
export default Request;