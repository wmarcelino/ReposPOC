import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StatusBar as StatusBarRN, StatusBarProps, View} from 'react-native';

export const StatusBar = ({
  backgroundColor = 'transparent',
  barStyle = 'dark-content',
}: StatusBarProps) => {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <>
      <StatusBarRN
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent
      />
      <View style={{height: safeAreaInsets.top}} />
    </>
  );
};
