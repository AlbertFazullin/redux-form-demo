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
          <div>git checkout step-2</div>
        </MainItem>
      </MainContent>
    </Content>
    <Footer>
      <div>hex22a</div>
    </Footer>
  </Wrapper>;

export default Main;
