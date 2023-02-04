import React from 'react';
import {ViewModelProps} from './types';
import {View} from './View';

export const ViewModel = ({route}: ViewModelProps) => {
  return <View url={route.params?.url} />;
};
