import React from 'react';
import './App.css';
import { Row, Col, Grid, Button, Popover, OverlayTrigger, Modal } from 'react-bootstrap';

const popoverClickRootClose = (
  <Popover id="popover-trigger-click-root-close" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}



class App extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    return (
      <div id="app-container" className="container">
        <label id="switch" className="switch">
            <input type="checkbox" onChange={toggleTheme} id="slider" />
            <span className="slider round"></span>
        </label>
            <Button onClick={this.handleShow}  className="center-block app-button dark">
              Launch demo modal
            </Button>
            <OverlayTrigger 
              trigger="click"
              rootClose
              placement="bottom"
              overlay={popoverClickRootClose}
            >
              <Button  className="center-block app-button">Click for Popover</Button>
            </OverlayTrigger>
        <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Button onClick={toggleTheme} className="app-button">Change Theme</Button>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
