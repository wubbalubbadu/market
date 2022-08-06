import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Modal, Stack, Box, Button } from "@mui/material";
import styled from "styled-components";

import { Link } from "react-router-dom";

const ProductModal = ({ open, onClose, product }) => {
  const [SelectedImg, setSelectedImg] = useState(SAMPLEIMAGES[0]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    height: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    padding: 10,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Imagediv>
            <ImgsContainer>
              {SAMPLEIMAGES.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="alt1"
                  onClick={() => setSelectedImg(img)}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    margin: "5px",
                    marginTop: "15px",
                    padding: "5px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                />
              ))}
            </ImgsContainer>
            <img
              src={SelectedImg}
              alt="selected"
              style={{
                width: "70%",
                height: "90%",
                margin: "20px",
                borderRadius: "5px",
                objectFit: "cover",
                boxShadow:
                  "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              }}
            />
          </Imagediv>
          <Box justifyContent="flex-start" sx={PDheadingDiv}>
            <Typography id="modal-modal-title" fontSize={30} fontWeight="bold">
              {" "}
              {product.title}{" "}
            </Typography>
            <Typography
              fontSize={24}
              fontWeight="light"
              sx={{ textDecoration: "underline" }}
            >
              {" "}
              {product.category}{" "}
            </Typography>
            <Typography fontSize={28} sx={{ mt: 5, mb: 5 }}>
              {" "}
              ${product.price}{" "}
            </Typography>
            <Box>
              <Typography> {product.seller} </Typography>
            </Box>
            <ActionButtonDiv>
              <Button sx={buttonstyle} component={Link} to="/message">
                Contact Seller
              </Button>
              <Button sx={buttonstyle}>Add to Watchings</Button>
            </ActionButtonDiv>
          </Box>
        </Stack>

        <Box padding={2}>
          <Stack direction="row" justifyContent="flex-start" spacing={5}>
            <Typography fontWeight="bold" fontSize={24}>
              {" "}
              Condition:
            </Typography>
            <Typography fontSize={24}>{product.condition} </Typography>
          </Stack>
        </Box>

        <Box padding={2}>
          <Typography fontWeight="bold" fontSize={24}>
            {" "}
            Description:
          </Typography>
          <Typography fontSize={24}>{product.description} </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductModal;

const PDheadingDiv = {
  width: 450,
  height: 480,
};

const Imagediv = styled.div`
  background: white;
  width: 60%;
  border-radius: 5px;
  display: flex;
  flex-direction: rows;
  max-height: 450px;
`;

const ImgsContainer = styled.div`
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: "20%";
`;

const ActionButtonDiv = styled.div`
  background-color: "yellow";
`;

const buttonstyle = {
  maxWidth: "160px",
  maxHeight: "60px",
  minWidth: "160px",
  minHeight: "60px",
  bgcolor: "black",
  "&:hover": {
    background: "#FECB58",
  },
  mr: 5,
};

const SAMPLEIMAGES = [
  "https://images.unsplash.com/photo-1658487476847-a180f98870d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
  "https://images.unsplash.com/photo-1658755362781-02899c3569ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1658756832548-f959ddf9004d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
];
