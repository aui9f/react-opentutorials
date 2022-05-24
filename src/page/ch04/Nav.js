import React, {Component} from 'react';

class Nav extends Component{

    // state = {
    //     list: []
    // }
    // componentDidMount(){
    //     fetch('list.json').then(res=>{
    //         return res.json();
    //     }).then(function(json){
    //         this.setState({list:json})
            
    //     }.bind(this))
    //     console.log("componentDidMount")
    // }

    tagClick = (e) => {

        e.preventDefault();
        const {
            target : {
                dataset
            }
        } = e;

        this.props.onClick(dataset.id)
    }
    render(){
        // console.log("this.props.list", this.props.list)
        const listTag = this.props.list.length>0?
        this.props.list.map(x => {
            return <li key={x.id}>
                <a href={x.id} data-id={x.id} onClick={this.tagClick}>{x.title}</a>
            </li>
        })
        :null;
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