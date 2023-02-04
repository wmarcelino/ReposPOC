import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {TRepo} from '../types';
import {View} from '../View';

const mockedRepo: TRepo = {
  avatar: '',
  creatorLogin: 'Wesley',
  repoName: 'ReposPOC',
  startsQuantity: '500 starts',
  url: 'www.test.com',
};

describe('Repositories context...', () => {
  test('Should render correctly when loading ', () => {
    const wrapper = render(
      <View
        loading={true}
        repos={[]}
        loadingMore={false}
        searchText={''}
        handleBlur={() => {}}
        handleCardPress={() => {}}
        handleEndReached={() => {}}
        handleTextChange={() => {}}
      />,
    );
    wrapper.getByTestId('loading');
  });

  test('Should render correctly when has an Error retrieving data ', () => {
    const wrapper = render(
      <View
        loading={false}
        repos={[]}
        loadingMore={false}
        searchText={'Houve um erro'}
        handleBlur={() => {}}
        handleCardPress={() => {}}
        handleEndReached={() => {}}
        handleTextChange={() => {}}
      />,
    );
    wrapper.getByTestId('error');
  });

  test('Should render correctly when has data ', () => {
    const wrapper = render(
      <View
        loading={false}
        repos={[mockedRepo]}
        loadingMore={false}
        searchText={'Houve um erro'}
        handleBlur={() => {}}
        handleCardPress={() => {}}
        handleEndReached={() => {}}
        handleTextChange={() => {}}
      />,
    );
    wrapper.getByText(mockedRepo.creatorLogin);
    wrapper.getByText(mockedRepo.repoName);
  });

  test('Should navigate to Webview with the right params when pressing on card', () => {
    const mockedCardSelection = jest.fn();
    const wrapper = render(
      <View
        loading={false}
        repos={[mockedRepo]}
        loadingMore={false}
        searchText={'Houve um erro'}
        handleBlur={() => {}}
        handleCardPress={mockedCardSelection}
        handleEndReached={() => {}}
        handleTextChange={() => {}}
      />,
    );

    const card = wrapper.getByTestId('repo-card');
    fireEvent.press(card);
    expect(mockedCardSelection).toBeCalledWith(mockedRepo.url);
  });
});
