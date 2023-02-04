import React from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {StatusBar} from '../../components/StatusBar/StatusBar';
import {WebviewContainer} from './styles';
import {ViewProps} from './types';
export const View = ({url}: ViewProps) => {
  return (
    <WebviewContainer>
      <StatusBar />
      <WebView
        source={{uri: url}}
        renderLoading={() => <ActivityIndicator size="large" />}
        startInLoadingState
      />
    </WebviewContainer>
  );
};
