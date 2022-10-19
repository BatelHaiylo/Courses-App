import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import Form from '../Form/Form.component';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Singin(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>sign in</DialogTitle>
      <Form title='sign in'/>
      <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            <PersonIcon />
      </Avatar>
      <button className='primary-btn' onClick={handleClose}>sign in</button>
      <Link to='/Register'>register</Link>
    </Dialog>
  );
}

Singin.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};