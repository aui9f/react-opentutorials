import React, { Component } from "react";

class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc,
        }
    }
    render(){
        

        return(
            <article>
                <h2>Update</h2>
                <form action="/update_process" method="post" onSubmit={function(e){
                    e.preventDefault(e);
                    this.props.onSubmit(
                        this.state.id, this.state.title, this.state.desc
                    )
                }.bind(this)}>

                    <input type="hidden" name="id" value={this.state.id}/>

                    <input type="text" name="title" value={this.state.title} placeholder="title"
                    onChange={function(e){
                        console.log(e.target.value)
                        this.setState({title: e.target.value})

                    }.bind(this)}/>
                    <br/>
                    
                    <textarea name="desc" value={this.state.desc} 
                    placeholder="description"
                    onChange={function(e){
                        this.setState({desc: e.target.value})
                    }.bind(this)}
                    />
                    <br/>
                    
                    <input type="submit" value="UPDATE"></input>
                </form>
            </article>
        )
    }
}
export default UpdateContent;