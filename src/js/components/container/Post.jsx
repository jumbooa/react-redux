import React , {Component} from "react"
import {connect} from "react-redux"
import {getData} from "../../actions/index"

export class Post extends Component{

    componentDidMount(){
        
        this.props.getData()
    }

    

    render(){
        return (
            <div>
                <ul>
                  {this.props.articles.map(el=>(
                    <li id={el.id}>{el.title}</li>
                  ))}  
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        articles:state.remotedData.slice(0,10)
    }
}

export default connect(mapStateToProps , {getData})(Post)
