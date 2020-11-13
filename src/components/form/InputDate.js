import React, { useState } from 'react';
import Container from '../../container/Container'
import classes from './form.module.css';
import DatePicker from 'react-date-picker';


const InputDate = (props) => {
    
    const [value, onChange] = useState(new Date());
    return (
        <Container>
            <label className={classes.block}>{props.label}</label>
            <DatePicker onChange={onChange} className={classes.datePicker} value={value} clearIcon={null} />
        </Container>
    );
};

export default InputDate;