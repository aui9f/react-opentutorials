import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent'
import Subject from './components/Subject';
import react, { Component } from 'react';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
class App extends Component{

    //state를 쓰기 위해서 constructor를 작성
    constructor(props) {
        super(props);
        this.max_content_id=3;
        this.state = {
            mode: 'welcome',
            selected_content_id: 1,
            subject: {title: 'WEB', sub: 'World Wid Web'},
            welcome: {title: 'Welcome', desc: 'Hello, React..'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'Css is for design'},
                {id: 3, title: "JS", desc: 'JS is for interactive'}
            ]
        }
    }
    getReadContent(){
        let i = 0;
        while(i<this.state.contents.length){
            let data = this.state.contents[i];
            if(data.id === this.state.selected_content_id){
                return data;
            }
            i=i+1;
        }
    }

  getContent(){
    let _title, _desc, _article=null;

    // const mode = this.state.mode==='welcome'?this.state.welcome:this.state.contents[0];;
    // let {title:_title, desc: _desc} = mode;

    if(this.state.mode==='welcome'){
        _title=this.state.welcome.title;
        _desc=this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}/>
    }

    else if(this.state.mode ==='read'){
        let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}/>
    }

    else if(this.state.mode ==='create'){
        _article = <CreateContent 
            onSubmit={function(_title, _desc){
                this.max_content_id = this.max_content_id+1;
                let _contents = this.state.contents.concat({
                    id: this.max_content_id, title: _title, desc: _desc
                })
                
                
                this.setState({
                    contents: _contents,
                    mode: 'read',
                    selected_content_id: this.max_content_id
                })
            }.bind(this)}
        />
    }

    else if(this.state.mode==='update'){
        const selected = this.state.contents.filter(x=>x.id===this.state.selected_content_id)[0]
        
      _article = <UpdateContent data={selected} onSubmit={function(_id, _title, _desc){
        const _contents = Array.from(this.state.contents).map(x=>{
            return x.id===_id ? {id: _id, title: _title, desc: _desc}:x
        })
       
        this.setState({
          mode: 'read',
            contents:  _contents
        });

      }.bind(this)}/>
    }
    return _article;
  }

  render(){
 
    
    return (
      <div className="App">
        
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){
          this.setState({mode: 'welcome'})
        }.bind(this)
        }/>

        <TOC data={this.state.contents} onChangePage={function(_id){
            this.setState ({
                mode: 'read',
                selected_content_id: Number(_id)
            })
        }.bind(this)}/>

        <hr/>
          <Control onChangeMode={function(_mode){
            console.log("this.state.selected_content_id", this.state.selected_content_id)
            if(_mode==='delete'){
              if(window.confirm('really?')){
                const _contents = Array.from(this.state.contents.filter(x=>{
                  return x.id !== this.state.selected_content_id
                }))

                this.setState({
                  mode: 'welcome',
                  contents: _contents
                })
                
              }
             
            }else{
              this.setState({
                mode: _mode,
              })
            }
            
          }.bind(this)}/>
        <hr/>
        {this.getContent()}
        
      </div>
    );
  }
}



export default App;
