import React from 'react';
import Wrapper, {
  Header,
  Content,
  Footer,
  Sidebar,
  SidebarItem,
  MainContent,
  MainItem,
} from '../components/common/layouts/Container/Container';

import Menu from '../components/Menu/Menu';
import Filter from '../components/Filter/Filter';
import ProfileEdit from '../components/ProfileEdit/ProfileEdit';
import UserGH from '../components/UserGH';
import './main.pcss';

const Main = () =>
  <Wrapper>
    <Header>
      <Menu />
    </Header>
    <Content>
      <Sidebar>
        <SidebarItem>
          <Filter />
        </SidebarItem>
      </Sidebar>
      <MainContent>
        <MainItem>
          <div>Forms will be here (everywhere)</div>
        </MainItem>
        <MainItem>
          <div>This one should work</div>
        </MainItem>
        <MainItem>
          <UserGH/>
        </MainItem>
        <MainItem>
          <ProfileEdit/>
        </MainItem>
      </MainContent>
    </Content>
    <Footer>
      <div>hex22a</div>
    </Footer>
  </Wrapper>;

export default Main;
