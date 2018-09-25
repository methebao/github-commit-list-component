import React from 'react';
import PropTypes from 'prop-types';
import FileName from './FileName';
import CommitMessage from './CommitMessage';

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName name={file.name} type={file.type} />
    <CommitMessage commit={file.latestCommit} />
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};
export default FileListItem;
