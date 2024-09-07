import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorInfo from '../../components/DoctorInfo/DoctorInfo';


// css
import styles from "./DoctorDetails.module.css";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'hidden',
};

const contentStyle = {
  maxHeight: '100%', 
  overflowY: 'scroll',
  padding: '5px',
};

const DoctorDetails =  ({doctor, docDetailsRef}) => {
  const [open, setOpen] = React.useState(false); 
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleClick = (selectedTime) => {
    navigate('/appointments/new',  { state: {doctor, selectedTime} });
  };

  useImperativeHandle(docDetailsRef, () => ({
    handleOpen () {
      setOpen(true)
    }
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
          <DoctorInfo doctor={doctor}/>
        <br />
        <hr/>
        <h3>Available Appointment Slots</h3>
        <h4>{new Date(doctor.date).toDateString()}</h4>
          <div>
            {doctor.timeSlots.map((slot, index) => (
              slot.isAvailable ? (
                <button  className={styles.button}
                  key={index}
                  onClick={()=> handleClick(slot.time)}
                >
                  {slot.time}
                </button>
              ) : (
                <button className={styles.button}
                  key={index}
                  style={{ backgroundColor: '#E0E0E0', cursor: 'not-allowed' }}
                  disabled
                >
                  {slot.time}
                </button>
              )
            ))}
          </div>
          <hr />
          <br />
        <Button variant="contained" onClick={()=> handleClick(null)}>
          Book an Appointment
          </Button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Reviews will go here 
          </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default DoctorDetails