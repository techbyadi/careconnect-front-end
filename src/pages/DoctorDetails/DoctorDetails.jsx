import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import DoctorInfo from "../../components/DoctorInfo/DoctorInfo";
import DoctorAvailability from "../../components/DoctorAvailability/DoctorAvailability";

// css
import styles from "./DoctorDetails.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "hidden",
};

const contentStyle = {
  maxHeight: "100%",
  overflowY: "scroll",
  padding: "5px",
};

const DoctorDetails = ({ doctor, docDetailsRef }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  
  const navigate = useNavigate();

  const handleClick = (selectedTime, selectedDate) => {
    navigate("/appointments/new", { state: { doctor, selectedTime, selectedDate } });
  };
  const handleClickReview = () => {
    navigate('/reviews',  { state: {doctor} });
  };

  useImperativeHandle(docDetailsRef, () => ({
    handleOpen() {
      setOpen(true);
    },
  }));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={contentStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <DoctorInfo doctor={doctor} />
              <br />
              <hr />
                <DoctorAvailability doctor={doctor} handleClick={handleClick}/>
              <hr />
              <br />
              <Button variant="contained" onClick={() => handleClick(null)}>
                Book an Appointment
              </Button>
              <Button variant="contained" onClick={()=> handleClickReview()}>
          Leave a Review
          </Button>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Reviews will go here
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DoctorDetails;
