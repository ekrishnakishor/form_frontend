import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
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
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Snackbar,
  Alert
} from "@mui/material";
import QRCode from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import AddEditCompany from "./AddEditCompany";
import Submission from "./Submission";
import "../Styles/companyDetails.css";

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [linkandQROpen, setLinkandQROpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const navigate = useNavigate();
  const qrCodeRef = useRef(null);



  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/companies/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCompanies(response.data);
    } catch (err) {
      if (err.response) {
        console.error("Error response", err.response);
        setError(`Error: ${err.response.status} - ${err.response.data.detail}`);
      } else if (err.request) {
        console.error("Error request", err.request);
        setError("No response received from server");
      } else {
        console.error("Error message", err.message);
        setError(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    if (error) {
      navigate('/login');
    }
  }, [error, navigate]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = (company = null) => {
    setSelectedCompany(company);
    setOpen(true);
  };

  const handleReportOpen = (company) => {
    setSelectedCompany(company);
    setReportOpen(true);
  };

  const handleLinkandQROpen = (company) => {
    setSelectedCompany(company);
    setLinkandQROpen(true);
  };

  const handleLinkandQROpenClose = () => {
    setLinkandQROpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReportClose = () => {
    setReportOpen(false);
  };

  const handleViewForms = (company) => {
    setSelectedCompany(company);
    setViewOpen(true);
  };

  const handleViewClose = () => {
    setViewOpen(false);
  };

  // const handleDownload = async () => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_BASE_URL}/companies/${
  //         selectedCompany.id
  //       }/report/`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         params: {
  //           from: dateRange.from,
  //           to: dateRange.to,
  //         },
  //       }
  //     );
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", `${selectedCompany.name}_report.csv`);
  //     document.body.appendChild(link);
  //     link.click();
  //   } catch (err) {
  //     console.error("Error downloading report", err);
  //   }
  // };

  const handleDownload = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/form-submissions/download_csv/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            company: selectedCompany.id,
            from: dateRange.from,
            to: dateRange.to,
          },
          responseType: "blob", // Important for handling file downloads
        }
      );

      // Create a URL for the Blob data and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${selectedCompany.name}_report.csv`); // File name can be customized
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading report", error);
      alert(
        "Error downloading report. Please check the console for more details."
      );
    }
  };

  const handleCopyLink = () => {
    if (selectedCompany) {
      const link = `${import.meta.env.VITE_CLIENT_BASE_URL}/AmazonDSP/${selectedCompany.short_code}/8850/`;
      navigator.clipboard.writeText(link).then(
        () => {
          setSnackbarMessage("Link copied to clipboard!");
          setOpenSnackbar(true);
        },
        (err) => {
          console.error("Failed to copy link: ", err);
        }
      );
    }
  };

  const handleGenerateAndDownloadPDF = () => {
    if (selectedCompany) {
      html2canvas(qrCodeRef.current)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();

          // Set desired width and height for the QR code in the PDF
          const imgWidth = 250; // Adjust the width as needed
          const imgHeight = 100; // Adjust the height as needed

          pdf.addImage(imgData, "PNG", -20 , 30, imgWidth, imgHeight);
          pdf.text(
            `QR Code for Submission of Company${selectedCompany.short_code}`,
            10,
            10
          );
          pdf.save(`${selectedCompany.short_code}_QRCode.pdf`);
        })
        .catch((error) => {
          console.error("Error capturing QR Code", error);
        });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="dashboard-style">
      <h2>Admin Dashboard</h2>
      {error && <p>{error}</p>}
      <Button
        sx={{ width: "20%", marginBottom: "1%" }}
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
      >
        Add New Company
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Short Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Submissions</TableCell>
              <TableCell>Reports</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.short_code}</TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.employer_address}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleLinkandQROpen(company)}
                  >
                    Link/QR
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleOpen(company)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleViewForms(company)}
                  >
                    View
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleReportOpen(company)}
                    sx={{ width: "80%" }}
                  >
                    Report
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Submission
        isOpen={viewOpen}
        selectedCompany={selectedCompany}
        onClose={handleViewClose}
      />

      <Dialog open={linkandQROpen} onClose={handleLinkandQROpenClose}>
        <DialogTitle>Link/QR</DialogTitle>
        <DialogContent>
          {selectedCompany && (
            <div className="qr-flex-class" ref={qrCodeRef}>
              <QRCode
                //value={`https://form-app-1ipz.onrender.com/AmazonDSP/${selectedCompany.short_code}/8850/`}
                value = {`${import.meta.env.VITE_CLIENT_BASE_URL}/AmazonDSP/${selectedCompany.short_code}/8850/`}
              />
            </div>
          )}
          <Button onClick={handleCopyLink} color="primary">
            Copy Link
          </Button>
          <Button onClick={handleGenerateAndDownloadPDF} color="primary">
            Download QR Code as PDF
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLinkandQROpenClose} color="primary">
            Cancel
          </Button>
          <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="info">
            {snackbarMessage}
          </Alert>
        </Snackbar>
        </DialogActions>
      </Dialog>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedCompany ? "Edit Company" : "Add New Company"}
        </DialogTitle>
        <DialogContent>
          <AddEditCompany company={selectedCompany} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={reportOpen} onClose={handleReportClose}>
        <DialogTitle>Generate Report</DialogTitle>
        <DialogContent>
          <TextField
            label="From Date"
            type="date"
            name="from"
            value={dateRange.from}
            onChange={(e) =>
              setDateRange({ ...dateRange, from: e.target.value })
            }
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="To Date"
            type="date"
            name="to"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReportClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDownload} color="primary">
            Download CSV
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
