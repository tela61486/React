import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    render(){
        return (
            <button className="" onClick={() => alert("click")} >
            {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component{
    render(){
        const player1 = this.props.value['player1'];
        const player2 = this.props.value['player2'];
        const player3 = this.props.value['player3'];

        //const {player1, player2, player3} = this.props.value;
        return (
            <div>
                <Square value={player1}/>
                <Square value={player2}/>
                <Square value={player3}/>
            </div>
        );
    }
}

class Game extends React.Component{
    render(){
        const numplayers = this.props.value;
        return (
            <div className="game-board">
                <Board value={ {player1:"X", player2:"O",player3:"Y"} }/>
            </div> 
        );
    }
}

// For ReactDOM.render(param1, param2) you send two parameters
// The first parameter is the Top level react component
// The second parameter is the Dom object that you want the coomponent
// rendered in
ReactDOM.render(
    <Game value={3} />, 
    document.getElementById('root')
);