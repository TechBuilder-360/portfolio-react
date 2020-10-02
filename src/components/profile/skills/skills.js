import { map } from 'jquery'
import React from 'react'
import { connect } from 'react-redux'

const Skills = props => {
    let skillStyle={
     skill:  { listStyle:'none',
         display:'inline-block',
         fontSize:'12pt',
         padding:'6px' ,
         fontFamily:'tahoma',
        },
         
         header:{
             textAlign:'center',
             padding: '10px',
            fontSize:'20pt'
         }
         
    }
    return (
        <div className={props.wrapper}>
            <h2 style={skillStyle.header}>{props.title}</h2>
<ul>
{props.skills.map((skills,index)=>
<li key={index} style={skillStyle.skill}>{skills}</li>

)}


</ul>

        </div>
    )
}

const mapStateToProps = state =>{
    return{
        skills:state.skills
    }
}

export default connect(mapStateToProps)(Skills)