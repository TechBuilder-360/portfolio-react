import React, { Component } from 'react'
import Picker from 'react-month-picker'
import MonthBox from './MonthBox';
import classes from './css/month.module.css'


export default class List extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            yearsOfSingle: [ 2008, 2011, 2012, 2014, 2016,2017, 2018, 2020],
            
            singleValue: {year: 2014, month: 11},
        }

        this.yearsPanel = React.createRef()
        this.pickAMonth = React.createRef()
       
    }


    render() {
        const pickerLang = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            from: 'From', to: 'To',
        }
        const { yearsOfSingle, ageOfSingle, singleValue,  } = this.state

        const makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
            return '?'
        }

        return (
            
            
            
                    
                    <div className={classes.edit}>
                        <Picker
                            ref={this.pickAMonth}
                            age={ageOfSingle}
                            years={yearsOfSingle}
                            value={singleValue}
                            lang={pickerLang.months}
                            onChange={this.handleAMonthChange}
                            onDismiss={this.handleAMonthDissmis}
                        >
                            <MonthBox value={makeText(singleValue)} onClick={this.handleClickMonthBox} />
                        </Picker>
                    </div>
                
                    )
                    }

                    handleClickEditYears = (e) => {
                        this.yearsPanel.current.show()
                    }
                    handleYearsChanged = (years) => {
                        this.setState({
                            yearsOfSingle: years.concat(),
                            ageOfSingle: this.state.ageOfSingle + 1,
                        })
                    }
            
                    handleClickMonthBox = (e) => {
                        this.pickAMonth.current.show()
                    }
                    handleAMonthChange = (value, text) => {
                        //
                    }
                    handleAMonthDissmis = (value) => {
                        this.setState( {singleValue: value} )
                    }
            
                }