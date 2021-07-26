import React from "react";
import { Modal } from "antd";
import { Input } from "antd";
import { FormatData } from "../utils/time";
import { saveTodos, readTodos } from "./../utils/localStorageUtils";
const { TextArea } = Input;

interface IProps {
  str: string;
  time?: string;
  isModalVisible: boolean;
  closeFn: Function;
  setContent: Function;
  id: number;
}
interface IState {
  content: string;
  time?: string;
}
class Dialog extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      content: "",
      time: "",
    };
  }
  cancel = () => {
    this.props.closeFn();
  };
  closeFunction = () => {
    const data = readTodos();
    const newData = data.filter((item) => this.props.id !== item.id);
    // 删除
    saveTodos(newData);
    this.props.closeFn();
  };
  closeFunctionOk = () => {
    const data = readTodos();
    data.forEach((item) => {
      if (item.id === this.props.id) {
        item.content = this.state.content;
      }
    });
    saveTodos(data);
    const time = new Date();
    this.props.setContent(
      this.state.content,
      FormatData(time, "yyyy-MM-dd-HH:ss:mm")
    );
    this.props.closeFn();
  };
  changeContent = (e: React.MouseEvent | any) => {
    this.setState({
      content: e.target.value,
    });
  };
  componentDidMount() {
    this.setState({
      content: this.props.str,
      time: this.props.time,
    });
  }
  render() {
    return (
      <Modal
        title="修改代办事项"
        okText={'保存'}
        cancelText={'删除'}
        visible={this.props.isModalVisible}
        onCancel={this.closeFunction}
        onOk={this.closeFunctionOk}
      >
        <TextArea
          rows={4}
          value={this.state.content}
          onChange={this.changeContent}
        />
      </Modal>
    );
  }
}
export default Dialog;
