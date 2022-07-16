import React from 'react'
import { styled } from '@mui/system';


const ModalBox = styled('div') ({
    backgroundColor: "yellow",
    display: "flex",
    borderRadius: 5,
});


function Modal(props) {
    
  return (
    <>
        <ModalBox></ModalBox>
    </>
  )
}

export default Modal