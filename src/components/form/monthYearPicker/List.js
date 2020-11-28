import React, { Component } from "react";
import Picker from "react-month-picker";
import MonthBox from "./MonthBox";
import classes from "./month.module.css";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yearsOfSingle: [2010, 2011, 2012, 2014, 2016, 2017, 2018, 2020],
      singleValue: { year: 2014, month: 11 },
    };

    this.yearsPanel = React.createRef();
    this.pickAMonth = React.createRef();
  }

  render() {
    const pickerLang = {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      from: "From",
      to: "To",
    };
    const { yearsOfSingle, ageOfSingle, singleValue } = this.state;

    // TODO: write method to convert string to valid month year object

    const makeText = (m) => {
      if (m && m.year && m.month)
        return pickerLang.months[m.month - 1] + ". " + m.year;
      return "?";
    };
  
  
    const handleClickEditYears = (e) => {
      this.yearsPanel.current.show();
    };
    const handleYearsChanged = (years) => {
      this.setState({
        yearsOfSingle: years.concat(),
        ageOfSingle: this.state.ageOfSingle + 1,
      });
    };
  
    const handleClickMonthBox = (e) => {
      this.pickAMonth.current.show();
    };
    const handleAMonthChange = (year, month) => {
      this.setState({ singleValue: {year, month} });
      this.props.changeHandler(this.props.name, makeText(this.state.singleValue))
    };
    const handleAMonthDissmis = (value) => {
      this.setState({ singleValue: value });
      this.props.changeHandler(this.props.name, makeText(this.state.singleValue))
    };

    return (
      <div className={classes.edit}>
        <Picker
          ref={this.pickAMonth}
          age={ageOfSingle}
          years={yearsOfSingle}
          value={singleValue}
          lang={pickerLang.months}
          onChange={handleAMonthChange}
          onDismiss={handleAMonthDissmis}
        >
          <MonthBox
            value={makeText(singleValue)}
            onClick={handleClickMonthBox}
          />
        </Picker>
      </div>
    );
  }
}
