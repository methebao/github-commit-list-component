import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ type }) => {
  let defaultIcon = <i className="fa fa-file" />;
  switch (type) {
    case 'folder':
      defaultIcon = <i className="fa fa-folder" />;
    default:
      break;
  }
  return <span className="file-icon">{defaultIcon}</span>;
};
const FileName = ({ name, type }) => (
  <td className="file-name">
    <FileIcon type={type} />
    {name}
  </td>
);
export default FileName;
