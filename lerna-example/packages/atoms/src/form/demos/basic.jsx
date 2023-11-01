/**
 * title: 基本使用
 * desc: 按规范调整样式。
 */

import React from 'react';
import { ConfigProvider, Input, Button, Radio, Checkbox, DatePicker, Select, Divider, Row, Col } from '@xx-desktop-web-core/atoms';
import enUS from 'antd/es/locale/en_US';
// import zhCN from 'antd/es/locale/zh_CN';
import Form from '../index';

const Basic = () => {
  const onFinish = values => {
    console.log('表单的值：', values);
  };
  return (
    <div>
      <ConfigProvider locale={enUS}>
        <div className="itemWrap">
          <h2>垂直分布：</h2>
          <p>
            表单宽度（标题宽度 &
            编辑项宽度）宽度自适应：若直接使用，使用布局规范定义比例，嵌套使用则根据容器宽度定义比例。
          </p>
          <p> 编辑项上下间留白 24，编辑框组合间留白 12，编辑框与多选/单选组合留白 24 。</p>
          <p>
            两栏规则：一般不建议在两栏表单中，使用超过32高度的编辑项，比如上传头像、文本域等，如需要布局上传和文本域，需要单独陈列不可并排。
          </p>
          <p>基本规范： 混合规则：在混合布局中，建议使用 2+1 ，且避免使用类似 2+1+2 的布局方式。</p>
          <Form layout="vertical" name="nest-messages" labelCol={{ span: 3 }} onFinish={onFinish}>
            <Form.Item name="name" label="姓名" required rules={[{ required: true, message: '请输入姓名' }]}>
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item name="email" label="邮箱" rules={[{ required: true, type: 'email', message: '请输入邮箱' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="地区">
              <Radio.Group>
                <Radio value="厦门"> 厦门 </Radio>
                <Radio value="泉州"> 泉州 </Radio>
                <Radio value="泉州"> 福州 </Radio>
                <Radio value="泉州"> 漳州 </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="日期选项" name={['timeDate', 'checkBoxNow']}>
              <DatePicker />
              <div style={{ width: 24, display: 'inline-block' }} />
              <Checkbox>至今</Checkbox>
            </Form.Item>

            <Form.Item label="组合编辑" name={['timeDate', 'checkBoxNow']}>
              <Input style={{ width: '60%' }} placeholder="请输入" />
              <div style={{ width: 16, display: 'inline-block' }} />
              <Select style={{ width: '30%' }} placeholder="请选择">
                <Select.Option>福建</Select.Option>
                <Select.Option>四川</Select.Option>
                <Select.Option>重庆</Select.Option>
                <Select.Option>上海</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
          <p>隐藏必填</p>
          <Form layout="vertical" name="nest-messages" labelCol={{ span: 3 }} onFinish={onFinish} requiredMark={false}>
            <Form.Item name="name" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item name="email" label="邮箱" rules={[{ required: true, type: 'email', message: '请输入邮箱' }]}>
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Divider />
        <Divider />
        <div className="itemWrap">
          <h2>双栏布局：</h2>

          <Form layout="vertical" name="twoColumns" onFinish={onFinish}>
            <Row gutter={32}>
              <Col span={12}>
                <Form.Item name="name" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={32}>
              <Col span={12}>
                <Form.Item name="name" label="地址" rules={[{ required: true, message: '请输入姓名' }]}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="email" label="邮政" rules={[{ required: true, message: '请输入邮箱' }]}>
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
            <Form.Item>
              <Checkbox.Group style={{ width: '100%' }}>
                <Checkbox value="A">A</Checkbox>
                <Checkbox value="B">B</Checkbox>
                <Checkbox value="C">C</Checkbox>
                <Checkbox value="D">D</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Basic;
