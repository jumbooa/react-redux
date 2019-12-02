import React,{Component} from "react"
import {connect} from "react-redux"
import {addArticle} from "../../actions/index"

function mapDispatchToProps(dispatch){
    return {
        addArticle : article=>{
            dispatch(addArticle(article))
        }
    }
}

class ConnectedForm extends Component{
    constructor(props){
        super(props)

        this.state={
            title:''
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault()

        const {title}=this.state;
        this.props.addArticle({title})
        this.setState({title:''})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} id='title'></input>
                    <button type="submit">Add Me</button>
                </form>

            </div>
        )

    }

} 

const FormList=connect(null , mapDispatchToProps)(ConnectedForm);

export default FormList;