import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./projects.module.css";
import Container from "../../../container/Container";
import ProjectModal from "./modal";
import { text_truncate } from "../../../shared/utility";
import { Card } from "antd";

class Projects extends Component {
  constructor(props) {
    super(props);
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
                {this.props.projects.length !== 0 ? (
                  this.props.projects.map((project, id) => (
                    <Card
                      size="small"
                      title={project.title}
                      extra={
                        <a onClick={() => this.showModal(id)}>
                          More
                        </a>
                      }
                      key={project.id}
                      style={{ width: 300, border: "1px solid rgba(0, 0, 0, 0.3)" }}
                    >
                      <div>{text_truncate(project.description, 50)}</div>
                    </Card>
                  ))
                ) : (
                  <p>There are no project availabe at the moment</p>
                )}
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
