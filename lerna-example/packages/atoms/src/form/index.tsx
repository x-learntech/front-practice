import Item from './item';
import Form from 'antd/es/form';
import React from 'react';

const CustomForm: typeof Form = (props) => {
  return <Form {...props} />
}

CustomForm.Item = Item;
CustomForm.useForm = Form.useForm;
CustomForm.useFormInstance = Form.useFormInstance;
CustomForm.useWatch = Form.useWatch;
CustomForm.List = Form.List;
CustomForm.ErrorList = Form.ErrorList;
CustomForm.Provider = Form.Provider;
CustomForm.create = Form.create;

export default CustomForm;
