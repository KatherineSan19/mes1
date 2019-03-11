import React from 'react';
import ReactDom from 'react-dom';
import {Form, Select, InputNumber, Switch, Row, Col} from 'antd';
const { Option } = Select;


class Formulario extends React.Component{
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

    normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return(
      <div className="form">
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
      <Form.Item
          label="Usuario"
          hasFeedback
        >
        {getFieldDecorator('select', {
          rules: [
            { required: true, message: 'Porfavor seleccione su nombre!', type: 'array' },
          ],
        })(
            <Select placeholder="Porfavor seleccione su nombre">
            <Option value="tatiana">Tatiana</Option>
            <Option value="diego">Diego</Option>
            <Option value="karla">Karla</Option>
            <Option value="alejandro">Alejandro</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="Materias[multiple]"
        >
          {getFieldDecorator('select-multiple', {
                    rules: [
                      { required: true, message: 'Porfavor seleciones sus materias!', type: 'array' },
                    ],
                  })(
            <Select mode="multiple" placeholder="Porfavor selecciones sus materias">
              <Option value="calculo">Cálculo</Option>
              <Option value="redes">Redes</Option>
              <Option value="baseDatos">Base de Datos</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="Semestre"
        >
          {getFieldDecorator('input-number', { initialValue: 3 })(
            <InputNumber min={1} max={10} />
          )}

        </Form.Item>
        <Form.Item
          label="Switch"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch />
          )}
        </Form.Item>
      </Form>
      </div>
    );
  }
}
const WrappedFormulario = Form.create({ name: 'validate_other' })(Formulario);
export default WrappedFormulario;
