import { React, useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import AddItemBTN from '../AddItemBTN/AddItemBTN';

const ProductsCard = (props) => {
  return (
    <Card>
      <Image src="/images/anyahe.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>安妮娘</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
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
};

export default ProductsCard;
