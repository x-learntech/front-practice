/**
 * title: 汇总input新规范
 * desc: Input && TextArea
 */

import React from 'react';

import { Select, Divider, InputNumber } from '@vv-desktop-web-core/atoms';
import Input from '../index';
import './style.css';

const { TextArea, Search } = Input;
const { Option } = Select;

const selectAfter = (
  <Select placeholder="选择">
    <Option value="厦门">厦门</Option>
    <Option value="乌鲁木齐">乌鲁木齐</Option>
    <Option value="上海">上海</Option>
  </Select>
);
export default () => (
  <div className="example-input">
    <h2>尺寸展示：</h2>
    <div>
      <Input
        style={{ width: 240 }}
        size="large"
        placeholder="大尺寸高度40"
        defaultValue="输入显示输入11显示输入显示"
        allowClear
      />
      <p>余白规则：左右间距12px </p>
      <Divider />
      <Input style={{ width: 240 }} size="large" placeholder="大尺寸高度40" defaultValue="输入显示输入11显示输入显示" />
      <Divider />
      <Input style={{ width: 240 }} size="large" placeholder="禁用状态" disabled />

      <Divider />

      <Input placeholder="中尺寸就是默认尺寸高度36" style={{ width: 240 }} />
      <br />
      <br />
      <Input placeholder="中尺寸就是默认尺寸高度36" defaultValue="输入显示" allowClear style={{ width: 240 }} />
      <br />
      <br />

      <Input placeholder="禁用状态" disabled style={{ width: 240 }} />
      <br />
      <br />
    </div>

    <br />
    <Divider />
    <br />

    <h2>固定单位：</h2>
    <p>没有任何前后单位及前后置标签时，纯文本输入框左右间距是12px</p>
    <p>有前后单位或前后置标签时或清除按钮时，右间距是10px</p>
    <div>
      <br />
      <Input style={{ width: 280 }} prefix="单位" defaultValue={'内容内容'} />
      <br /> <div>余白规则：左间距12px，右间距：10px， 左边‘单位’距离内容文本12px</div>
      <br />
      <Input style={{ width: 280 }} prefix="单位" defaultValue={'内容内容1111内容内容内容内容容'} allowClear />
      <br /> <div>删除按钮距离左右的文本间距是8px</div> <br /> <br />
      <br />
      <Input
        style={{ width: 280 }}
        suffix={<span style={{ marginLeft: 12 }}>单位</span>}
        defaultValue={'内容内容1111内容内容内容内容容'}
      />
      <br /> <br />
      <Input style={{ width: 280 }} suffix="单位" defaultValue={'内容内容1111内容内容内容内容容'} allowClear />
      <br /> <br />
    </div>
    <h2>前后置标签（前后置选择框）：</h2>
    <div>
      <br />
      <Input style={{ width: 280 }} addonBefore={selectAfter} defaultValue="内容文本内容文内容文11内容" />
      <Divider />

      <Input style={{ width: 280 }} addonAfter={selectAfter} defaultValue="距离内容文本12px.距离内容文本" />
      <Divider />

      <Input style={{ width: 280 }} addonAfter={selectAfter} defaultValue="距离内容文本12px.距离内容文本" allowClear />
      <Divider />

      <Input
        style={{ width: 280 }}
        addonBefore={selectAfter}
        addonAfter={selectAfter}
        defaultValue="距离内容文本12px.距离内容文本"
      />
      <Divider />

      <Input
        style={{ width: 280 }}
        addonBefore={selectAfter}
        addonAfter={selectAfter}
        allowClear
        defaultValue="距离内容文本12px.距离内容文本"
      />
      <br />
    </div>
    <h2>搜索框：</h2>
    <div>
      <br />
      <Search placeholder="关键词" style={{ width: 224 }} />
      <br />

      <Search defaultValue={'微微'} style={{ width: 224 }} allowClear />
      <br />
    </div>
    <h2>文本域：</h2>
    <div>
      <TextArea
        maxLength={200}
        placeholder="可拖动"
        autoSize={{ minRows: 1 }}
        defaultValue={
          '测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本'
        }
      />
      <br />
      <TextArea
        maxLength={200}
        showCount
        placeholder="可拖动"
        defaultValue={
          '测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本测试文本测试文本文本'
        }
      />
      <br /> <div>余白规则：左右间距12px </div> <br />
      <TextArea style={{ resize: 'none' }} maxLength={200} placeholder="不可拖动" allowClear />
      <br />
      <InputNumber />
    </div>
  </div>
);
