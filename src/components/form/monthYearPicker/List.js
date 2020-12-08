import React, { Component } from "react";
import Picker from "react-month-picker";
import MonthBox from "./MonthBox";
import classes from "./month.module.css";

export default class List extends Component {
  constructor(props) {
    super(props);

    const splitText = () => {
      if (this.props.value) {
        let month = this.pickerLang.indexOf(
          this.props.value.substring(0, 3)
        );
        month = month > -1 ? ++month : 11;
        let year = Number(this.props.value.substring(5)) || 2017;
        return { year: year, month: month };
      }else{
        const date = new Date()
        return { year: date.getFullYear(), month: date.getMonth() };
      }
    };

    this.state = {
      singleValue: splitText()
    };

    this.yearsPanel = React.createRef();
    this.pickAMonth = React.createRef();
  }

  componentDidMount() {
  }

  render() {
    const { singleValue } = this.state;

    const makeText = (m) => {
      if (m && m.year && m.month)
        return this.pickerLang[m.month - 1] + ". " + m.year;
      return "?";
    };

    if(!this.props.value){
      this.props.changeHandler(
        this.props.name,
        makeText(this.state.singleValue)
      );
    }

    const handleClickMonthBox = (e) => {
      this.pickAMonth.current.show();
    };

    const handleAMonthChange = (year, month) => {
      this.setState({ singleValue: { year, month } });
      this.props.changeHandler(
        this.props.name,
        makeText(this.state.singleValue)
      );
    };

    const handleAMonthDissmis = (value) => {
      this.setState({ singleValue: value });
      this.props.changeHandler(
        this.props.name,
        makeText(this.state.singleValue)
      );
    };

    return (
      <div className={classes.edit}>
        <Picker
          ref={this.pickAMonth}
          years={{ min: new Date().getFullYear() - 40, max: new Date().getFullYear() + 8 }}
          value={singleValue}
          lang={this.pickerLang}
          onChange={handleAMonthChange}
          onDismiss={handleAMonthDissmis}
          theme={
            new Date().getHours() >= 19 || new Date().getHours() < 7
              ? "dark"
              : "light"
          }
        >
          <MonthBox
            value={makeText(singleValue)}
            onClick={handleClickMonthBox}
          />
        </Picker>
      </div>
    );
  }

  pickerLang = [
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
  ];
}
