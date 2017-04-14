import { SubmissionError } from 'redux-form';

const submit = ({ username, password }) => {
  if (!password || password.length < 6) {
    throw new SubmissionError({ password: 'Password must be at least 6 characters', _error: 'Submit failed' });
  }
  if (!username) {
    throw new SubmissionError({ username: 'Username can not be empty', _error: 'Submit failed' });
  }
};

export default submit;
