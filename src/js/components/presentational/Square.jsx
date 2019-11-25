import React , {Component} from "react"
import styles from "../container/style.css"

class Square extends React.Component{

    

    render(){
        return(
            <div>
                 <button className={styles.square} onClick={this.props.onClick}>{this.props.value}</button>
                
            </div>
           
        )
    }
}

export default Square;