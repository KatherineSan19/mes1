import React, { Component } from 'react';

import './App.css';

import Formulario from './componentes/Formulario.js';
import {usuarios} from './usuarios.json';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

class App extends Component {
  constructor(){
    super();
    this.state = {
      usuarios
    }
  }
  render() {
    const usuarios= this.state.usuarios.map((usuario, i)=>{
      return(
        <div style={{ padding: '30px' }}>
          <Col span={8}>
            <Card className="alumnos1">
              <Meta title={usuario.nombre} description={usuario.semestre}/>
            </Card>
          </Col>
        </div>
      )
    })
    return (
        <div>
        <nav className="navegacion">
          <a href="">
          Alumnos
          </a>
        </nav>
        <div className="alumnos">
         <Row>
         {usuarios}
         </Row>
         </div>
        </div>
    );
  }
}

export default App;
