import React, {Component} from "react";

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false}
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened})
    }

    render() {
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>It is dropdownText</div>
        }
        return (
        <div onClick={this.toggleState.bind(this)}>
            it is dropdown
            {dropdownText}
        </div>)
    }
}

export default Dropdown;