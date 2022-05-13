import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent'
import Subject from './components/Subject';
import react, { Component } from 'react';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
class App extends Component{

  //state를 쓰기 위해서 constructorㄹ르 작성
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {title: 'Welcome', desc: 'Hello, React..'},

      subject: {title: 'WEB', sub: 'World Wid Web'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for information'},
        {id: 2, title: 'CSS', desc: 'Css is for design'},
        {id: 3, title: "JS", desc: 'JS is for interactive'}
      ]
    }
  }

  render(){
    let _article=null;
    const mode = this.state.mode==='welcome'?this.state.welcome:this.state.contents[0];;

    const {title:_title, desc: _desc} = mode;

    if(this.state.mode==='welcome'){
      _article = <ReadContent title={_title} desc={_desc}/>
    }
    else if(this.state.mode ==='read'){
      
    }
    else if(this.state.mode ==='create'){
      console.log("???")
      _article = <CreateContent/>
    }
    console.log("this.state.mode", this.state.mode)
    
    return (
      <div className="App">
        
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
          this.setState({mode: 'HTML'})
        }.bind(this)
        }/>
        <TOC data={this.state.contents}/>
        <hr/>
          <Control onChangeMode={function(_mode){
            this.setState({
              mode: _mode
            })
          }.bind(this)}/>
        <hr/>
        {_article}
        
      </div>
    );
  }
}



export default App;
