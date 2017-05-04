import React, { Component, PropTypes } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import s from './select.pcss';

class Select extends Component {
  static propTypes = {
    input: PropTypes.object,
    multi: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectShow: false,

      options: props.multi ? [] : {},
      values: props.multi ? [] : '',
    };

    this._toggleSelect = ::this._toggleSelect;
    this._selectOption = ::this._selectOption;
    this._updateOptionsAndValue = ::this._updateOptionsAndValue;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.options !== nextProps.options ||
      this.props.input !== nextProps.input) {
      return true;
    }

    return (this.state.selectShow !== nextState.selectShow || this.state.values !== nextState.values );
  }

  _toggleSelect(){
    this.setState({ selectShow: !this.state.selectShow });
  }

  _updateOptionsAndValue(selectedOption, options, values, onChange) {
    const index = values.indexOf(selectedOption.value);
    if (index > -1) {
      options.splice(index, 1);
      values.splice(index, 1);
    } else {
      options.push(selectedOption);
      values.push(selectedOption.value);
    }
    const value = options.reduce((acc, option, index) => {
      if (index === 0) return option.value;

      return `${acc}, ${option.value}`;
    }, '');
    onChange(value);
    this.setState({ options, values });
  }

  _selectOption(e) {
    e.preventDefault();
    const { options, values } = this.state;
    const { input, multi } = this.props;
    const value = e.currentTarget.getAttribute('value');
    const label = e.currentTarget.getAttribute('label');
    if (!multi) {
      this.setState({ selectShow: false, options: { value, label }, values: value });
      input.onChange(value);
    } else {
      this._updateOptionsAndValue({ value, label }, options, values, input.onChange);
    }
  }

  handleClickOutside() {
    this.setState({ selectShow: false });
  }

  render () {
    const { values, selectShow } = this.state;
    const { input, options, placeholder } = this.props;

    return (
      <div className={ s.wrapper }>
        <div className={ s.filterSelect }>
          <div className={ s.selectControl } onClick={ this._toggleSelect }>
            <input
              type="text"
              placeholder={ placeholder }
              { ...input }
              className={ s.filterInput }
            />
            <div className={ s.arrow } />
          </div>
        </div>
        {selectShow &&
          <div className={ s.filterDropDown }>
            <div className={ s.filterDropDownInner }>
              <div className={ s.listDropDownWrap }>
                <ul className={ s.listDropDown }>
                  {options.map(option =>
                    <li
                      key={ option.value }
                      value={ option.value }
                      label={ option.label }
                      onClick={ this._selectOption }
                    >
                      <div className={ s.itemDropDown }>
                        <span className={ values.includes(option.value) ? s.optionCheck__active : s.optionCheck } />
                        <span className={ values.includes(option.value) ? s.optionLabel__active : s.optionLabel }>
                          { option.label }
                        </span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default enhanceWithClickOutside(Select);
