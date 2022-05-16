import React, { Component } from "react";

class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    )
                }.bind(this)}>
                    <input type="text" name="title" placeholder="title"/>
                    <br/>
                    
                    <textarea name="desc" placeholder="description"/>
                    <br/>
                    <input type="submit" value="CREATE"></input>
                </form>
            </article>
        )
    }
}
export default CreateContent;