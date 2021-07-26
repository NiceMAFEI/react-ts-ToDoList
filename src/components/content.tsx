import React from "react";
import { Card } from "antd";
import Dialog from "./dialog";
import {readTodos} from '../utils/localStorageUtils'
import "../App.css";
interface IProps {
  content: string;
  isShow?: boolean;
  time: string;
  id: number;
  updata: Function
}
interface IState {
  time?: string;
  content: string;
  isShow: boolean;
  id: number;
}
class Content extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      content: this.props.content,
      isShow: false,
      time: this.props.time,
      id: 0,
    };
  }
  /**
   * @name 点击卡片
   */
  handleClick = () => {
    this.setState({
      isShow: true,
    });
  };
  /**
   * @name 卡片删除
   */
  closeDialog = () => {

    this.setState({
      isShow: false,
    })
    const data = readTodos()
    this.props.updata(data);
  };
  /**
   * @name 修改后的content
   */
  getContent = (val: string, time: string) => {
    this.setState({
      content: val,
      time: time,
    });
  };
  componentDidMount() {
    this.setState({
      content: this.props.content,
      time: this.props.time,
      id: this.props.id,
    });
  }
  render(): React.ReactNode {
    return (
      <div className="content--card__main">
        <Card
          title={this.state.time}
          bordered={false}
          className="content--card"
          onClick={this.handleClick.bind(this)}
        >
          <p>{this.state.content}</p>
        </Card>
        <Dialog
          str={this.state.content}
          isModalVisible={this.state.isShow}
          closeFn={this.closeDialog}
          setContent={this.getContent}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default Content;
