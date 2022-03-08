import ListGroup from 'react-bootstrap/ListGroup';

function CharItem({char}) {

    function sendToProfile(char){
        console.log(char)
    }

    return (
        <ListGroup.Item action onClick={() => sendToProfile(char)}>
            {char.name}
        </ListGroup.Item>
    )
}

export default CharItem;

