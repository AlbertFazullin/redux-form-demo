import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Select from '../common/inputs/Select/Select';
import CheckBox from '../common/inputs/CheckBox/CheckBox';
import Radios from '../common/inputs/Radios/Radios';
import Input from '../common/inputs/Input/Input';
import RangeSlider from '../common/inputs/RangeSlider/RangeSlider';
import s from './filter.pcss';

import submit from './submit';

const checkbox = [
  {
    fields: [
      { name: 'remote', label: I18n.t('uikit.jobs.search.work_types.remote') },
      { name: 'exclude_travels', label: I18n.t('uikit.jobs.search.work_types.exclude_travels') },
    ],
  },
  {
    fields: [
      { name: 'student', label: I18n.t('uikit.jobs.search.career_levels.student') },
      { name: 'entry', label: I18n.t('uikit.jobs.search.career_levels.entry') },
      { name: 'experienced', label: I18n.t('uikit.jobs.search.career_levels.experienced') },
      { name: 'management', label: I18n.t('uikit.jobs.search.career_levels.management') },
      { name: 'executive', label: I18n.t('uikit.jobs.search.career_levels.executive') },
    ],
  },
];

const radios = [
  {
    fields: [
      { name: 'relevance', label: I18n.t('uikit.jobs.search.sort_by.relevance') },
      { name: 'date', label: I18n.t('uikit.jobs.search.sort_by.date') },
      { name: 'salary', label: I18n.t('uikit.jobs.search.sort_by.salary') },
    ],
  },
];

const options = [
  { value: 'All Industries', label: 'All Industries' },
  { value: 'Accounting & Auditing', label: 'Accounting & Auditing' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Airlines / Aviation', label: 'Airlines / Aviation' },
  { value: 'Alternative Medicine', label: 'Alternative Medicine' },
  { value: 'Animation', label: 'Animation' },
  { value: 'Apparel & Fashion', label: 'Apparel & Fashion' },
  { value: 'Architecture & Planning', label: 'Architecture & Planning' },
  { value: 'Arts & Crafts', label: 'Arts & Crafts' },
  { value: 'Automotive', label: 'Automotive' },
  { value: 'Aviation & Aerospace', label: 'Aviation & Aerospace' },
  { value: 'Banking', label: 'Banking' },
];

class Filter extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  render () {
    const { reset, handleSubmit } = this.props;

    return (
      <div className={ s.wrapper }>
        <form onSubmit={ handleSubmit(submit) }>
          <div onClick={ this._closeFilters } className={ s.back }>
            <div className={ s.back__arrow }>
              <object type="image/svg+xml" data="/i-arrow-back.svg" />
            </div>
            <div className={ s.back__title }>BACK</div>
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.location')}
            </h4>
            <Field
              component={ Input }
              type="text"
              placeholder="Placeholder"
              name="location"
            />
            <div className={ s.rangeSliderWrap }>
              <h4 className={ s.rangeSliderTitle }>
                {I18n.t('uikit.jobs.search.filters.within')}
              </h4>
              <div className={ s.rangeSlider }>
                <Field
                  component={ RangeSlider }
                  name="within"
                />
              </div>
            </div>
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.industries')}
            </h4>
            <Field
              component={ Select }
              name="industries"
              placeholder="Placeholder"
              options={ options }
              multi={ true }
            />
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.departments')}
            </h4>
            <Field
              component={ Select }
              name="departments"
              placeholder="Placeholder"
              options={ options }
              multi={ true }
            />
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.salary_from')}
            </h4>
            <div className={ s.filterItemParts }>
              <div className={ s.filterItemLeft }>
                <Field
                  component={ Input }
                  type="text"
                  placeholder="Placeholder"
                  name="salary"
                />
              </div>
              <div className={ s.filterItemRight }>
                <Field
                  component={ Select }
                  name="salary_from_dd"
                  placeholder="Placeholder"
                  options={ options }
                  multi={ true }
                />
              </div>
            </div>
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.work_type')}
            </h4>
            <Field
              component={ Select }
              name="work_type_dd"
              placeholder="Placeholder"
              options={ options }
              multi={ true }
            />
            <div className={ s.divider }>_</div>
            <Field
              component={ CheckBox }
              fields={ checkbox[0].fields }
              name="work_type_cb"
            />
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.career_level')}
            </h4>
            <Field
              component={ CheckBox }
              fields={ checkbox[1].fields }
              name="career_level"
            />
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.years_experience')}
            </h4>
            <Field
              component={ Select }
              name="years_experience"
              placeholder="Placeholder"
              options={ options }
              multi={ true }
            />
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.education')}
            </h4>
            <Field
              component={ Select }
              name="education"
              placeholder="Placeholder"
              options={ options }
              multi={ false }
            />
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.exclude_from_search')}
            </h4>
            <Field
              component={ Input }
              type="text"
              placeholder="Placeholder"
              name="exclude_from_search"
            />
          </div>
          <div className={ s.filterItem }>
            <h4 className={ s.filterTitle }>
              {I18n.t('uikit.jobs.search.filters.sort_by')}
            </h4>
            <Field
              component={ Radios }
              fields={ radios[0].fields }
              name="sort_by"
            />
          </div>
          <div className={ s.filterBottom }>
            <button type="submit" className={ s.btnApply }>
              {I18n.t('uikit.jobs.search.filters.apply')}
            </button>
            <button
              type="button"
              onClick={ reset }
              className={ s.btnReset }
            >
              {I18n.t('uikit.jobs.search.filters.reset')}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'filterJobs',
  initialValues: {
    within: 5,
  },
})(Filter);
