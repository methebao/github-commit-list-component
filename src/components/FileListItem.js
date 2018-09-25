import React from 'react';
import PropTypes from 'prop-types';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName name={file.name} type={file.type} />
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};
export default FileListItem;
