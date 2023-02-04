import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Repositories} from '../../screens/Repositories';
import {RepositoryDetail} from '../../screens/RepositoryDetail';

export const Routes = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <>
      <RootStack.Navigator>
        <RootStack.Group navigationKey="repository">
          <RootStack.Screen
            name="Repositories"
            component={Repositories}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="RepositoryDetail"
            component={RepositoryDetail}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </>
  );
};
