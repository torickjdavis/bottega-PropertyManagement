import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

import { ROOT_URL } from '../../config';

class RequestsItem extends Component {
  constructor() {
    super();
    
    this.state = {
      height: 0
    };
  }
  
  toggleDropdown = (event) => {
    let item = event.target.parentElement.parentElement.parentElement; // icon -> anchor -> title -> requestsItem
    item.classList.toggle('background-grey');
    
    if (this.state.height == 0) {
      this.setState({ height: 'auto' });
    } else {
      this.setState({ height: 0 });
    }
  }
  
  render() {
    const { _id, title, body, date, imageUrl} = this.props;
    const parsedDate = new Date(date);
    
    return (
        <div className='requestsItem'>
          <Icon icon='fas fa-exclamation-triangle'/>
          <div className='title'>
            <p>{ title }</p>
            <Icon callback={(event) => this.toggleDropdown(event)} className='arrow' icon='fas fa-sort-down'/>
          </div>
          <div className='tenant-unit'>
            Name - Unit #
          </div>
          <div className='date'>
            {`${parsedDate.getMonth() + 1}/${parsedDate.getDate()}/${parsedDate.getFullYear() - 2000}`}
          </div>
          <Button className='move' callback={() => console.log('Trying to change requestItem status')} icon='fas fa-wrench' />
          <div className='description'>
            <AnimateHeight duration={300} height={this.state.height}>
              <div className='itemDescription'>
                <img src={`${ROOT_URL}/${imageUrl}`}/>
                <p>{ body }</p>
              </div>
            </AnimateHeight>
          </div>
        </div>
      );
  }
}

export default RequestsItem;