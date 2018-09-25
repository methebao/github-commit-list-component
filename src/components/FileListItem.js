import React from 'react';
import PropTypes from 'prop-types';
import FileName from './FileName';

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName name={file.name} type={file.type} />
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};
export default FileListItem;
