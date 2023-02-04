import React from 'react';
import {TRepoCardProps} from './types';

import {
  Container,
  StyledImage,
  RepoLabel,
  StartsLabel,
  UserContainer,
  UserLabel,
  TitleContainer,
} from './styles';

export const RepoCard = ({
  image,
  repoName,
  startsQuantity,
  username,
  url,
  handlePress,
}: TRepoCardProps) => {
  return (
    <Container testID="repo-card" onPress={() => handlePress(url)}>
      <TitleContainer>
        <StyledImage source={{uri: image, width: 52, height: 52}} />
        <UserContainer>
          <RepoLabel>{repoName}</RepoLabel>
          <UserLabel>{username}</UserLabel>
        </UserContainer>
      </TitleContainer>

      <StartsLabel>{startsQuantity}</StartsLabel>
    </Container>
  );
};
