import React, { Component } from 'react'
import Picker from 'react-month-picker'
import MonthBox from './MonthBox';
import YearsPanel from './YearsPanel'


export default class List extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            yearsOfSingle: [ 2008, 2011, 2012, 2014, 2016, ],
            ageOfSingle: 0,
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
            <div>
            <ul>
                <li>
                    
                    <div className="edit">
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
                </li>
                
                    </ul>
                    </div>
                    )
                    }
                }