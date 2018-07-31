import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

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
  
  handleStatus = () => {
    const { _id, status } = this.props;
    this.props.changeStatus({_id, status}, () => {
      this.props.fetchRequests();
    });
  }
  
  render() {
    const { title, body, date, imageUrl, status } = this.props;
    const parsedDate = new Date(date);
    
    let moveButtonIcon, mainIcon;
    
    switch(status) {
      case 'pending':
        moveButtonIcon = 'fas fa-wrench';
        mainIcon = 'fas fa-exclamation-triangle';
        break;
      case 'in-progress':
        moveButtonIcon = 'fas fa-check-circle';
        mainIcon = 'fas fa-wrench';
        break;
      case 'complete':
        moveButtonIcon = 'fas fa-exclamation-triangle';
        mainIcon = 'fas fa-check-circle';
        break;
      default:
        moveButtonIcon = 'fas fa-wrench';
        mainIcon = 'fas fa-exclamation-triangle';
        break;
    }
    
    return (
        <div className='requestsItem'>
          <Icon icon={mainIcon}/>
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
          <Button className='move' callback={() => this.handleStatus() } icon={moveButtonIcon} />
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

export default connect(null, actions)(RequestsItem);