import React from 'react'
import { connect } from 'react-redux'

const SocialLinks = props => {
    return (
        <div className={props.wrapper}>
            <p>{props.title}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        social: state.social
    }
}

export default connect(mapStateToProps)(SocialLinks)