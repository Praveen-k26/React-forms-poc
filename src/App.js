import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Request from './Request';
import Review from './Review';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
          name: props.name,
          number: props.number,
       
      newForm: ''
  };
    this.Request = this.Request.bind(this)
    this.callback = this.callback.bind(this)
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  Request(filterValue) {
    this.setState({
      number : filterValue
    })
  }

  callback(filterValue){
    this.setState({
      name: filterValue
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Request
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Review
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Request  callback={this.callback}  Request={this.Request}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Review name={this.state.name} number={this.state.number} />
              </Col>
              
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;