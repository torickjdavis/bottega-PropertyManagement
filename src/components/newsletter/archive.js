import React, { Component } from 'react';

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
          <ArchiveItem title='ItemTitle' date={new Date()} />
          <ArchiveItem title='ItemTitle' date={new Date()} />
          <ArchiveItem title='ItemTitle' date={new Date()} />
          <ArchiveItem title='ItemTitle' date={new Date()} />
        </div>
      </div>
    );
  }
}

export default Archive;