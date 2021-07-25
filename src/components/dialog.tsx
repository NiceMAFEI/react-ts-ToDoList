import React from 'react'
import { Modal } from 'antd'
interface IProps {
  str: string;
  isModalVisible: boolean
}
class Dialog extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }
  render() {
    return (
      <Modal visible={this.props.isModalVisible}></Modal>
    )
  }
}
export default Dialog