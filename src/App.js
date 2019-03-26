import React, { Component } from 'react';

import './App.css';

import Formulario from './componentes/Formulario.js';
import {usuarios} from './usuarios.json';

import { Card, Col, Row, Icon, Button} from 'antd';


class App extends Component {
  constructor(){
    super();
    this.state = {
      usuarios
    };
    this.handleAddDatos=this.handleAddDatos.bind(this);
  }

handleAddDatos(usuario){
  console.log(usuario)
  this.setState({
    usuarios:[...this.state.usuarios, usuario ]
  })
}

handleRemoveDatos(index){
  if(window.confirm('¿Desea eliminar el elemento seleccionado?')){
    this.setState({
      usuarios: this.state.usuarios.filter((e, i)=>{
        return i!== index
      })
    })
  }
}

  render() {
    const usuarios= this.state.usuarios.map((usuario, i)=>{
      return(
          <Col span={6} className="tarjetas" key={i}>
            <Card className="alumnos1" title={usuario.nombre} actions={[<Button type="dashed" icon="delete" onClick={this.handleRemoveDatos.bind(this, i)}></Button>]}>
              <h4>Semestre: {usuario.semestre}</h4>
              <p>{usuario.carrera}</p>
            </Card>
          </Col>
      )
    })
    return (
      <div>
      <nav className="navegacion">
        Alumnos
        <span className="span1">
        <Icon type="user" color="black"/>
        </span>
        <span className="span1">
        {this.state.usuarios.length}
        </span>
      </nav>
        <div className="principal">
        <Formulario onAddUsuario={this.handleAddDatos}/>
        <div className="alumnos">
         <Row>
         {usuarios}
         </Row>
         </div>
        </div>
    </div>
    );
  }
}

export default App;
