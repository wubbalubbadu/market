import React, { useState } from "react";
import {Button, Typography} from '@mui/material'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function IncrementDecrement(){
    const [count, setCount] = useState(0);
    const IncNum = () => {
      setCount(count + 1);
    };
    const DecNum = () => {
      if (count > 0) setCount(count - 1);
      else {
        setCount(0);
        alert("min limit reached");
      }
    };
    return (
        <div>
         <Typography>Number of Items</Typography>
            <div className="btn_div">
                <Button  color="secondary"  onClick={IncNum}>
                  <AddIcon />
                </Button>
                <Typography>{count}</Typography>
              <Button color="secondary"  onClick={DecNum}>
                <RemoveIcon />
              </Button>
            </div>
        </div>
    );
  };

 
export default IncrementDecrement;
