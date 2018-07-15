import React, { Component } from 'react';

class TabNav extends Component {
  render() {
    return(
      <div className="tabNav">
        <nav>
          {
            this.props.tabs.map((tab, index) => {
              return (
                <a key={index} onClick={() => this.props.handleClick(tab.title)} className="tab">{ tab.title }</a>
              );
            })
          }
        </nav>
          {
            this.props.tabs.map((tab, index) => {
              if(tab.active) {
                return (
                  <div key={index} class="component">
                    {tab.component}
                  </div>
                );
              }
            })
          }
      </div>
    );
  }
}

export default TabNav;