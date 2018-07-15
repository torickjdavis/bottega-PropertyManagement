import React, { Component } from 'react';

function ArchiveItem({title, date}) {
  return (
    <div className="archiveItem">
      <div className="archiveItem-title">{title}</div>
      <div className="archiveItem-date">{date}</div>
    </div>
  );
}

class Archive extends Component {
  render() {
    return (
      <div className="archive">
        <h3 className="archive-title">Archive</h3>
        <div className="archive-items">
          <ArchiveItem title='ItemTitle' date='ItemDate' />
          <ArchiveItem title='ItemTitle' date='ItemDate' />
          <ArchiveItem title='ItemTitle' date='ItemDate' />
          <ArchiveItem title='ItemTitle' date='ItemDate' />
        </div>
      </div>
    );
  }
}

export default Archive;