export type TRepoCardProps = {
  image: string;
  repoName: string;
  username: string;
  startsQuantity: string;
  url: string;
  handlePress: (url: string) => void;
};
