import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';

export const ListQuestionnaires = ({ rol }) => {
useState [questionnaires, setQuestionaires] = useState([]);
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const { data } = await axios.get("http://localhost:4000/questionnaires/get-all");
            setQuestionnaires(data.questionnaires);
        } catch (error) {
            console.log(error)
            alert("Hubo un error al obtener los cuestionarios")
        }
    }


    return (
        <Container>
            <Row>
                {
                    questionnaires.map(({ name, description }, i) => (
                        <Col>
                            <Card style={{ width: "15rem" }} className='mb-3'>
                                <Card.Body>
                                    <a href={`/create-questionnaires/${i}`}
                                        style={{ textDecoration: "none", color: "black" }}>
                                        <Card.Img src="https://cdn-icons-png.flaticon.com/512/3913/3913648.png" />
                                    </a>
                                    <Row className='m-1'>
                                        <Col xs={8}>
                                            <Card.Title>
                                                {name}
                                            </Card.Title>
                                        </Col>
                                        {
                                            rol == "client" && (
                                                <Col className='text-center'>
                                                    <Dropdown variant="outline-primary">
                                                        <Dropdown.Toggle></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Eliminar</Dropdown.Item>
                                                            <Dropdown.Item>Editar</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            )
                                        }

                                    </Row>
                                    <Row>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
