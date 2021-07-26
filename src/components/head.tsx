import React from "react";
interface IState {
  title: string;
}
interface IProps {
  title?: string;
}
class Head extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "待办事项管理",
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1 style={{ textAlign: "center", width: "100%" }}>
          {this.state.title}
        </h1>
        <ul>
          <li>点击新增进行添加</li>
          <li>点击卡片操作</li>
          <li>出现弹框可进行删除、修改</li>
          <li>可记录操作时的时间</li>
        </ul>
      </div>
    );
  }
}
export default Head;
