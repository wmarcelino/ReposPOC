import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledImage = styled(Image)`
  margin-right: 12px;
  border-radius: 50px;
`;

export const UserContainer = styled(View)`
  max-width: 200px;
`;

export const UserLabel = styled(Text)`
  font-size: 14px;
  color: #48484a;
`;

export const RepoLabel = styled(Text)`
  font-size: 16px;
  font-weight: 600;
`;

export const StartsLabel = styled(Text)``;

export const TitleContainer = styled(View)`
  flex-direction: row;
`;
