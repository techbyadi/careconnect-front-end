
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DoctorAvailability from "../../components/DoctorAvailability/DoctorAvailability";

const DoctorAvailabilityModal = ({ open, handleClose, doctor, handleClick }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 250,
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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={contentStyle}>
          <DoctorAvailability doctor={doctor} handleClick={handleClick} />
        </Box>
      </Box>
    </Modal>
  );
};

export default DoctorAvailabilityModal;
