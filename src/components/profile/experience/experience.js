import React from 'react'
import {connect} from 'react-redux'


const Experience = props => {
    
    return (
        <div className={props.wrapper}>
            <p>{props.title}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        experience:state.experience
    }
}

export default connect(mapStateToProps)(Experience)
