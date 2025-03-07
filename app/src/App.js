import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import  {useNavigate} from "react-router-dom";

const App = () => {
  const [data, setData] = useState({});
const navigate = useNavigate();
  const onChange = (e) => {
    e.preventDefault();
    const loginData = data;
    loginData[e.target.name] = e.target.value;
    setData(loginData)
  }

  const onSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000".data);
      const user = res.data.user;
      user.logined = ture;
      localStorage.user = JSON.stinggify(user)
      if(user.rol == "administrator"){
        navigate("/home")
      }else{
        navigate("/list-q")
      }
      navigate("/list-q")

    if (response.status === 200){
        alert("correcto");
      }else{
        alert("incorrecta");
      }
    }catch (error){
      alert ("incorrecta");
      console.error("error al enviar los datos:".error);
    }
    //Peticion a la DB
    console.log(data)
  };

  return (
    <Container className="mt-3">
      <Card className="mb-5" style={{ width: "30rem", margin: "auto" }}>
        <Card.Body>
          <Card.Title className="text-center">
            Bienvenido a cuestionarios UTMA
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Correo electronico:</Form.Label>
              <Form.Control placeholder="Ingresa tu correo electronico" type="email" name="email" onChange={onChange} /* Texto informativo para el usuario */ />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control placeholder="Ingresa tu contraseña" type="password" name="password" onChange={onChange} />
            </Form.Group>

            <Row className="text-center">
              <Col>
                <Button onClick={() => onSubmit()}>Ingresar</Button>
              </Col>
              <Col>
                <p>¿No tienes cuenta? <a href="/register-user">¡Registrate!</a></p>

              </Col>
            </Row>
            <Row>
              <p>¿Olvidaste tu contraseña? <a href="/recover-password">Recuperala aquí</a></p>
            </Row>

          </Form>
        </Card.Body>
      </Card>

    </Container>
  );
}

export default App;
