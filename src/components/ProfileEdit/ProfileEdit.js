import React from 'react';

import Input from '../common/inputs/Input/Input';
import Textarea from '../common/inputs/Textarea/Textarea';
import s from './profileEdit.pcss';

const ProfileEdit = () =>
  <div className={ s.wrapper }>
    <form>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          Username
        </h4>
        <Input
          type="text"
          placeholder="John Doe"
        />
      </div>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          Password
        </h4>
        <Input
          type="password"
        />
      </div>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          About
        </h4>
        <Textarea placeholder="About"/>
      </div>
      <div className={ s.filterBottom }>
        <button type="submit" className={ s.btnApply }>
          Submit
        </button>
        <button
          type="button"
          className={ s.btnReset }
        >
          Reset
        </button>
      </div>
    </form>
  </div>;

export default ProfileEdit;
