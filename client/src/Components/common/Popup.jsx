import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function Popup({ openFulfilled, handleCloseFulfilled, handleFulfillListing }) {
  return (
    <div>
      <Dialog
        open={openFulfilled}
        onClose={handleCloseFulfilled}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure your listing is fulfilled?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot undo this in the future, and your listing will not be shown on the website anymore.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFulfillListing} autoFocus>yes,continue</Button>
          <Button onClick={handleCloseFulfilled}>no</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
