import React from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modifiedproject: {
        name: "",
        description: "",
        status: "awaiting assignment",
        githubLink: "",
        idInstructor: null,
        creationDate: "2020-01-01T07:20:00.000Z",
        deadline: "2020-01-02T10:06:40.000Z",
        assignmentDate: "2020-01-15T04:20:37.532Z",
        confirmationDate: "2020-01-02T23:00:00.400Z",
        submissionDate: "2020-01-28T23:00:04.000Z",
        validationDate: "2020-01-30T23:00:00.400Z"
      }
    };
  }

  componentDidMount() {
    const idStudent = window.location.href.substr(
      window.location.href.indexOf("StudentDashboard") + 17
    );
    // axios.post(`/api/projects/createProject/${idStudent}`).then(response => {
    //   this.setState({ projects: response.data });
    // });
    
    
    
}

  handleAdd = () => {
    const idStudent = window.location.href.substr(
      window.location.href.indexOf("StudentDashboard") + 17
    );
    console.log(idStudent);
    axios
      .post(
        `/api/projects/createProject/${idStudent}`,
        this.state.modifiedproject
      )
      .then(response => {
        console.log("added project");
      });
      window.location.href = window.location.href;
  };

  handleChange = e => {
    this.setState({
      modifiedproject: {
        ...this.state.modifiedproject,
        [e.target.name]: e.target.value
      }
    });
  };

  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div className="addProjectmodalbody">
        <Button
          color="outline-danger"
          onClick={this.toggle}
          className="addmodal-btn"
        >
          <p>Add New Project</p>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add New Project</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              name="name"
              placeholder="Enter a Project Name"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="githubLink"
              placeholder="Enter githubLink"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="deadline"
              placeholder="Enter deadline"
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              type="button"
              onClick={e => {
                this.handleAdd(e);
                this.toggle();
              }}
            >
              Save Changes
            </Button>{" "}
            <Button
              color="secondary"
              data-dismiss="modal"
              onClick={() => {
                this.toggle();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
