import React, { useState, useEffect } from 'react';
import Container from '../../container/Container'
import classes from './form.module.css';
import DatePicker from 'react-date-picker';
import Proptypes from 'prop-types'


const InputDate = (props) => {
    let init = props.value || null
    const [value, onChange] = useState(new Date(init));

    useEffect(() => {
        if(props.changed){
            props.changed(props.name, value)
        }
      }, [value]);
    
    return (
        <Container>
            <label className={classes.block}>{props.label}</label>
            <DatePicker required={true} onChange={onChange} className={classes.datePicker} value={value} clearIcon={null} />
        </Container>
    );
};

InputDate.prototype = {
    label: Proptypes.string.isRequired,
    value: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    changed: Proptypes.func.isRequired
}

export default InputDate;
