export type ViewProps = {
  searchText: string;
  loading: boolean;
  loadingMore: boolean;
  error?: string;
  repos: TRepo[];
  handleTextChange: (searchText: string) => void;
  handleBlur: () => void;
  handleCardPress: (url: string) => void;
  handleEndReached: () => void;
};

export type TRepo = {
  avatar: string;
  repoName: string;
  creatorLogin: string;
  startsQuantity: string;
  url: string;
};
