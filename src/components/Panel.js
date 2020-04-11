import React from 'react'
import './Panel.css'

class Panel extends React.Component {
    render() {
        return (
        <div className="Panel"
             style={{width: this.props.width}}>
            {this.props.children}
        </div>
        )
    }
}

export default Panel;
