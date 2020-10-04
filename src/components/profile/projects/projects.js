import React from 'react'
import { connect } from 'react-redux'
import classes from './projects.module.css'

const Projects = props => {
    return (
        <div className={props.wrapper}>
            <p className={classes.title}>Projects</p>
            <div className={classes.container}>
            {props.projects.map((project,index)=>
            
            
                <div key={index} className={classes.card}>
<div className={classes.head}>
{project.title}
</div>
<div className={classes.body}>
{project.description}

<a href="#" className={classes.link}> More...</a>
</div>




</div>

            
            
            )}
            
</div>


        </div>
    )
}

const mapStateToProps = state =>{
    return{
        projects: state.project
    }
}

export default connect(mapStateToProps)(Projects)