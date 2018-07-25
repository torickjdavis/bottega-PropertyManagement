import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {
  render() {
    return (
        <div className='requestsItem'>
          <Icon icon='fas fa-exclamation-triangle'/>
          <div className='title'>
            <p>Hey, the thing is broken.</p>
            <Icon className='arrow' icon='fas fa-sort-down'/>
          </div>
          <div className='tenant-unit'>
            Name - Unit #
          </div>
          <div className='date'>
            mm/dd/yy
          </div>
          <Button className='move' callback={() => console.log('Trying to change requestItem status')} icon='fas fa-wrench' />
          <div className='description'>
            <img src='http://via.placeholder.com/160x94'/>
            <p>lorem ipsum, need some text umm... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          </div>
        </div>
      );
  }
}

export default RequestsItem;