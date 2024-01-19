import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../Redux/Actions';
import { Link } from 'react-router-dom';

const CardUser=({el})=>{
    const dispatch=useDispatch()

    return(
        <div>
            <Card style={{ width: '18rem' }}>
            
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{el.age}</ListGroup.Item>
                    <ListGroup.Item>{el.email}</ListGroup.Item>
                    <ListGroup.Item>{el.phoneNumber}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link as={Link} to={`/EditUser/${el._id}`} >Edit</Card.Link>
                    <Button onClick={()=>dispatch(deleteUser(el._id))} variant="danger">Delete</Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default CardUser