import React from "react";
import { Button, Modal, ModalHeader, ModalFooter, Input } from "reactstrap";
import axios from "axios";
import "./project.css";

class EditModal extends React.Component {
  state = {
    project: {},
    modal: false
  };
  componentDidMount() {
    this.setState({
      project: this.props.project
    });
  }
  updateProject = () => {
    axios
      .put(
        `/api/projects/updateProject/${this.state.project._id}`,
        this.state.project
      )
      .then();
    window.location.href =
      "http://localhost:3000/StudentDashboard/" + this.state.project.idStudent;
  };

  handleChange = e => {
    this.setState({
      project: { ...this.state.project, [e.target.name]: e.target.value }
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button onClick={() => this.toggle()} className="edit-btn">
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit Project</ModalHeader>
          <p>Name:</p>
          <Input
            type="text"
            name="name"
            placeholder="name"
            defaultValue={this.state.project.name}
            onChange={e => this.handleChange(e)}
          />
         <p>Description:</p>
          <Input
            type="text"
            name="description"
            defaultValue={this.state.project.description}
            placeholder="description"
            onChange={e => this.handleChange(e)}
          />
          <p>Github Link:</p>
          <Input
            type="text"
            name="githubLink"
            placeholder="Github Link"
            onChange={e => this.handleChange(e)}
            defaultValue={this.state.project.githubLink}
          />
          <ModalFooter className="btneditx">
            
            <Button
              onClick={() => {
                this.updateProject(this.state.project._id);
              }}
            >
              Save changes
            </Button>
            <Button className="btn btn-danger" onClick={this.toggle}>
              Cancel
            </Button>
            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
