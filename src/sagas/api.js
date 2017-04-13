import request from 'superagent';
import {
  featuredCompaniesUrl,
  searchParamsUrl,
  currentUserUrl,
  changeLocaleUrl,
  jobsSearchUrl,
} from '../actions/urls';

export const fetchFeaturedCompanies = query => request
  .get(`${featuredCompaniesUrl}`)
  .query(query)
  .set('Accept', 'application/json');

export const fetchSearchParams = () => request
  .get(searchParamsUrl)
  .set('Accept', 'application/json');

export const searchJobs = query => request
  .get(jobsSearchUrl)
  .query(query)
  .set('Accept', 'application/json');

export const getCurrentUser = () => request
  .get(currentUserUrl)
  .set('Accept', 'application/json');

export const changeLocale = locale => request
  .get(`${changeLocaleUrl}/${locale}`);
