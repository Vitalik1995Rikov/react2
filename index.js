import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';

const testContext = createContext()

const {Provider} = context

const TestComponent = () => {
	const color = "#31c5b2"
	const contextValue = {color}
	
	return (
	<Provider value={contextValue}>
		<div>Anything ...</div>
	</Provider>
	)
}
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
