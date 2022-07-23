import React from 'react'
import Typography from '@mui/material/Typography';
import {Modal, Stack,Box, styled, Button}  from '@mui/material';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import {Link} from 'react-router-dom'
const BasicModal = ({open, onClose, product}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    padding:10,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
            <Box sx={imagediv}> text</Box>
            <Box justifyContent="flex-start" sx={PDheadingDiv}>
                <Typography id="modal-modal-title" fontSize={30} fontWeight="bold"> {product.title} </Typography>
                <Typography fontSize={24} fontWeight="light" sx={{textDecoration: 'underline'}}> {product.category} </Typography>
                <Typography fontSize={28} sx={{mt:5, mb:5}}> ${product.price}  </Typography>
                <Box>
                    <Typography> {product.seller} </Typography>
                </Box>
                <ActionButtonDiv>
                    <Button sx={buttonstyle} component={Link} to="/message">
                    Contact Seller</Button>
                    <Button sx={buttonstyle} 
                    // onClick={()=> addLoves(product)}
                    >Add to Watchings</Button>
                </ActionButtonDiv>
            </Box>
        </Stack>

        <Box padding={2}>
            <Stack direction="row" justifyContent="flex-start" spacing={5}>
                <Typography fontWeight="bold" fontSize={24}> Condition:</Typography>
                <Typography fontSize={24} >{product.condition} </Typography>
            </Stack>
        </Box>

        <Box padding={2}>
            <Typography fontWeight="bold" fontSize={24}> Description:</Typography>
            <Typography fontSize={24}>{product.description} </Typography>
        </Box>
      </Box>
    </Modal>
  )
}

export default BasicModal

const PDheadingDiv = {
    width:450,
    height:480,
}

const imagediv = {
    bgcolor:'black',
    width: 700,
    height:480,
    borderRadius: 5,
}


const ActionButtonDiv =styled('div')({
    backgroundColor:"yellow",
  })

const buttonstyle = {
  maxWidth: '160px',
  maxHeight: '60px',
  minWidth: '160px',
  minHeight: '60px',
  bgcolor: "black",
  '&:hover': {
    background: "#FECB58",
  },
  mr:5,
}

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: black,
  padding: 12px 24px;
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  maxWidth: '30px';
  maxHeight: '30px';
  minWidth: '30px';
  minHeight: '30px';

  &:hover {
    background-color: #FECB58
  }
`;