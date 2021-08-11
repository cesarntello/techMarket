import { Row, Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import CardComponent from "./CardComponent";

export default function Cards ({data}){
    
    
    
    return(
        <div>
        <Container>
        <Row>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
                <Card.Title>{data.nombre}</Card.Title>
                <Card.Text>
               ${data.precio}
                </Card.Text>
                <Button variant="primary">Agregar al carrro</Button>
                <CardComponent/>
        </Card.Body>
        </Card>
        </Row>
        </Container>    
        </div>
    )
}