import React, { Component } from 'react';

class Toogle extends Component {
constructor(props) {
	super(props);
	this.state = {isToogleOn: true};
	this.handleClick = this.handleClick.bind(this);
}
handleClick() {
	this.setState(prevState => ({
		isToogleOn: !prevState.isToogleOn
	}));
}
render() {
	return (
	<button onClick={this.handleClick}>
		{this.state.isToogleOn ? 'Включено' : 'Выключено'}
	</button>
	);
}
}

export default Toogle;