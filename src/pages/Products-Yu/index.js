import React from 'react';

import { Container } from 'semantic-ui-react';
import './Products.css';
import ProductsTab from '../../components/ProducutsTab/';
import ProductsCard from '../../components/ProductsCard';

function Products() {
  return (
    <>
      <Container>
        <ProductsTab />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </Container>
    </>
  );
}

export default Products;
