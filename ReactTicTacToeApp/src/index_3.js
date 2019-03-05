import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Square extends React.Component {
	
	render() {
		return (
		
			// New Version
		// This version has a onClick method that calls the setState method for the given square.
		// and we will send in the new updated 'value' which is 'X'
		// In this version, instead of the button's value being a number it will be the value that was
		// set in the constructor
			<button className="square" onClick={ ()=> this.props.onClick()    }>
			{this.props.value}
			</button>
		);
	}
}

//we are going to be passing some data from the Board component to the Square component
// we are gone pass a value prop to the square
class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(9),
		};
	}
	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({squares: squares});
	}
	renderSquare(i) {
		
		// passes the value of 'i' to the Square function above and passes a onclick function
		//to call that can access the private values of Board, which cant be changed from square
		return (<Square  value={this.state.squares[i] }  onClick={ () => this.handleClick(i) } /> );
	}
	
	render() {
		const status = 'Next Player: X';
		
		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);	
	}
}

// =====================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);




class ShoppingList extends React.Component {
	render () {
		return (
			<div className="shopping-list">
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
		);
	}
}

// =====================================


ReactDOM.render(
	<ShoppingList name="Brandon"/>, 
	document.getElementById('ShopList')
);






