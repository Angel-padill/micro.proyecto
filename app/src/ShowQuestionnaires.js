import { Card, Container } from 'react-bootstrap'
import { ListQuestionnaires } from './components/ListQuestionnaires';
import { useNavigate } from 'react-router-dom';
export const ShowQuestionnaires = () => {
    const user = JSON.parse(localStorage.user);
const navigate = useNavigate();
    return (
        <Container>
            <Card>
                <Card.Body>
                    <h3>bienvenido de nuevo {user.name}</h3>
                    <Card.Title>{user.rol == "administrator" ? "Cuestionarios creados" : "Tus cuestionarios"}</Card.Title>
                    {
                        user.rol == "client" && (
                            <Button onClick={()=> navigate("/create-questionnaire")}
                            >Crear CUestionario</Button>
                        )
                    }
                    <Card.Text><b>Formularios recientes:</b></Card.Text>
                    <ListQuestionnaires rol={user.rol} />
                </Card.Body>
            </Card>
        </Container>
    )
}
