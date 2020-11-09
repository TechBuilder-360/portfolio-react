import React from 'react'
import { connect } from 'react-redux'

const ProfessionalSummary = props => {
    return (
        <div className={props.wrapper}>
            <p className='title' style={{textAlign:'left'}}>{props.title}</p> {/* styling of title should be moved to dashboard.module.css to ensure consistent title styling for each section */}
            <p style={{textAlign: "left"}}>{props.summary}</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        summary: state.portfolio.personal_info.bio
    }
}

export default connect(mapStateToProps)(ProfessionalSummary)
