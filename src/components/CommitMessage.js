import React from 'react';
import PropTypes from 'prop-types';

const CommitMessage = ({ commit }) => <td className="commit-message">{commit.message}</td>;
CommitMessage.propTypes = {
  commit: PropTypes.object,
};
export default CommitMessage;
