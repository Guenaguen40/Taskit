import React, { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AppBar from './AppBar';
import css from './App.css';
import events from './data';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DraggableEvent from './DraggableEvent';





const localizer = momentLocalizer(moment);


const DnDCalendar = withDragAndDrop(Calendar);

class Dashbord extends React.Component {

  state = {
    open: false,
    events
  };


  state = {
    events: [
      { id: 1, title: 'My Event 1', desc: 'My Event 1', duration: '30:00'  },
      { id: 2, title: 'My Event 2', desc: 'My Event 10', duration: '35:00'  },
      { id: 3, title: 'My Event 3', desc: 'My Event 100', duration: '60:00'  },
      { id: 4, title: 'My Event 4', desc: 'My Event 1000', duration: '40:00'  },
      { id: 5, title: 'My Event 5', desc: 'My Event 10000', duration: '50:00'  }
    ],
    removeAfterDrop: false
  };

  handleDrop = (info) => {
    if (this.state.removeAfterDrop) {
      // remove the element from the events list
      this.setState((state) => {
        state.events = state.events.filter((event) => event.id !== info.draggedEl.id);
        return { events: state.events };
      });
    }
  };


  handleClickOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };
  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };
 
  onEventDrop = (event) => {
    this.setState((state) => {
      state.events.push(event);
      return { events: state.events };
    });
  };


  render() {
    return (
<>
      <div className="App">
        <div className="cal">
        <AppBar></AppBar>
                </div>
                <div id='main'>
          <div id='calendar-container'>
        <DnDCalendar id='calendar'
          defaultDate={moment().toDate()}
          defaultView="week"
          events={this.state.events}
          localizer={localizer}
          
          onEventDrop={this.moveEvent}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh", width: "920px" 
        }}/>
        </div>
          <div id='external-events'>
            <div id='Taskheader'>
          <p>
            <strong>Tasks</strong>
          </p>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab size="small" color="primary" aria-label="add" onClick={this.handleClickOpen}>
        <AddIcon />
      </Fab>
      </Box>
      </div>
      <div>
          {this.state.events.map((event) => (
          <DraggableEvent key={event.id} event={event} />))}
          </div>
      <Dialog  open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
        <Button onClick={this.handleClose}>Cancel</Button>
        <Button onClick={this.handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
            </div>
          <div>
          </div>
          </div>
          </div>
          </>
    );
  }
}

export default Dashbord;