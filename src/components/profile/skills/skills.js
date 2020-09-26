import React from 'react'
import { connect } from 'react-redux'

const Skills = props => {
    return (
        <div className={props.wrapper}>
            <p>{props.title}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        skills:state.skills
    }
}

export default connect(mapStateToProps)(Skills)