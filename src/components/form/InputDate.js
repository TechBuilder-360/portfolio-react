import React, { useState, useEffect } from 'react';
import Container from '../../container/Container'
import classes from './form.module.css';
import moment from 'moment';
import {DatePicker} from 'antd'
import Proptypes from 'prop-types'


const InputDate = ({changed, name, value, label }) => {
    let init = value || null
    const [initValue, onChange] = useState(new Date(init));

    useEffect(() => {
        if(changed){
            changed(name, initValue)
        }
      },[initValue]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <Container>
            <label className={classes.block}>{label}</label>
            <DatePicker className={classes.datePicker} 
                name={name} 
                onChange={onChange} 
                allowClear={false}
                value={moment(initValue)}
                format={"DD - MM - YYYY"}
            />
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
