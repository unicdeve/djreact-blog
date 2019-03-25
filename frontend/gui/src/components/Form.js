import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

import axios from 'axios';

export default class CustomForm extends Component {

  handleFormSubmit = (e, requestType, articleID) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const content = e.target.elements.content.value;

    switch( requestType ) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
          name,
          content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      
      case 'put':
        return axios.post(`http://127.0.0.1:8000/api/${articleID}/`, {
          name,
          content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.handleFormSubmit(
          e,
          this.props.requestType,
          this.props.articleID
        )}>
          <FormItem label="Title">
            <Input name="name" placeholder="Put a title here" />
          </FormItem>

          <FormItem label="Content">
            <Input name="content" placeholder="Enter some content..." />
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
