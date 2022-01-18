import React from 'react';
import { Layout } from 'antd';
import Menu from '../constants/Menu';
import CategoriesList from './CategoriesList';
import HomeSideBarContent from './HomeSideBarContent';

const { Header, Footer, Sider, Content } = Layout;

const HomeLayout = ({ children }) => {
  return (
    <Layout className="layout-wrapper">
      <Layout>
        <Header>
          <CategoriesList />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <ul>
            {Menu.map((m) => (
              <li className={m.class} key={m.id}>
                <m.Icon />
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
        </Footer>
      </Layout>
      <Sider theme="light" width={295} className="home-sidebar" breakpoint="lg">
        <HomeSideBarContent />
      </Sider>
    </Layout>
  );
};

export default HomeLayout;
