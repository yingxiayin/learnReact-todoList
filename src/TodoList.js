import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
        <Fragment>
          <div>
            <input
                value={this.state.inputValue}
                // 变更函数作用域
                onChange={this.handleInputChange.bind(this)}
            />
            <button
                onClick={this.handlebtnClick.bind(this)}
            >
              提交
            </button>
          </div>
          <ul>
            {
              // 回调函数传参数
              this.state.list.map((item, index) => {
                return <li
                    key={index}
                    onClick={this.handleItemDelete.bind(this, index)}
                >
                  {item}
                </li>
              })
            }
          </ul>
        </Fragment>
    )
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handlebtnClick(){
    this.setState({
      // 展开运算符，来拼接数组
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index){
    // immutable 概念
    // state 不允许我们做任何改变，考虑用副本修改
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }

}
export default TodoList;