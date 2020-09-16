import React from 'react';

import {StatusBar , ScrollView} from 'react-native';
import { Container } from './styles';
import AppBar from './components/AppBar';
import ToolBar from './components/ToolBar';
import User from './components/User';
import Story from './components/Story';
import Feed from './components/Feed';

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
         <Feed />
        </ScrollView>
        
      </Container>
    
    </>
  
  );
}

export default App;