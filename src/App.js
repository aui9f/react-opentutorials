import React, {useState} from 'react';
import './App.css'
import Index from './page/ch04';
function App(){
  return(
    <Index/>
  )
}

function FuncCop({initNumber}){
  
  
  const [number, setNumber] = useState(initNumber);
  const onClickAdd = () => {
    setNumber(number+1)
  }
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number(props): {initNumber}</p>
      <p>Number(state): {number}</p>
      <button type="button" onClick={onClickAdd}>ADD</button>
    </div>
  )
}

class ClassCop extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      number: this.props.initNumber
    }
  }


  onClickAdd = () => {
    this.setState({
      number: ++this.state.number
    })
  }

  render(){
    return (
      <div className='container'>
        <h2>class style component</h2>
        <p>Number(props): {this.props.initNumber}</p>
        <p>Number(state): {this.state.number}</p>
        <button type="button" onClick={this.onClickAdd}>ADD</button>
      </div>
    )
  }
}
export default App;