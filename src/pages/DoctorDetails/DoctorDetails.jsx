import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useImperativeHandle } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DoctorDetails =  ({doctor, docDetailsRef}) => {
  const [open, setOpen] = React.useState(false); 
  const handleClose = () => setOpen(false);
  
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
          <Typography id="modal-modal-title" variant="h6" component="h2"> 
        <header>
          <span>
            <h1>{doctor.name}</h1>
          </span>
          <h3>🩺 {doctor.specialization}</h3>
          <h4>📍{doctor.location}</h4>
        </header>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Reviews will go here 
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default DoctorDetails