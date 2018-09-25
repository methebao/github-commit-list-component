import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

import FileListItem from './components/FileListItem';
import testFiles from './models/testFiles';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem file={file} />
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array,
};
ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));
