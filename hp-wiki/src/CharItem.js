import ListGroup from 'react-bootstrap/ListGroup';

function CharItem({char}) {

    return (
        <ListGroup.Item>
            {char.name}
        </ListGroup.Item>
    )
}

export default CharItem;

