export const GET_REPOS = 'GET_REPOS';

export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';

export const GET_REPOS_FAILURE = 'GET_REPOS_FAILURE';

export const GET_MORE_REPOS = 'GET_MORE_REPOS';

export const GET_MORE_REPOS_SUCCESS = 'GET_MORE_REPOS_SUCCESS';

export const GET_MORE_REPOS_FAILURE = 'GET_MORE_REPOS_FAILURE';

export const getRepos = (payload: string, perPage: number, page: number) => ({
  type: GET_REPOS,
  payload: {payload, perPage, page},
});

export const getReposSuccess = (payload: Response) => ({
  type: GET_REPOS_SUCCESS,
  payload,
});

export const getReposFailure = (payload: any) => ({
  type: GET_REPOS_FAILURE,
  payload,
});

export const getMoreRepos = (
  payload: string,
  perPage: number,
  page: number,
) => ({
  type: GET_MORE_REPOS,
  payload: {payload, perPage, page},
});

export const getMoreReposSuccess = (payload: Response) => ({
  type: GET_MORE_REPOS_SUCCESS,
  payload,
});

export const getMoreReposFailure = (payload: any) => ({
  type: GET_MORE_REPOS_FAILURE,
  payload,
});
