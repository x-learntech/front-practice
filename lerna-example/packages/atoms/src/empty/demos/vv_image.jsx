/**
 * title: vv 核心库提供 默认图片
 * desc: 可以通过设置 image 为 Empty.xxx 切换图片类型
 */
import React from 'react';
import { Row, Col, Empty, Divider } from '@xx-desktop-web-core/atoms';

export default () => (
    <>
        <Row>
            <Col span={12}>
                <Empty image={Empty.NO_DATA} description="推荐缺省文案：空状态/暂无数据/暂无好友请求/暂无联系人/暂无申请" />
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_SEARCH_RESULT} description="推荐缺省文案：暂无搜索结果/无XXXXXX搜索数据"  />
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_APPROVAL} description="推荐缺省文案：暂无审批"/>
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_DEVELOPED} description="推荐缺省文案：敬请期待" />
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_MESSAGE}  description="推荐缺省文案：全部成员已读/未读"/>
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_NETWORK} description="推荐缺省文案：网络未连接/网络已断开" />
            </Col>
            <Col span={12}>
                <Empty image={Empty.DATA_LOAD_FAIL} description="推荐缺省文案：数据加载失败，请刷新重试"/>
            </Col>
            <Col span={12}>
                <Empty image={Empty.DATA_LOADING} description="推荐缺省文案：数据加载中" />
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_RELEASE} description="推荐缺省文案：暂无发布/暂无屏蔽公司/暂无明细/提交失败/日程空数据" />
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_PERMISSION} description="推荐缺省文案：系统升级维护中/页面维护中/暂无权限" />
            </Col>
            <Col span={12}>
                <Empty image={Empty.NO_UPLOAD_FILE} description="推荐缺省文案：文件夹是空的/暂无附件/存储" />
            </Col>
            <Col span={12}>
                <Empty image={Empty.PAGE_NOT_FOUND} description="推荐缺省文案：页面不存在" />
            </Col>
        </Row>
    </>
)
