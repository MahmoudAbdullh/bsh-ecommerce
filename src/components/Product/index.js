import { Card, Tag, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BiRun } from 'react-icons/bi';
import { MdAddCircle } from 'react-icons/md';

const Product = ({ product }) => {
  return (
    <Card bordered={false} className="product-card" style={{ width: 166 }}>
      <div className="card-title">
        <Button type="text" shape="circle" icon={<InfoCircleOutlined />} />
        <Tag color="#13a69a">
          200 Kcal
          <BiRun />
        </Tag>
      </div>
      <div className="product-image-wrapper">
        <img src={product.image} alt="" />
      </div>
      <p>{product.title}</p>
      <p>
        الكمية بالمخزون: <span className="stock">{product.stock}</span>
      </p>
      <div className="footer">
        <Button type="text" shape="circle" icon={<MdAddCircle />} />
        ريال : {product.price}
      </div>
    </Card>
  );
};

export default Product;
