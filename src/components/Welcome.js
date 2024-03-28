import React, {Component} from 'react'

export class Welcome extends Component{
    constructor(props){
        super(props)

        this.state={
            message:'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thanks for Subscribing'
        })
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}