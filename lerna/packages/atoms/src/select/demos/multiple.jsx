/**
 * title: 多选
 * desc: 多选，从已有条目中选择。
 */

import React from 'react';
import { Button, Form, Select } from '@vv-desktop-web-core/atoms';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i += 1) {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`selected ${value}`);
}

export default function Demo() {
  const [form] = Form.useForm();
  return (
    <Form form={form} validateTrigger={['onBlur', 'onChange']}>
      <Form.Item name="demo1" rules={[{ required: true }]}>
        <Select
          showSearch
          highlightSearch
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </Form.Item>
      <Form.Item name="demo2">
        <Select
          mode="multiple"
          disabled
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </Form.Item>
      <Button
        onClick={() => {
          console.log('================>form', form.getFieldsValue());
          form.submit();
        }}
      >
        提交
      </Button>
    </Form>
  );
}
