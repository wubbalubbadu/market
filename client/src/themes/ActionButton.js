import {Button, styled} from "@mui/material";
import {theme} from "./Theme"


export const ActionButton = styled(Button)(({theme})=> ({
    backgroundColor: theme.palette.otherColor,
    color:"#888",
    margin:5,
    "&:hover":{
        backgroundColor:"lightblue",
    },
    "&:disabled":{
        backgroundColor:"gray",
        color:"white",
    }
}));