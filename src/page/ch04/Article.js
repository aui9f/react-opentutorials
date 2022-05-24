import React, {Component} from 'react'

class Article extends Component{
    render(){
        return (
            <article>
                <hr/>
                <h2>{this.props.title}</h2>
                {this.props.desc}
                <hr/>
            </article>
        )
    }
}

export default Article