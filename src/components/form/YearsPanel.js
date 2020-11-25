import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tappable from 'react-tapper'


const numSort = (a, b) => a - b
const copySort = (arr) => arr.sort(numSort)
const yearsConv = (arr) => copySort(arr).filter(y => y >= 1000 && y <= 2500).map(y => String(y))

export default class YearsPanel extends Component {

    
    static propTypes = {
        years: PropTypes.arrayOf(PropTypes.number),
        onChange: PropTypes.func,
    }

    constructor(props, context) {
        super(props, context)

        const years = yearsConv(this.props.years)
        this.state = {
            yearsTag: this.props.years.join(' '),
            years,
            showed: false,
            closeable: false,
            char: '',
        }
    }

    
    static getDerivedStateFromProps(props, state) {
        const yearsTag = props.years.join(' ')
        if (yearsTag !== state.yearsTag) {
            return {
                yearsTag,
                years: yearsConv(props.years),
            }
        }
        return null
    }

    render() {
        const { showed, years, input, } = this.state
        return (
            <div className={["years-panel", "table", (showed ? "show" : '')].join(' ').trim()}>
                <Tappable className="overlay" onTap={this._handleOverlayTouchTap} />
                <div className="cell">
                    <div className="popup">
                        <textarea rows="8" value={years.join('\n')} onKeyDown={this._handleKeyDown} onChange={this._handleChange} />
                    </div>
                </div>
            </div>
        )
    }

    _handleOverlayTouchTap = (e) => {
        if (this.state.closeable) {
            const years = this.state.years
                .map(y => parseInt(y,10))
                .filter(y => !isNaN(y) && y >= 1000 && y <= 2500)
                .sort(numSort)
            this.setState({
                showed: false,
                closeable: false,
                yearsTag: years.join(' '),
                years: years.map(y => String(y)),
            })
            this.props.onChange && this.props.onChange(years)
        }
    }

    show() {
        if (!this.state.showed) {
            setTimeout(() => {this.state.closeable = true}, 250)
            this.setState({ showed: true })
        }
    }

    _handleKeyDown = (e) => {
        if (e.metaKey || e.ctrlKey || e.altKey) {
            return
        }
        const code = e.keyCode
        if ([ 8, 13, 37, 38, 39, 40].includes(code)) {
            return
        }
        if (code >= 48 && code <= 57) {
            return
        }
        e.preventDefault()
    }

    _handleChange = (e) => {
        this.setState({ years: e.target.value.split('\n') })
    }
}




