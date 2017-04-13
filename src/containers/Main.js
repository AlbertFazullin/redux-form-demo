import React, { Component } from 'react';
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
import Textarea from '../components/common/inputs/Textarea/Textarea';
import './main.pcss';

export default class UI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taValue: '',
    };

    this._handleChangeTA = ::this._handleChangeTA;
  }

  _handleChangeTA(e) {
    this.setState({ taValue: e.target.value });
  }

  render () {
    return (
      <Wrapper>
        <Header>
          <Menu
            onChangeLocale={ this._onChangeLocale }
          />
        </Header>
        <Content>
          <Sidebar>
            <SidebarItem>
              <div>Sidebar</div>
            </SidebarItem>
          </Sidebar>
          <MainContent>
            <MainItem>
              <div>Forms will be here (everywhere)</div>
            </MainItem>
            <MainItem>
              <Textarea
                placeholder="Placeholder"
              />
            </MainItem>
          </MainContent>
        </Content>
        <Footer>
          <div>hex22a</div>
        </Footer>
      </Wrapper>
    );
  }
}
