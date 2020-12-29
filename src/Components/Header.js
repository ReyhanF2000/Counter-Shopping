import React from 'react'
import Button from './Button'
import 'font-awesome/css/font-awesome.min.css';

class Header extends React.Component {
    handleReset = () => {
        this.props.onReset();
    }
    handleRefresh = () => {
        this.props.onRefresh();
    }
    render() {
        return (<div className='head'>
            <i class="fa fa-shopping-cart shopsize"></i>
            <span className='items-count'> {this.props.itemsCount} </span>
            <Button
                onClick={this.handleReset}
                disabled={this.props.len === 0}
                gloabalClass={this.props.resetClass}
            >
                <i class="fa fa-edit"></i>
            </Button>
            <Button
                onClick={this.handleRefresh}
                disabled={this.props.len !== 0}
                gloabalClass={this.props.refreshClass}
            >
                <i class="fa fa-refresh"></i>
            </Button>
        </div>)
    }
}
export default Header
