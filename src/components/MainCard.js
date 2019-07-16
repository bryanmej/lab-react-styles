import React from 'react'
import { Card } from 'antd';

class MainCard extends React.Component {
  render() {
    return (<div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Grimes" bordered={false} style={{ width: '100%' }}>
      <p>Card Singer</p>
      <p>Card Producer</p>
      <p>Card Elon Musk's ex-girlfriend</p>
    </Card>
  </div>)
  }
}

export default MainCard