import React from 'react';

import {Form, Input, Button} from 'antd';


class Formulario extends React.Component{
  constructor(){
    super();
    this.state={
      nombre:'',
      semestre:'',
      carrera:''
    };
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

handleInput(e){
  const{value,name}=e.target;
  this.setState({
    [name]:value
  })
}

handleSubmit(e){
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
      if (!err) {

        this.props.onAddUsuario(values);
      }
    });

}
  render(){
    const { getFieldDecorator } = this.props.form;

    return(
      <div className="form">
      <Form onSubmit={this.handleSubmit}>
      <Form.Item  label="Nombre">
        {getFieldDecorator(`nombre`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input placeholder="Ingrese su nombre" type="text"/>
            )}

        </Form.Item>

        <Form.Item label="Carrera">
        {getFieldDecorator(`carrera`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input placeholder="Ingrese su carrera" type="text"/>
            )}
        </Form.Item>

        <Form.Item label="Semestre">
        {getFieldDecorator(`semestre`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input placeholder="Ingrese su semestre" type="text"/>
            )}
        </Form.Item>
        <Form.Item>
         <Button htmlType="submit">
           Agregar
         </Button>
       </Form.Item>
      </Form>
      </div>
    );
  }
}
const WrappedFormulario = Form.create({ name: 'validate_other' })(Formulario);
export default WrappedFormulario;
