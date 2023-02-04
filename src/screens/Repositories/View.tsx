import React from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import {InputSearch} from '../../components/InputSearch/InputSearch';
import {RepoCard} from '../../components/RepoCard/RepoCard';
import {StatusBar} from '../../components/StatusBar/StatusBar';
import {Container, DashDivisor, Title} from './styles';
import {ViewProps} from './types';

export const View = ({
  searchText,
  error,
  loading,
  loadingMore,
  repos,
  handleEndReached,
  handleTextChange,
  handleBlur,
  handleCardPress,
}: ViewProps) => {
  return (
    <Container>
      <StatusBar />
      <Title>Repositórios</Title>
      {!loading && (
        <InputSearch
          testID="input-search"
          placeholder="Busca por repositórios"
          onChangeText={text => handleTextChange(text)}
          value={searchText}
          onBlur={handleBlur}
        />
      )}

      {loading && <ActivityIndicator testID="loading" size="large" />}

      {Boolean(error) && <Text testID="error">Houve um erro: {error}</Text>}

      {!loading && (
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginTop: 48}}
          showsVerticalScrollIndicator={false}
          data={repos}
          ItemSeparatorComponent={() => <DashDivisor />}
          onEndReached={handleEndReached}
          renderItem={({item}) => {
            return (
              <RepoCard
                handlePress={handleCardPress}
                image={item.avatar}
                repoName={item.repoName}
                username={item.creatorLogin}
                startsQuantity={item.startsQuantity}
                url={item.url}
              />
            );
          }}
          ListFooterComponent={() => {
            return loadingMore ? <ActivityIndicator size="large" /> : <></>;
          }}
        />
      )}
    </Container>
  );
};
