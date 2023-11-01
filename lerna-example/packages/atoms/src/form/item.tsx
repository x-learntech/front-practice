import React, { useContext } from 'react';
import { Form } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';

const CustomFormItem: typeof Form.Item = ({ label, required, rules, children, ...rest }) => {
  const { locale } = useContext(ConfigContext);

  const newRules = rules ? [...rules] : [];
  // @ts-ignore
  if (required || rules?.some?.(rule => rule.required)) {
    newRules.push({
      validator: (_, value) => {
        if (value && /^\s+$/.test(value)) {
          const message =
            (locale?.Form?.defaultValidateMessages?.required as string)?.replace(
              '${label}',
              typeof label === 'string' ? label : ''
            ) || '不能为空';
          return Promise.reject(message);
        }
        return Promise.resolve();
      }
    });
  }

  // return <>123</>
  return (
    <Form.Item label={label} rules={newRules} {...rest}>
      {children}
    </Form.Item>
  );
};

CustomFormItem.useStatus = Form.Item.useStatus;
export default CustomFormItem;
