import React, { useState, useEffect } from "react";
import PostHeader from "../Components/Postheader";
import Listing from "../Components/Listing";
import { Box, Stack, Fab, Paper, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../redux/actions/productsActions";
import { getCategories } from "../redux/actions/categoryActions";
import AddIcon from "@mui/icons-material/Add";

function Listings() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const user = JSON.parse(localStorage.getItem("profile"));
  const defaultValues = {
    title: "",
    price: 0,
    description: "",
    condition: "",
    images: {
      public_id: "test/rsltmafcyek9v4fm7oid",
      url: "https://res.cloudinary.com/dtoiffmee/image/upload/v1657489616/test/rsltmafcyek9v4fm7oid.jpg",
    },
    category: "",
  };

  const [formValues, setFormValues] = useState([defaultValues]);
  const [arr, setArr] = useState([0]);
  const navigate = useNavigate();
  const addInput = () => {
    setArr((s) => {
      return [...s, s.length];
    });
    setFormValues((s) => {
      return [...s, defaultValues];
    });
  };

  //  const categories = useSelector((state) => state.categories);
  //  console.log(categories)

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formValues.map((product, id) => {
        dispatch(createProduct({ ...product, seller: user?.result?.name }));
      });
      alert("successful");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (i) => (e) => {
    let { name, value } = e.target;

    setFormValues((s) =>
      s.map((item, id) => {
        return id === i ? { ...item, [name]: value } : item;
      })
    );
    console.log(formValues);
  };

  return (
    <div>
      <Box>
        <form onSubmit={handleSubmit}>
          {arr.map((item, i) => {
            return (
              <Listing
                key={i}
                id={i + 1}
                formValues={formValues}
                categories={categories}
                handleInputChange={handleInputChange(i)}
              />
            );
          })}

          <div>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Typography>Number of Items</Typography>

              <Typography>{arr.length}</Typography>
              <Fab color="secondary" onClick={addInput}>
                <AddIcon />
              </Fab>
            </Stack>
          </div>
          <Button sx={{ width: 150 }} variant="contained" type="submit">
            <Typography> Sell </Typography>
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Listings;
