import React, { useState } from 'react';
import useStyles from './draggableEventStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const DraggableEvent = ({ event }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <div className={classes.event} onClick={handleClickOpen} key={event.id}>
      <div className="row">
        <div className="col-10">
          <h3>{event.title}</h3>
          <p>{event.desc}</p>
          <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar" style={{ right: 30 }}
            />
           {event.duration}
          </div>
        </div>
      </div>
    </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="event-dialog-title"
      >
        <DialogTitle id="event-dialog-title">{event.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Duration"
            type="Number"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DraggableEvent;
