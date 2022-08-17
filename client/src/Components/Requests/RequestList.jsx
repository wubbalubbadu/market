import React from "react";
import Request from "./Request";
import { styled } from "@mui/material";

//this styled div should also take care of grid styling
//to make each card responsive to screen sizes
const Wrapperstyle = styled("div")({
  backgroundColor: "white",
  padding: 1,
  display: "flex",
  flexWrap: "wrap",
  alignContent: "flex-start",
  marginRight: 0,
  paddingRight: 0.25,
});

function RequestList(props) {
  const { requests } = props; //deconstruction
  // console.log("printing requests", requests);
  return (
    <Wrapperstyle>
      {/* map each of the product into a Product component */}
      {requests.map((request) => {
        return <Request key={request._id} request={request} />;
      })}
    </Wrapperstyle>
  );
}

export default RequestList;
