import React, { Component } from 'react'

class Counter extends Component {
    render() {
        const { counter, onIncrement, onDelete, onDecrement } = this.props

        return (
            <div className="row">
                <div class="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
                </div>
                <div class="col">
                    <button
                        onClick={() => onIncrement(counter)}
                        className="btn btn-secondary btn-sm m-1">
                        +
                </button>
                    <button
                        disabled={this.preventDecrement()}
                        onClick={() => onDecrement(counter)}
                        className="btn btn-secondary btn-sm m-1">
                        -
                </button>
                    <button
                        onClick={() => onDelete(counter.id)}
                        className="btn btn-danger btn-sm m-1">
                        X
                </button>
                </div>
            </div>

        );
    }
    preventDecrement() {
        return this.props.counter.value === 0 ? true : false;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;