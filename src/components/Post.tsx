import * as React from 'react';
import { Card, Button } from 'react-bootstrap';

type Props = {
  title: string;
  summary: string;
  image: string;
  readMore: string;
};

export const Post: React.FC<Props> = (props: Props) => (
  <div className='p-3'>
    <Card>
      <Card.Img variant='top' src={props.image} alt='eye-catch image' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Button variant='primary' href={props.readMore}>
          Read more...
        </Button>
      </Card.Body>
    </Card>
  </div>
);
