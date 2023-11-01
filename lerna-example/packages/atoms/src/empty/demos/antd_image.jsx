/**
 * title: antd 提供图片
 * desc: 可以通过设置 image 为 Empty.PRESENTED_IMAGE_SIMPLE 选择另一种风格的图片。
 */
import React from 'react';
import { Row, Col, Empty } from '@xx-desktop-web-core/atoms';

export default () => (
    <>
        <Row>
            <Col span={12}>
                <Empty/>
            </Col>
            <Col span={12}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Col>
        </Row>
    </>
)
