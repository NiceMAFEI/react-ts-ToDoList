import { saveTodos, readTodos } from "./utils/localStorageUtils";
import React from "react";
import "./App.css";
import Head from "./components/head";
import Content from "./components/content";
import { FormatData } from "./utils/time";
import { Todo } from "./type/ToDo";

class App extends React.Component {
  state = {
    contentShow: false,
    content: "",
    data: readTodos(),
  };
  changeTrue = (val: boolean) => {
    this.setState(
      {
        contentShow: val,
      },
      () => {
        // 更新数据
        this.forceUpdate();
      }
    );
  };
  updata = (data: Todo[]) => {
    console.log(readTodos());
    this.setState(
      {
        data: data,
      },
      () => {
        this.forceUpdate();
      }
    );
  };
  changeContentShow = (e: React.MouseEvent) => {
    this.setState({
      contentShow: false,
    });
    const time = new Date();
    const trueTime = FormatData(time, "yyyy-MM-dd-HH:ss:mm");
    let todoList = readTodos();
    const obj = {
      time: trueTime,
      content: this.state.content,
      id: time.getTime(),
    };
    todoList.push(obj);
    saveTodos(todoList);
    this.updata(todoList);
    this.setState({
      content: "",
    });
  };
  changeInputValue(e: React.MouseEvent | any) {
    this.setState({
      content: e.target.value,
    });
  }
  render() {
    return (
      <div className="site-card-border-less-wrapper flex-center">
        <Head />
        {!this.state.contentShow ? (
          <button onClick={this.changeTrue.bind(this, true)}>新增</button>
        ) : (
          <div>
            <input
              type="text"
              value={this.state.content}
              onChange={this.changeInputValue.bind(this)}
            />
            <button onClick={this.changeContentShow}>确定</button>
          </div>
        )}
        {this.state.data.length === 0 ? (
          <p style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
            暂无数据
          </p>
        ) : (
          this.state.data.map((item, index) => {
            return (
              <Content
                updata={this.updata}
                key={index}
                id={item.id}
                content={item.content}
                time={item.time}
              ></Content>
            );
          })
        )}
      </div>
    );
  }
}

export default App;
