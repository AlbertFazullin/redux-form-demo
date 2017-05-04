import actionTypes from './actionTypes';

const { GET_FEATURED_COMPANIES_SUCCESS } = actionTypes;

const featuredCompanies = (state = [], { type, payload }) => {
  if (type === GET_FEATURED_COMPANIES_SUCCESS) {
    return payload.companies;
  }

  return state;
};

export default { featuredCompanies };
