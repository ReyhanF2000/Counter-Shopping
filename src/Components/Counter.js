import React from 'react'
import Button from './Button'
import 'font-awesome/css/font-awesome.min.css';

export default class Counter extends React.Component {
    handleInc = () => {
        this.props.onInc()
    }
    handleDec = () => {
        this.props.onDec()
    }
    handleDel = () => {
        this.props.onDel()
    }
    render() {
        return (<div className='counter'>
            <span className='count-style'>{this.props.value === 0 ? 'Zero' : this.props.value}</span>
            <Button onClick={this.handleInc}
                gloabalClass={this.props.incClass}
            >
                <i class="fa fa-plus"></i>
            </Button>
            <Button onClick={this.handleDec}
                disabled={this.props.value === 0}
                gloabalClass={this.props.decClass}>
                <i class="fa fa-minus"></i>
            </Button>
            <Button
                onClick={this.handleDel}
                gloabalClass={this.props.delClass}
            >
                <i class="fa fa-trash"></i>
            </Button>
        </div>)
    }
}
