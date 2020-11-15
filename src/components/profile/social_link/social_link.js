import React from 'react'
import { connect } from 'react-redux'
import {SocialIcon } from 'react-social-icons'
import classes from './social_link.module.css'

const SocialLinks = props => {

    let socialTypeContent = null

    const display = (social) => {

        switch(social.label){
            case 'twitter':
                socialTypeContent = (
                    <div className={classes.container}>
                        <div className={classes.icon}>
                            <SocialIcon 
                            network={social.label} 
                            style={{ height: 25, width: 25}} 
                            url={social.url}/>
                        </div>
                        <div className={classes.text}>Twitter</div>
                            
                    </div>
                ); break;
    
            case 'facebook': 
                socialTypeContent = (
                    <div className={classes.container}>
                        <div className={classes.icon}>
                            <SocialIcon 
                                network={social.label} 
                                style={{ height: 25, width: 25}} 
                                url={social.url}/>
                        </div>
                        <div className={classes.text}>Facebook</div>
                    </div>
                ); break;

            default: socialTypeContent = null;
        }

        return socialTypeContent
    }
    return (
        <div>
            {props.social.map((social, index) => 
                <div key={index}>
                   {display(social, index)}
                </div>
                
            )}
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        social: state.portfolio.social
    }
}

export default connect(mapStateToProps)(SocialLinks)