import React from 'react'
import { Card } from 'antd';
import Dialog from './dialog'
import "../App.css";
interface IProps {
  time?: string;
  content?: string
}
interface IState {
  time?: string;
  content: string;
  isShow:boolean
}
class Content extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      content: '',
      isShow: false
    }
  }
  handleClick = () => {
    console.log(this.props.content)
  }
  /**
   * @name 删除事件
   * @param { Event } 
   */
  handlerAClick = (e:React.MouseEvent) => {
    // 阻止事件冒泡
    e.stopPropagation();
    this.setState({
      isShow:true
    })
    console.log('你嗲尼玛呢？')
  }
  render(): React.ReactNode {
    return (
      <div className="content--card__main">
        <Card title={this.props.time} bordered={false} className='content--card' onClick={this.handleClick.bind(this)} extra={<a onClick={this.handlerAClick.bind(this)}>删除</a>}>
          <p>{this.props.content}</p>
        </Card>
        <Dialog str={this.state.content} isModalVisible={this.state.isShow} />
      </div>
    )
  }
}

export default Content