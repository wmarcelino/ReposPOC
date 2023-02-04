import {ScreenProps} from '../../types';

export type Props = {
  url: string;
};

export type ViewModelProps = ScreenProps<string, Props>;

export type ViewProps = Props;
