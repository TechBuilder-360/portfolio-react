import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import classes from "./projects.module.css";
import Container from "../../../container/Container";
import ProjectModal from "./project-modal";
import { text_truncate } from "../../../shared/utility";

class Projects extends Component {
  constructor(props){
    super(props)
  this.state = {
    show: false,
    project: null,
  };

  }
  showModal = (id) => {
    this.setState({
      show: true,
      project: this.props.projects[id],
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
      project: null,
    });
  };

  render() {
    const modal = (
      <ProjectModal
        show={this.state.show}
        handleClose={this.handleClose}
        project={this.state.project}
      />
    );
    return (
      <Container>
        <div className={this.props.wrapper}>
          <p className="title" style={{ textAlign: "left" }}>
            {this.props.title}
          </p>
          <div className={this.props.div}>
          <div className={classes.container}>
            {this.props.projects.map((project, index) => (
              <div key={index} className={classes.card}>
                <div className={classes.head}>{project.title}</div>
                <div className={classes.body}>
                  <div>{text_truncate(project.description, 50)}</div>
                  <Button
                    onClick={() => this.showModal(index)}
                    className="btn btn-info btn-outline"
                  >
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        {this.state.show ? modal : null}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.portfolio.project,
  };
};

export default connect(mapStateToProps)(Projects);
