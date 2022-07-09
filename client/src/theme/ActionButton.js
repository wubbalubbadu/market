import {Button, styled, Typography} from "@mui/material";


export const ActionButton = styled(Button) ({
    backgroundColor: "skyblue",
    color:"#888",
    margin:5,
    "&:hover":{
        backgroundColor:"lightblue",
    },
    "&:disabled":{
        backgroundColor:"gray",
        color:"white",
    }
})