import React, { Component } from "react";
class Control extends Component{
    render(){
        return (
            <ul>
                <li><button type="button" onClick={
                    function(e){
                        // e.preventDefault();
                        this.props.onChangeMode('create')
                    }.bind(this)
                }>create</button></li>
                <li><button type="button">update</button></li>
                <li><button type="button">delete</button></li>
            </ul>
        )
    }
}
export default Control;