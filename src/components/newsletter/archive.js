import React, { Component } from 'react';

import { connect } from 'react-redux';

import History from '../../history';

function ArchiveItem({title, date, _id, callback}) {
  return (
    <div className="archiveItem">
      <a onClick={() => callback(_id)} className="archiveItem-title">{title}</a>
      <div className="archiveItem-date">
        {/* 2000 for the year, to be fixed if used in a different era.
            + 1 for Month is an index.
        */}
        {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() - 2000}`}
      </div>
    </div>
  );
}

class Archive extends Component {
  render() {
    return (
      <div className="archive">
        <h3 className="archive-title">Archive</h3>
        <div className="archive-items">
          {
            this.props.newsletters.map(newsletter => {
              return <ArchiveItem callback={(id) => History.push(`/newsletter/detail/${id}`)} key={newsletter._id} {...newsletter} />;
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newsletters } = state.newsletters;
  return {
    newsletters
  };
}

export default connect(mapStateToProps)(Archive);