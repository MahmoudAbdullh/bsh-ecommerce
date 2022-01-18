import { Col, Row } from 'antd';
import React from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import Products from '../constants/Products';
const Home = () => {
  return (
    <Layout>
      <div className="home-wrapper">
        <Row gutter={8}>
          {Products.map((p) => (
            <Col key={p.id} style={{ marginBottom: 8 }}>
              <Product product={p} />
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
};
export default Home;
