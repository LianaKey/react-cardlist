import React from "react";

export default class PostForm extends React.Component {
    state = {
        quantity: '233453'
    }

    render(){
        console.log(this.quantity)

        return(
            <div>
                <h1>Post form {this.quantity}</h1>
            </div>
        )
    }
}