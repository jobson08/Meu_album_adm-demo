import React from 'react'

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody,
  Col
} from "reactstrap";

function AddImagens() {
    return (
<div className="content">
     
  <Card className="card-add-imag">
  <h1>Adicione uma imagens</h1>
      <CardBody>
        <form>
          <FormGroup>
            <Label for="Titulo">Titulo</Label>
            <Input type="text" name="Titulo" id="Titulo" placeholder="Titulo" />
          </FormGroup>

          <FormGroup>
            <Label for="Descricao">Descrição</Label>
            <Input type="text" name="Descricao" id="Descricao" placeholder="Descrição" />
          </FormGroup>                 
     <form >
     <FormText color="neutral">
            Selecione uma imagens 
    </FormText>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
          </Col> 
    </form>
    <br/>
    <br/>

        <Button color="info" type="submit">
            Enviar
        </Button>
        </form>
      </CardBody>
    </Card>
</div>
    )
}

export default AddImagens
