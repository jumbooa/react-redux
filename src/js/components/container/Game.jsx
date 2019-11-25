import React , {Component} from "react"
import ReactDOM from "react-dom";
import Board from "./Board.jsx"

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7], 
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

class Game extends React.Component{

    constructor(props){
        super(props);

        this.state={

            history:[{
                squares:Array(9).fill(null),
            }],
            xIsNext:true,
        }
    }

    handlerClick(i){
        const history=this.state.history;
        const current=history[history.length-1];
        const squares = current.squares.slice();

        let winner=calculateWinner(squares);
        if(winner || squares[i]){
            return;
        }
        //---test
        
        squares[i] = this.state.xIsNext? 'X':'O';
        this.setState({
            history: history.concat([{
            squares: squares,
          }]), 
          xIsNext:!this.state.xIsNext
        });

        
    }

    render(){
        const history=this.state.history;
        const current=history[history.length-1];

        let winner=calculateWinner(current.squares);
        let status;
        if(winner){
            status='Winner is ' + winner;
        }else{
            status='Next player ' + (this.state.xIsNext?'X' : 'O');
        }

        return(
            <div>
                <div>Game</div>
                <div>{status}</div>
                <Board squares={current.squares} onClick={(i)=>this.handlerClick(i)}></Board>
            </div>
            
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('game')
  );