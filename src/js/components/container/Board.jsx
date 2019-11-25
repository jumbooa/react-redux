import React , {Component} from "react";
import Square from "../presentational/Square.jsx";
import styles from "./style.css";

class Board extends React.Component{

    

    renderSquare(i){
        
        return (
            <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}/>
        )
    }

    render(){
       
        return(
            <div>
                <div className={styles.clearrow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={styles.clearrow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={styles.clearrow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;