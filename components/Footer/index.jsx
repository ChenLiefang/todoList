import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  //清除所有已完成的状态
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };

  render() {
    const { todos } = this.props;
    //已完成个数
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    //总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> /全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-denger">
          清除已完成任务
        </button>
      </div>
    );
  }
}

export default Footer;
