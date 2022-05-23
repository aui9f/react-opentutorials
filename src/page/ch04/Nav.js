import React, {Component} from 'react';

class Nav extends Component{

    state = {
        list: []
    }
    componentDidMount(){
        fetch('list.json').then(res=>{
            return res.json();
        }).then(function(json){
            this.setState({list:json})
            
        }.bind(this))
        console.log("componentDidMount")
    }
    render(){
        const listTag = [];
        this.state.list.forEach(x => {
            listTag.push(<li key={x.id}><a href={x.id}>{x.title}</a></li>)
        });
        return (
            <nav>
                
                <ul>
                    {listTag}
                </ul>
            </nav>
        )
    }
}

export default Nav