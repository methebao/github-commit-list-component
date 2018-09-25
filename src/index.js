import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import testFiles from './models/testFiles';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <tr className="file-list-item" key={file.id}>
          <td className="file-name">{file.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array,
};
ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));
