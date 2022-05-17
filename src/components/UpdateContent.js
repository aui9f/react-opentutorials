import React, { Component } from "react";

class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc,
        }
    }
    render(){
        const {id, title, desc}  = this.props.data;

        return(
            <article>
                <h2>Update</h2>
                <form action="/update_process" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    )
                }.bind(this)}>
                    <input type="text" name="title" value={this.state.title} placeholder="title"/>
                    <br/>
                    
                    <textarea name="desc" value={this.state.desc} placeholder="description"/>
                    <br/>
                    <input type="submit" value="CREATE"></input>
                </form>
            </article>
        )
    }
}
export default UpdateContent;