import MyTags from './Tags';
import Card from 'react-bootstrap/Card';

function TheCard(props) {
  return (
    <Card id="card" class="col-lg 3 col-md-3  col-sm-12 col-xs-12" border="dark" style={{ width: '16rem'}}>
      <Card.Img class="imgDog" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.descripcion}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <MyTags class="badge" text={props.text} color={props.color}/>
      </Card.Footer>
    </Card>
  );
}

export default TheCard;