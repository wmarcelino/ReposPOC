import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ScreenProps<
  ScreenName extends string,
  ParamList extends object = Record<string, never>,
> = NativeStackScreenProps<Record<ScreenName, ParamList>, ScreenName>;
