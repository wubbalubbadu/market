import React from 'react'
import { styled } from '@mui/system';




function Modal(props) {
    
  return (
    <>
        <ModalBox></ModalBox>
    </>
  )
}

export default Modal


const ModalBox = styled('div') ({
    backgroundColor: "yellow",
    display: "flex",
    borderRadius: 5,
});

const ModalContainer = styled('div') ({

})