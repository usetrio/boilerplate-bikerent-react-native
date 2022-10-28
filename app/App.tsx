import React from 'react';
import { StatusBar } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Main } from './navigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <BottomSheetModalProvider>
          <QueryClientProvider client={queryClient}>
            <Main />
          </QueryClientProvider>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </React.Fragment>
  );
}
