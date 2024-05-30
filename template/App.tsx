import {Box, NativeBaseProvider} from 'native-base';

import React from 'react';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box safeArea>Welcome to React native</Box>
    </NativeBaseProvider>
  );
}
