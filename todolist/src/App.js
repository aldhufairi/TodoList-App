import React, { Component } from 'react'
import Additem from './components/AddItem/Additem'
import TodoItems from './components/TodoItems/TodoItems'

class App extends Component {
  state = {
    items : [
      {id:1,name:'Abdul', age:'30'},
      {id:2,name:'Tanaka', age:'32'},
      {id:3,name:'Mona', age:'26'}
    ]
  }

deleteItem = (id) => {
  //First way_______
  //let items = this.state.items;
  //let i = items.findIndex(item => item.id === id)
  //items.splice(i,1)
  //this.setState({items})

  //Second way________
  let items = this.state.items.filter(item => {
    return item.id !== id
  })
  this.setState({items})
}

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return (
      <div className="App container">
      <h1 className="text-center">Todo List</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <Additem addItem={this.addItem} />
      </div>
    )
  }
}

export default App
