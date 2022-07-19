import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import AddItemBTN from '../AddItemBTN/AddItemBTN';

const ProductsCard = () => (
  <Card>
    <Image src="/images/anyahe.jpg" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="dollar sign" />
        22 
      </a>
      <AddItemBTN />
    </Card.Content>
  </Card>
);

export default ProductsCard;
