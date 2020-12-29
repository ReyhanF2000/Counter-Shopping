import React from 'react'
class Button extends React.Component {
    static defaultProps = {
        onClick: () => undefined
    }

    handleClick = () => {
        this.props.onClick()
    }
    render() {
        return (
            <button
                onClick={this.handleClick}
                disabled={this.props.disabled}
                className={`
                ${this.props.gloabalClass === 0 ? 'Inc' : ''}
                ${this.props.gloabalClass === 1 ? 'Dec' : ''}
                ${this.props.gloabalClass === 2 ? 'Del' : ''}
                ${this.props.gloabalClass === 3 ? 'Reset' : ''}
                ${this.props.gloabalClass === 4 ? 'Refresh' : ''}
                `}
            >
                {this.props.children}
            </button>
        )
    }
}
export default Button