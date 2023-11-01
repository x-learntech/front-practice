/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Checkbox, Select as AntSelect } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { ConfigConsumerProps } from 'antd/es/config-provider';
import { ConfigContext } from 'antd/es/config-provider/context';
import { OptionProps, SelectProps as AntSelectProps, SelectValue, RefSelectProps, LabeledValue } from 'antd/es/select';
import classNames from 'classnames';
import { debounce } from 'lodash-es';
import { useControllableValue } from '@vv-desktop-web-core/hooks';
import HighlightText from '../highlight-text';
import { FieldNames } from 'rc-select/es/Select';

export interface SelectProps<T> extends AntSelectProps<T> {
  /** 是否高亮搜索项, 默认是 false */
  highlightSearch?: boolean;
  /** 通过数组的形式注入数据 */
  options?: [];
  fieldNames?: FieldNames;
  onBlur?: (...args: any[]) => void;
}

export interface SelectComponentProps<T>
  extends React.ForwardRefExoticComponent<{ ref?: React.Ref<RefSelectProps> } & SelectProps<T>> {
  fieldNames: FieldNames;
  Option: React.FC<OptionProps>;
}

type PropsIncludeChildren = {
  props: {
    children: [] | string;
  };
};

// 获取富文本节点的所有文本(去空格)
const getOptionLabel = (labelProp: [] | string | PropsIncludeChildren): string => {
  let result = '';
  if (typeof labelProp === 'string') {
    result = labelProp;
  } else if (labelProp instanceof Array) {
    labelProp.forEach(item => {
      result += getOptionLabel(item);
    });
  } else if (labelProp.props?.children) {
    result = getOptionLabel(labelProp.props.children);
  }
  return result.trim();
};

/**
 * 自定义选择器
 * 支持搜索高亮功能
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Select: SelectComponentProps<any> = React.forwardRef<any, SelectProps<any>>(
  (
    {
      className,
      showSearch = false,
      highlightSearch = false,
      onSearch,
      optionLabelProp = 'label',
      options = [],
      fieldNames,
      placeholder,
      children,
      labelInValue = false,
      ...rest
    },
    ref
  ) => {
    const { label: fieldLabel = 'label', value: fieldValue = 'value' } = fieldNames ?? {};
    const isMultiple = rest?.mode === 'multiple';
    const [value = rest.mode === 'multiple' ? [] : undefined, onChange] = useControllableValue<SelectValue>(rest);
    // options 的引用
    const optionRef = useRef<Record<string, any>[]>(options);
    useEffect(() => {
      optionRef.current = options;
    }, [options]);

    const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext as any);
    const prefixCls = getPrefixCls('select-plus');

    const [searchContent, setSearchContent] = useState(''); // 保存搜索关键字
    const setSearchContentDebounce: (val: string) => void = useCallback(debounce(setSearchContent, 200), []); // 性能优化
    // 拦截 onSearch 函数, 在此基础上搜集搜索关键字
    const onSearchProxy = (val: string): void => {
      setSearchContentDebounce(val);
    };
    useEffect(() => {
      if (onSearch) {
        onSearch(searchContent);
      }
    }, [onSearch, searchContent]);
    // 拦截 onChange 函数, 在此基础上清楚搜索关键字
    const onChangeProxy = (val: any, option: React.ReactElement | React.ReactElement[]): void => {
      setSearchContent('');
      return onChange?.(val, option);
    };

    // 是否是 <Option> 注入数据
    const isOptionData = (!optionRef.current || optionRef.current.length === 0) && !!children;
    // 兼容 <Option> 的方式注入 options 的值
    const computedOptions: Record<string, any>[] = useMemo(() => {
      let childrenOption: Record<string, any>[] | null | undefined = null;
      if (isOptionData) {
        childrenOption = React.Children.map(children, (child: any) => {
          const result: Record<string, any> = {};
          if (fieldLabel) {
            result[fieldLabel] = child.props[fieldLabel] || child.props.children;
          }
          result[fieldValue!] = child.props[fieldValue] || child.props.children;
          result.disabled = child.props.disabled;
          result.children = child.props.children;
          return result;
        });
      }
      return childrenOption || optionRef.current;
    }, [children, isOptionData, fieldLabel, fieldValue]);

    // 过滤后的 options
    const filteredOptions: Record<string, any>[] = useMemo(() => {
      if (searchContent) {
        return computedOptions.filter(item => getOptionLabel(item[fieldLabel]).indexOf(searchContent) >= 0);
      }
      return computedOptions;
    }, [fieldLabel, computedOptions, searchContent]);

    // 渲染选项节点
    const renderOption = (item: Record<string, any>) => {
      const labelValue = item.hasOwnProperty(fieldLabel) ? item[fieldLabel] : item[fieldValue];
      return (
        <AntSelect.Option
          value={item[fieldValue]}
          key={item[fieldValue]}
          disabled={item.disabled ?? false}
          label={labelValue}
        >
          {isMultiple && Array.isArray(value) && (
            <Checkbox
              className={`${prefixCls}-multiple-item-checkbox`}
              checked={labelInValue ? (value as LabeledValue[]).map(item => item.value).includes(item[fieldValue] as string) : (value as string[]).includes(item[fieldValue] as string)}
            />
          )}
          {showSearch && highlightSearch ? (
            <HighlightText keywords={searchContent}>{item.children ?? labelValue}</HighlightText>
          ) : (
            labelValue
          )}
        </AntSelect.Option>
      );
    };

    const renderOptions = filteredOptions.map(item => renderOption(item));
    // !isOptionData || highlightSearch ? filteredOptions.map(item => renderOption(item)) : children;

    // 开启搜索时, 覆盖组件属性
    const customSearchProp: Pick<SelectProps<any>, any> = showSearch && highlightSearch
      ? {
          optionLabelProp: optionLabelProp, // 因为 children 有格式化问题, 所以取 label 属性做过滤依据
          optionFilterProp: fieldLabel,
          filterOption: (input: string, option: any) => {
            return getOptionLabel(option[fieldLabel]).toLowerCase().indexOf(input.toLowerCase()) >= 0;
          },
          onSearch: onSearchProxy,
          onChange: onChangeProxy,
          onBlur: isMultiple
            ? e => {
                rest?.onBlur?.(e);
                setSearchContent('');
              }
            : undefined
        }
      : {
          optionLabelProp: optionLabelProp, // 因为 children 有格式化问题, 所以取 label 属性做过滤依据
          onChange
        };
    return (
      <AntSelect
        ref={ref}
        showSearch={showSearch}
        {...rest}
        {...customSearchProp}
        value={value}
        placeholder={placeholder}
        menuItemSelectedIcon={isMultiple ? null : <CheckOutlined />}
        dropdownClassName={classNames(className, `${prefixCls}-dropdown`)}
        labelInValue={labelInValue}
      >
        {renderOptions}
      </AntSelect>
    );
  }
) as SelectComponentProps<any>;

Select.displayName = 'Select';
Select.Option = AntSelect.Option;

export default Select;
