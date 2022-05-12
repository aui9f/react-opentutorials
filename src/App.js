import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content'
import Subject from './components/Subject';
import react, { Component } from 'react';
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

    const mode = this.state.mode==='welcome'?this.state.welcome:this.state.contents[0];;

    const {title:_title, desc: _desc} = mode;
    console.log("_title", _title)

    
    return (
      <div className="App">
        
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
          this.setState({mode: 'HTML'})
        }.bind(this)
        }/>
        {/* <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();

            // this.state.mode='welcome'
            this.setState({mode: 'HTML'})
            console.log(this.state.mode)
          }.bind(this)}>{this.state.subject.title}</a></h1>
          <p>{this.state.subject.sub}</p>
      </header> */}


        <TOC data={this.state.contents}/>
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}



export default App;
