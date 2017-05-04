import request from 'superagent';
import usersUrl from '../api/urls';

const getUser = username => request
  .get(`${usersUrl}/${username}`)
  .set('Accept', 'application/json');

export default getUser;
