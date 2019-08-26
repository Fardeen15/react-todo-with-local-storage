import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Form1 from './component/todoform';
import Items from './component/todoItems';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      value : "",
      index : ""
    }
  }
  edit = (ev,index)=>{
    this.setState({
      value : ev.target.name,
      index : index
    })
  }
  clear123 = ()=>{
    this.setState({
      value : "",
      index : ""
    })
  }
  render() {


    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            exact
            component={()=><Form1 clear123 ={this.clear123} value = {this.state.value} index = {this.state.index}/>}
          />
          <Route
            path="/list"
            component={()=><Items edit = {this.edit}/>}
          />
        </Router>
      </div>
    );
  }
}

export default App;
