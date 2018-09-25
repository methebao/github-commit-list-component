import React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ type }) => {
  let defaultIcon = <i className="fa fa-file" />;
  switch (type) {
    case 'folder':
      defaultIcon = <i className="fa fa-folder" />;
      break;
    default:
      break;
  }
  return <span className="file-icon">{defaultIcon}</span>;
};
FileIcon.proptTypes = {
  type: PropTypes.string,
};
const FileName = ({ name, type }) => (
  <td className="file-name">
    <FileIcon type={type} />
    {name}
  </td>
);
FileName.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};
export default FileName;
