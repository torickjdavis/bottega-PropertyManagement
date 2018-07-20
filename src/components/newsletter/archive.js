import React, { Component } from 'react';

import { connect } from 'react-redux';

function ArchiveItem({title, date}) {
  return (
    <div className="archiveItem">
      <div className="archiveItem-title">{title}</div>
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
              return <ArchiveItem key={newsletter._id} {...newsletter} />;
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