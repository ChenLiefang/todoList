import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./header.css";
class Header extends Component {
  handleKeyUp = (e) => {
    //解构赋值获取keyCode, target
    const { keyCode, target } = e;
    //判断是否回车键
    if (keyCode !== 13) return;
    //添加的todo名字不能为空
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    //准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false };
    //将todoObject传递给APP
    this.props.addTodo(todoObj);
    //清空
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}

export default Header;
