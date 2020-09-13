import React from 'react';

import {StatusBar , ScrollView} from 'react-native';
import { Container } from './styles';
import AppBar from './components/AppBar';
import ToolBar from './components/ToolBar';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Container>
        <ScrollView>
         <AppBar />
         <ToolBar />
        </ScrollView>
        
      </Container>
    
    </>
  
  );
}

export default App;