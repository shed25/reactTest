import React, { Component } from 'react';
import './App.css';
import TwitterView from './components/TwitterView'

class App extends Component {
	constructor() {
		super();
		this.showTrump = true;
		this.state = { 
			showTrump: this.showTrump,
			buttonValue: ''};
		
	}
	componentDidMount() {
		this.setButton();
	}

	changeTweet() {
		this.showTrump = !this.showTrump;
		this.setState({ showTrump: this.showTrump });
	}

	setButton() {
		let buttonValue = this.state.showTrump ? 'Check Hillary' : 'Check Trump';
		this.setState({ buttonValue: buttonValue });
	}
	render() {
		return (
			<div>
				<TwitterView
					userName={this.state.showTrump ? 'realDonaldTrump' : 'HillaryClinton'}
					changeButton={this.setButton.bind(this)} />
				<button
					className="btn btn-default"
					onClick={this.changeTweet.bind(this)}>{this.state.buttonValue}
				</button>
			</div>
		);
	}
}

export default App;
