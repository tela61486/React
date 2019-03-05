import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation, Textfield, Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from "react-mdl";
import { Tab as TabRb, Tabs } from 'react-bootstrap';


class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    //alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <TabRb eventKey={1} title="Tab 1">
          Tab 1 content
        </TabRb>
        <TabRb eventKey={2} title="Tab 2">
          Tab 2 content
        </TabRb>
        <TabRb eventKey={3} title="Tab 3" disabled>
          Tab 3 content
        </TabRb>
      </Tabs>
    );
  }
}

class Demo extends React.Component {
  constructor(props) {
      super(props)
      this.state = { activeTab: 2 };
  }

  render() {
      return (
          <div style={{height: '300px', position: 'relative'}}>
              <Layout fixedHeader>
                  <Header>
                      <HeaderRow title="Title" />
                      <HeaderTabs ripple activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                          <Tab>Tab1</Tab>
                          <Tab>Tab2</Tab>
                          <Tab>Tab3</Tab>
                          <Tab>Tab4</Tab>
                          <Tab>Tab5</Tab>
                          <Tab>Tab6</Tab>
                      </HeaderTabs>
                  </Header>
                  <Drawer title="Title" />
                  <Content>
                      <div className="page-content">Content for the tab: {this.state.activeTab}</div>
                  </Content>
              </Layout>
          </div>
      );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

       {/* The drawer is always open in large screens. The header is always shown, even in small screens. */}
       {/*}
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Title">
            <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
            />
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
      <div>
      <Demo />
      </div> */}
      <div>
        <ControlledTabs/>
      </div>
      </div>
    );
  }
}




export default App;
