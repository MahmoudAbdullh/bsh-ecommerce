import React, { useState } from 'react';
import { Input, Button, Empty, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { AiOutlineClose } from 'react-icons/ai';
import searchImg from '../assets/images/icons/search-user.png';
import infoImg from '../assets/images/icons/info-user.png';
import emptyImg from '../assets/images/icons/noun_Empty.png';
import product1 from '../assets/images/product1.jpg';
import kidImg from '../assets/images/kid Image.png';

const HomeSideBar = () => {
  const [items, setItems] = useState([
    {
      id: 'p-1',
      title: 'عصير تفاح 250مل',
      price: 12,
      qty: 2,
      image: product1,
    },
    {
      id: 'p-0',
      title: 'عصير تفاح 250مل',
      price: 12,
      qty: 1,
      image: product1,
    },
  ]);

  return (
    <>
      <div className="side-bar-top">
        <Input
          placeholder="اسم الطالب"
          // prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
        <Button type="primary" className="search">
          <img src={searchImg} alt="" />
        </Button>
        <Button type="primary" className="info">
          <img src={infoImg} alt="" />
        </Button>
      </div>
      <div className="side-bar-body">
        {items.length === 0 ? (
          <Empty image={emptyImg} description="يجب عليك اختيار طالب اولا" />
        ) : (
          <Card bordered={false}>
            <div className="card-header">
              <div className="user-info">
                <img src={kidImg} alt="" />
                <div>
                  <p>الرقم المقصفي 135</p>
                  <p>محمد بن بندر الوشيقيرى</p>
                </div>
              </div>
              <Button
                type="primary"
                shape="circle"
                icon={<AiOutlineClose />}
                onClick={() => setItems([])}
              />
            </div>
            <div className="card-inner-body">
              <p className="title">{items.length} منتجات</p>
              {items.map((item) => (
                <div className="item">
                  <div className="item-info">
                    <img src={product1} alt="" />
                    <div>
                      <p>{item.title}</p>
                      <p>
                        {item.price} ريال X{item.qty}
                      </p>
                    </div>
                  </div>
                  <div className="item-action">
                    <Button
                      type="primary"
                      danger
                      shape="circle"
                      icon={<AiOutlineClose />}
                    />
                    <p>{item.price * item.qty} ريال</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
      <div className="side-bar-footer">
        {items.length > 0 && (
          <div className="footer-content">
            <div className="info">
              <p>الملاحظات</p>
              <p>يفضل تاريخ صلاحية حديث</p>
            </div>
            <div className="info">
              <p>عمولة التطبيق</p>
              <p>2.50 ريال</p>
            </div>
            <div className="total">
              <p>المجموع</p>
              <p>
                22.50 <span>ريال</span>
              </p>
            </div>
            <Button type="primary" size="large">
              شراء
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeSideBar;
