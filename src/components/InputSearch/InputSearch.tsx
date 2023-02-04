import React from 'react';
import {TInputSearchProps} from './types';

import {InputContainer, StyledInput, StyledSearchIcon} from './styles';

export const InputSearch = (props: TInputSearchProps) => {
  return (
    <InputContainer>
      <StyledSearchIcon />
      <StyledInput {...props} placeholderTextColor={'#3C3C43'} />
    </InputContainer>
  );
};
