import React from 'react';

import {StatusBar , ScrollView} from 'react-native';
import { Container } from './styles';
import AppBar from './components/AppBar';
import ToolBar from './components/ToolBar';
import User from './components/User';
import Story from './components/Story';

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
         <User />
         <Story />
        </ScrollView>
        
      </Container>
    
    </>
  
  );
}

export default App;