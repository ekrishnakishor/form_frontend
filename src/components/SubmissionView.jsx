import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Form8850 from "../Container/Form";
import Form9061 from "../Container/Form9061";
import EmployeeInfo from "./AdminFormsView/EmployeeInfo";

const SubmissionView = ({ company }) => {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isOpenForm9061, setIsOpenForm9061] = useState(false);
  const [selectedSubmissionForm9061, setSelectedSubmissionForm9061] =
    useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/form-submissions/by_short_code/`,
          {
            params: {
              short_code: company.short_code,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSubmissions(response.data);
      } catch (err) {
        setError("Failed to fetch submissions");
        console.error(err);
      }
    };

    if (company.short_code) {
      fetchData();
    }
  }, [company.short_code]);

  const handleOpenDialog = (submission) => {
    setSelectedSubmission(submission);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setSelectedSubmission(null);
  };

  const handleOpenDialogForm9061 = (submission) => {
    setSelectedSubmissionForm9061(submission);
    setIsOpenForm9061(true);
  };

  const handleCloseDialogForm9061 = () => {
    setIsOpenForm9061(false);
    setSelectedSubmissionForm9061(null);
  };

  if (error) {
    return <p>{error}</p>;
  }

  const contentRef8850 = useRef(null);
  const contentRef9061 = useRef(null);

  const handleDownload = async (ref) => {
    if (ref.current) {
      const content = ref.current;

      // Temporarily set the content's height and width to ensure full rendering
      const originalStyle = content.style.cssText;
      content.style.cssText += "height: auto; width: auto;";

      // Capture the full content including header, body, and footer
      const canvas = await html2canvas(content, {
        scrollY: -window.scrollY,
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight,
        useCORS: true,
      });

      // Restore original style
      content.style.cssText = originalStyle;

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("document.pdf");
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>SSN</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Zip Code</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Signature</TableCell>
              <TableCell>Date Signed</TableCell>
              <TableCell>Submitted Form</TableCell>
              {/* <TableCell>Preview Form8850</TableCell>
              <TableCell>Preview Form9061</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>{submission.name}</TableCell>
                <TableCell>{submission.social_security_number}</TableCell>
                <TableCell>{submission.street_address}</TableCell>
                <TableCell>{submission.city}</TableCell>
                <TableCell>{submission.zip_code}</TableCell>
                <TableCell>{submission.country}</TableCell>
                <TableCell>{submission.telephone}</TableCell>
                <TableCell>{submission.date_of_birth}</TableCell>
                <TableCell>
                  {submission.employee_signature ? (
                    <img
                      src={submission.employee_signature}
                      alt="Signature"
                      style={{ maxWidth: "100px" }}
                    />
                  ) : (
                    "No Signature"
                  )}
                </TableCell>
                <TableCell>{submission.date_signed}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpenDialog(submission)}>
                    Click me
                  </Button>
                </TableCell>
                {/* <TableCell>
                  <Button onClick={() => handleOpenDialog(submission)}>
                    Click me
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleOpenDialogForm9061(submission)}>
                    Click me
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={isOpen}
        onClose={handleCloseDialog}
        sx={{ "& .MuiDialog-paper": { width: "90%", maxWidth: "1500px" } }}
      >
        <div
          // ref={contentRef8850}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <DialogTitle>Submissions</DialogTitle>
          <DialogContent style={{ flex: 1, overflowY: "auto" }}>
            {selectedSubmission && (
              <EmployeeInfo
                companyDetails={company}
                employeeDetails={[selectedSubmission]}
              />
            )}
          </DialogContent>
        </div>
        <DialogActions>
          {/* <Button color="primary" onClick={() => handleDownload(contentRef8850)}>
            Download
          </Button> */}
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Dialog
        open={isOpen}
        onClose={handleCloseDialog}
        sx={{ "& .MuiDialog-paper": { width: "90%", maxWidth: "1500px" } }}
      >
        <div
          ref={contentRef8850}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <DialogTitle>Submissions</DialogTitle>
          <DialogContent style={{ flex: 1, overflowY: "auto" }}>
            {selectedSubmission && (
              <Form8850
                companyDetails={company}
                employeeDetails={[selectedSubmission]}
              />
            )}
          </DialogContent>
        </div>
        <DialogActions>
          <Button color="primary" onClick={() => handleDownload(contentRef8850)}>
            Download
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isOpenForm9061}
        onClose={handleCloseDialogForm9061}
        sx={{ "& .MuiDialog-paper": { width: "90%", maxWidth: "1500px" } }}
      >
        <div
          ref={contentRef9061}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <DialogTitle>Submissions</DialogTitle>
          <DialogContent style={{ flex: 1, overflowY: "auto" }}>
            {selectedSubmissionForm9061 && (
              <Form9061
                companyDetails={company}
                employeeDetails={[selectedSubmissionForm9061]}
              />
            )}
          </DialogContent>
        </div>
        <DialogActions>
          <Button
            color="primary"
            onClick={() => handleDownload(contentRef9061)}
          >
            Download
          </Button>
          <Button onClick={handleCloseDialogForm9061} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

export default SubmissionView;
