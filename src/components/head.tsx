import React from 'react'
interface IState {
  title:string
}
interface IProps {
  title?:string
}
class Head extends React.Component<IProps, IState> {
  constructor(props:any) {
    super(props)
    this.state={
      title: '待办事项管理'
    }
  }

  render():React.ReactNode {
    return(
      <h1 style={{ textAlign: 'center',width: '100%' }}>{this.state.title}</h1>
    )
  }
}
export default Head