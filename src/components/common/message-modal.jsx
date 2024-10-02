import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Fade } from "@mui/material";

const MessageModal = ({ message, open, handleClose, messageType }) => {
  const isSuccess = messageType === "success";
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 500 }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{ color: isSuccess ? "green" : "red" }}>
        {isSuccess ? "Success" : "Failure"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" style={{ color: isSuccess ? "green" : "red" }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageModal;
