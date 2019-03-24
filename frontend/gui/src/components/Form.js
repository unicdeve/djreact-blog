import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

export default class CustomForm extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const content = e.target.elements.content.value;

    console.log(name, content)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <FormItem label="Title">
            <Input name="name" placeholder="Put a title here" />
          </FormItem>

          <FormItem label="Content">
            <Input name="content" placeholder="Enter some content..." />
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
