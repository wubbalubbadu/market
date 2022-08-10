import React from "react";
import Product from "./Product";
import { styled } from "@mui/material";

//this styled div should also take care of grid styling
//to make each card responsive to screen sizes
const Wrapperstyle = styled("div")({
  backgroundColor: "blue",
  padding: 2,
  display: "inline-flex",
});

function ProductList(props) {
  const { requests } = props; //deconstruction

  return (
    <Wrapperstyle>
      {/* map each of the product into a Product component */}
      {requests.map((request) => {
        return <Product key={request._id} request={request} />;
      })}
    </Wrapperstyle>
  );
}

export default ProductList;
