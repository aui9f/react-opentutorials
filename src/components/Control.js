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
                <li><button type="button" onClick={
                    function(e){
                        this.props.onChangeMode('update')
                    }.bind(this)
                }>update</button></li>
                <li><button type="button" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete')
                }.bind(this)}>delete</button></li>
            </ul>
        )
    }
}
export default Control;