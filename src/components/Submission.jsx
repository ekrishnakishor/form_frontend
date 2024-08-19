import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import SubmissionView from "./SubmissionView";

const Submission = ({ isOpen, selectedCompany, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      sx={{ "& .MuiDialog-paper": { width: "90%", maxWidth: "1200px" } }}
    >
      <DialogTitle>Submissions</DialogTitle>
      <DialogContent>
        {/* <AddEditCompany company={selectedCompany} onClose={onClose} /> */}
        {/* {selectedCompany ? selectedCompany.name : "No company selected"} */}
        <SubmissionView company={selectedCompany ? selectedCompany : ""} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Submission;
