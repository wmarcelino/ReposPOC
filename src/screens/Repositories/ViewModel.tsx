import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchRepo, searchMoreRepos} from '../../services/repos';
import {RootState} from '../../states/store';
import {ScreenProps} from '../../types';
import {TRepo} from './types';
import {View} from './View';

const LIMIT = 10;
export const ViewModel = ({navigation}: ScreenProps<string, any>) => {
  const dispatch = useDispatch();
  const [searchPayload, setSearchPayload] = useState('');

  const {data, error, loading, loadingMore, page, hasMoreToFetch} = useSelector(
    (state: RootState) => state,
  );

  const reposForScreen: TRepo[] =
    data?.map(itemRaw => {
      const stars = Number(itemRaw.stargazers_count) > 1 ? ' stars' : ' star';
      return {
        avatar: itemRaw?.owner?.avatar_url || '',
        startsQuantity: itemRaw.stargazers_count + stars,
        creatorLogin: itemRaw?.owner?.login || '',
        repoName: itemRaw?.name || '',
        url: itemRaw?.html_url || '',
      };
    }) || [];

  const getRepos = useCallback(
    (payload: string) => {
      searchRepo(payload, LIMIT, 1, dispatch);
    },
    [dispatch],
  );

  const getMoreRepos = useCallback(
    (payload: string) => {
      if (hasMoreToFetch) {
        searchMoreRepos(payload, LIMIT, page, dispatch);
      }
    },
    [dispatch, page, hasMoreToFetch],
  );

  const handleTextChange = useCallback((searchText: string) => {
    setSearchPayload(searchText);
  }, []);

  const handleBlur = useCallback(() => {
    getRepos(searchPayload);
  }, [getRepos, searchPayload]);

  const handleCardPress = useCallback(
    (url: string) => {
      navigation.navigate('RepositoryDetail', {
        url,
      });
    },
    [navigation],
  );

  const handleEndReached = useCallback(() => {
    getMoreRepos(searchPayload);
  }, [getMoreRepos, searchPayload]);

  return (
    <View
      error={error}
      searchText={searchPayload}
      loading={loading}
      repos={reposForScreen}
      loadingMore={loadingMore}
      handleEndReached={handleEndReached}
      handleBlur={handleBlur}
      handleTextChange={handleTextChange}
      handleCardPress={handleCardPress}
    />
  );
};
