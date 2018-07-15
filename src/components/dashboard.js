import React, { Component } from 'react';

import TabNav from './tabNav';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tabs: [
        {
          title: 'Newsletter',
          active: true,
          component: <h4>Hello, Newsletter</h4>
        },
        {
          title: 'Requests',
          active: false,
          component: <h4>Hello, Requests</h4>
        }
      ]
    }
  }
  
  handleTabChange = (title) => {
    
  }
  
  render() {
    return (
      <div className="dashboard">
        <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs} />
      </div>
    );
  }
}

export default Dashboard;