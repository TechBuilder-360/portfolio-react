import React from 'react'
import { connect } from 'react-redux'

const Projects = props => {
    return (
        <div className={props.wrapper}>
            <p>{props.title}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        projects: state.project
    }
}

export default connect(mapStateToProps)(Projects)