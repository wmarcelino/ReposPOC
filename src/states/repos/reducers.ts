import {Item} from './../../services/repos/types';
import {AnyAction} from '@reduxjs/toolkit';
import {
  GET_MORE_REPOS,
  GET_REPOS,
  GET_REPOS_FAILURE,
  GET_REPOS_SUCCESS,
  GET_MORE_REPOS_SUCCESS,
  GET_MORE_REPOS_FAILURE,
} from './actions';

const initialData: Item[] = [];

const initialState = {
  loading: false,
  loadingMore: false,
  error: '',
  data: initialData,
  hasMoreToFetch: true,
  page: 1,
};

const reposReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        page: 1,
        data: initialData,
        loadingMore: false,
        loading: true,
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMore: false,
        data: action.payload as Item[],
        hasMoreToFetch: true,
        error: '',
      };
    case GET_REPOS_FAILURE:
      return {
        ...state,
        loadingMore: false,
        loading: false,
        data: [],
        error: action.error,
      };

    case GET_MORE_REPOS:
      return {
        ...state,
        page: state.page + 1,
        loadingMore: true,
        loading: false,
      };

    case GET_MORE_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingMore: false,
        data: [...state.data, ...action.payload],
        error: '',
      };

    case GET_MORE_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        loadingMore: false,
        hasMoreToFetch: false,
        error: '',
      };

    default:
      return state;
  }
};

export default reposReducer;
