import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


function MyTags(props) {
  return (
    <Stack direction="horizontal" gap={2}>

      <Badge className="Badges" bg={props.color}>{props.text}</Badge>
    </Stack>
  );
}

export default MyTags;