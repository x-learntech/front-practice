/**
 * title: 图片显示
 * desc: 简单展示
 */
import React from 'react';
import { Image } from '@xx-desktop-web-core/atoms';

export default () => (
  <>
    <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
    <br />
    <br />
    <p>业务端展示的基础缺省比例</p>
    <Image src="error" height={104} width={208} />
    <br />
    <Image src="error" height={104} width={104} />
    <br />
    <Image src="error" height={202} width={360} />
    <br />
  </>
);
