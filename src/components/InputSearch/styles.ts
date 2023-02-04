import {View} from 'react-native';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import SearchIcon from '../..//assets/icons/search.svg';

export const InputContainer = styled(View)`
  background-color: #7676801f;
  border-radius: 10px;
  padding: 8px;
  flex-direction: row;
`;

export const StyledInput = styled(TextInput)`
  flex: 1;
  margin-left: 8px;
  font-size: 17px;
  text-justify: center;
  font-weight: 400;
`;

export const IconContainer = styled(View)``;

export const StyledSearchIcon = styled(SearchIcon)``;
