import React, { Component } from 'react';
import { observer } from 'mobx-react'
import '../App.css'
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    //your code here
  }
  deleteItem = () => {
    //your code here
  }
  render() {
    let item = this.props.item
    return (
      <div className = {item.completed ? "crossed": null}>
          <input 
            type="checkbox"
            onClick = {this.checkItem} 
            value={item.name}
          /> 
          {item.name} 
        </div>
      )
  }
}

export default observer(Item)