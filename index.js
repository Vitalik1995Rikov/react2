import React from "react";
import ReactDOM from "react-dom";

const ComponentA = () => {
	return <div>Component A</div>
}

const ComponentB = () => {
	return <div>Component B</div>
}

const ComponentC = () => {
	return ReactDOM.createPortal(
		<div>
			Component C
			<ComponentA/>
			<ComponentB/>
		</div>,
		document.body
	);
};

const ComponentD = () => {
	return (
		<div>
			Component D
			<ComponentC/>
		</div>
	)
}

ReactDOM.render(
		<ComponentD/>, 
	document.getElementById("root")
);