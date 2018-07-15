import React, { Component } from 'react';

class TabNav extends Component {
  render() {
    return(
      <div className="tabNav">
        <nav>
          {
            this.props.tabs.map((tab, index) => {
              return (
                <a className="tab">{ tab.title }</a>
              );
            })
          }
        </nav>
        <div>
          CONTENT
        </div>
      </div>
    );
  }
}

export default TabNav;