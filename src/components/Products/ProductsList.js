import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Container, Row, Col } from 'reactstrap';
import { chunk } from 'lodash';

const ProductsList = ({ products, onDelete }) =>
  <Container>
    {chunk(products, 3).map((productsRow, index) => (
      <Row key={index} className="mb-5">
        {productsRow.map(product => (
          <Col sm="4" key={product.id} >
            <Product product={product} onDelete={onDelete} />
          </Col>
        ))}
      </Row>
    ))}
  </Container>

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductsList;
