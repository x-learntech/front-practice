import escapeStringRegexp from 'escape-string-regexp';
import React, { CSSProperties, ReactNode } from 'react';

export interface PropsIncludeChildren {
  props: {
    children: [] | string | ReactNode;
  };
}

// 正则元字符兼容
const regAtom = '^\\$.\\*+?=!:|\\/()[]{}';

const insertStr = (source: string | [], start: number, newStr: string) => {
  if (typeof source !== 'string') return source;
  return source.slice(0, start) + newStr + source.slice(start);
};

/**
 * 关键词高亮
 * @param {string|ReactNode} text 需要匹配的文本
 * @param {string} keywords 关键词
 * @param {object} highlightStyle 高亮样式
 * @param {boolean} ignoreCase 忽略大小写
 */
export const highlightText = (
  text: string,
  keywords: string | string[],
  highlightStyle?: CSSProperties,
  ignoreCase?: boolean
): string | [] | ReactNode => {
  let keywordRegExp;
  let _keywords = keywords;
  if (!text) {
    return '';
  }
  // 把字符串类型的关键字转换成正则
  if (keywords) {
    // 兼容正则元字符
    for (const char of regAtom) {
      // @ts-ignore
      if (_keywords.indexOf(char) !== -1) {
        // @ts-ignore
        _keywords = insertStr(_keywords, _keywords.indexOf(char), '\\');
      }
    }

    // 把字符串类型的关键字转换成正则
    if (_keywords) {
      if (_keywords instanceof Array) {
        keywordRegExp = new RegExp(
          _keywords
            .filter(item => !!item)
            .map(text => escapeStringRegexp(text))
            .join('|'),
          ignoreCase ? 'ig' : 'g'
        );
      } else if (typeof _keywords === 'string') {
        keywordRegExp = new RegExp(escapeStringRegexp(_keywords), ignoreCase ? 'ig' : 'g');
      }
    }
  }

  if (text && keywordRegExp) {
    const newData = text.split(keywordRegExp); //  通过关键字的位置开始截取，结果为一个数组
    // eslint-disable-next-line
    const matchWords = text.match(keywordRegExp); // 获取匹配的文本
    const len = newData.length;

    return (
      <>
        {newData.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {item}
            {index !== len - 1 && <mark style={highlightStyle}>{matchWords?.[index]}</mark>}
          </React.Fragment>
        ))}
      </>
    );
  }
  return text;
};

// 递归子组件
export const highlightChildComponent = (
  item: PropsIncludeChildren,
  keywords: string | [],
  highlightStyle: CSSProperties,
  ignoreCase: boolean
) => {
  if (typeof item === 'string') {
    return highlightText(item, keywords, highlightStyle, ignoreCase);
  }
  // children 如果是文本, item.props.children 会等于 'string'
  if (item.props?.children && typeof item.props?.children === 'string') {
    const newItem = { ...item };
    newItem.props = {
      ...newItem.props,
      children: highlightText(newItem.props.children as string, keywords, highlightStyle, ignoreCase)
    };
    return newItem;
  }
  // 如果还有其他元素, 会返回一个数组, 遍历做判断
  if (item.props?.children && item.props?.children instanceof Array) {
    const newItem = { ...item };
    newItem.props = {
      ...newItem.props,
      children: item.props?.children.map((child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          {highlightChildComponent(child as PropsIncludeChildren, keywords, highlightStyle, ignoreCase)}
        </React.Fragment>
      ))
    };
    return newItem;
  }
  return item;
};
