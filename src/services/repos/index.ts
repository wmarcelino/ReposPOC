import {GET_MORE_REPOS_SUCCESS} from './../../states/repos/actions';
import {
  GET_MORE_REPOS,
  GET_MORE_REPOS_FAILURE,
} from '../../states/repos/actions';
import {Dispatch} from '@reduxjs/toolkit';
import {apiRepos} from '../../api';
import {
  GET_REPOS,
  GET_REPOS_FAILURE,
  GET_REPOS_SUCCESS,
} from '../../states/repos/actions';
import {ResponseRaw} from './types';
export const searchRepo = async (
  payload: string,
  perPage: number,
  page: number,
  dispatch: Dispatch<any>,
) => {
  try {
    dispatch({type: GET_REPOS});
    const responseRaw = await apiRepos.get<ResponseRaw>(
      `${payload}&per_page=${perPage}&page=${page}`,
    );
    dispatch({type: GET_REPOS_SUCCESS, payload: responseRaw.data.items});
  } catch (error: any) {
    dispatch({
      type: GET_REPOS_FAILURE,
      error: error?.message || 'Erro desconhecido',
    });
  }
};

export const searchMoreRepos = async (
  payload: string,
  perPage: number,
  page: number,
  dispatch: Dispatch<any>,
) => {
  try {
    dispatch({type: GET_MORE_REPOS});
    const responseRaw = await apiRepos.get<ResponseRaw>(
      `${payload}&per_page=${perPage}&page=${page + 1}`,
    );

    dispatch({type: GET_MORE_REPOS_SUCCESS, payload: responseRaw.data.items});
  } catch (error: any) {
    dispatch({
      type: GET_MORE_REPOS_FAILURE,
      error: error?.message || 'Erro desconhecido',
    });
  }
};
export default searchRepo;
