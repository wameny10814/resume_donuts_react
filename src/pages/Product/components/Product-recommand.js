import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function ProductRecommandCard() {
  return (
    <Card>
      <Image src="../images/pon-de-strawberry.jpeg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>草莓波堤</Card.Header>
        <Card.Description>
          招牌的波堤配上香濃的草莓，Bon appetit~
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>NT$ 35</a>
      </Card.Content>
    </Card>
  );
}

export default ProductRecommandCard