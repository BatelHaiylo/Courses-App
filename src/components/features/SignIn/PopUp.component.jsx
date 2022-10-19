import * as React from 'react';
import './PopUp.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Singin from './Singin.component';
import Register from './Register.component';

export default function PopUp() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className='popBtn' onClick={handleClickOpen}>
        sign in
      </Button>
      <Singin
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};