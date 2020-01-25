import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class instructorModal extends Component {
    state={
        projects:null
    }
    componentDidMount(){
        const idInstructor=this.props.idInstructor;
        let projects = this.props.authAdmin.projects.filter(proj=>proj.idInstructor === idInstructor)
        this.setState({
            projects:projects
        })
        // console.log("idInstructor: ",idInstructor)
        // console.log("projects: ",projects)
    }
    render() {
        return (
            <div className="assign-modal">
                    <div className="modal-dialog " role="document">
                        <div className="modal-content projects-modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{"color":"black"}}>Assigned Projects</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                            onClick={()=>this.props.handleIsOpen()}
                            >
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-projects">{this.state.projects?
                                this.state.projects.map((proj,key)=><button type="button" className={proj.status==='validated'?"btn btn-success":"btn btn-light"} key={key}>{proj.name}</button>):null
                            }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            onClick={()=>this.props.handleIsOpen()}
                            >Close</button>
                        </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
instructorModal.propTypes = {
    authAdmin: PropTypes.object.isRequired,
    // errors:PropTypes.object.isRequired

}
const mapStateToProps=state=>({
    authAdmin: state.authAdmin,
    // errors: state.errors
})
export default connect(mapStateToProps,{})(instructorModal);