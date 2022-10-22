import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Login from './Login.component';

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
      <Login
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};