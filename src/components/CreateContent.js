import React, { Component } from "react";

class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form>
                    <input type="text"/>
                    <input type="submit" value="CREATE"></input>
                </form>
            </article>
        )
    }
}
export default CreateContent;