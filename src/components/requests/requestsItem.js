import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {
  constructor() {
    super();
    
    this.state = {
      height: 0
    };
  }
  
  toggleDropdown = () => {
    if (this.state.height == 0) {
      this.setState({ height: 'auto' })
    } else {
      this.setState({ height: 0 });
    }
  }
  
  render() {
    return (
        <div className='requestsItem'>
          <Icon icon='fas fa-exclamation-triangle'/>
          <div className='title'>
            <p>Hey, the thing is broken.</p>
            <Icon callback={() => this.toggleDropdown()} className='arrow' icon='fas fa-sort-down'/>
          </div>
          <div className='tenant-unit'>
            Name - Unit #
          </div>
          <div className='date'>
            mm/dd/yy
          </div>
          <Button className='move' callback={() => console.log('Trying to change requestItem status')} icon='fas fa-wrench' />
          <div className='description'>
            <AnimateHeight duration={300} height={this.state.height}>
              <div className='description'>
                <img src='http://via.placeholder.com/160x94'/>
                <p>lorem ipsum, need some text umm... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
              </div>
            </AnimateHeight>
          </div>
        </div>
      );
  }
}

export default RequestsItem;