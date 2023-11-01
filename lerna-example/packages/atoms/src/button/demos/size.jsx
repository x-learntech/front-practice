/**
 * title: 按钮尺寸
 * desc: 按钮有超大、大、中、小三种尺寸。<br>通过设置 `size` 为 `largeX` `large` `small` 分别把按钮设为超大、大、小尺寸。若不设置 `size`，则尺寸为中。
 */
import { DownloadOutlined } from '@ant-design/icons'
import { Button, Radio, Space } from '@xx-desktop-web-core/atoms'
/* eslint-disable */
import React from 'react'

class ButtonSize extends React.Component {
  state = {
    size: 'middle'
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value })
  }

  render() {
    const { size } = this.state
    return (
      <Space wrap>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="largeX">LargeX</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="middle">Middle</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br/>
        <br/>
        <Button type="primary" size={size} shape="default">
          Primary Button
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed Button
        </Button>
        <br/>
        <Button type="link" size={size}>
          Link Button
        </Button>
        <br/>
        <Button type="primary" shape="circle" icon={<DownloadOutlined/>} size={size}/>
        <Button type="primary" shape="default" size={size}>
          按钮
        </Button>
        <Button type="primary" disabled size={size}>
          按钮
        </Button>
        <Button type="primary" icon={<DownloadOutlined/>} size={size}>
          Icon Button
        </Button>
      </Space>
    )
  }
}

export default ButtonSize
