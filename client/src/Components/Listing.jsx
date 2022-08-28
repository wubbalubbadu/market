import React from 'react';
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
  Button,
} from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import { fontSize } from '@mui/system';

const StyledForm = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  width: 200,
}));

function Listing({ id, handleInputChange, formValues, categories, deleteInput }) {
  categories = categories.map((x) => x.name);
  console.log(formValues);
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
                Price:
                &nbsp;
                &nbsp;
              </Typography>
              <TextField
                id="price-input"
                name="price"
                label="Required *"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                value={formValues[id - 1].price}
                onChange={handleInputChange}
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
          <Grid container lg={12} sx={{ alignItems: 'center' }}>
            <Grid lg={2}>
              <Typography>Condition:</Typography>
            </Grid>
            <Grid item lg={6} xs={12}>
              <FormControl>
                <RadioGroup
                  name="condition"
                  value={formValues[id - 1].condition}
                  onChange={handleInputChange}
                  row
                >
                  <FormControlLabel
                    key="brand-new"
                    value="Brand New"
                    control={<Radio size="small" />}
                    label="Brand New"
                  />
                  <FormControlLabel
                    key="Excellent"
                    value="Excellent"
                    control={<Radio size="small" />}
                    label="Excellent"
                  />
                  <FormControlLabel
                    key="Good"
                    value="Good"
                    control={<Radio size="small" />}
                    label="Good"
                  />
                  <FormControlLabel
                    key="Acceptable"
                    value="Acceptable"
                    control={<Radio size="small" />}
                    label="Acceptable"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
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
          <Grid container lg={4} xs={12} sx={{ mt: '20px' }}>
            <Typography>
              Photos:
              &nbsp;
              &nbsp;
            </Typography>
            <Grid item>
              <Stack direction="column" alignItems="center" spacing={2}>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                </label>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                </label>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                </label>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ mt: '30px' }} />
    </>
  );
}
export default Listing;
