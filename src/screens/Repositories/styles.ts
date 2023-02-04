import {Text, View, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: #ffffff;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 50px;
`;

export const Title = styled(Text)`
  font-size: 34px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const DashDivisor = styled(View)`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 10px;
  margin-left: 52px;
  border-width: 1px;
  border-color: #ebebeb;
`;
