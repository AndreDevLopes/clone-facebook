import React from 'react';


 import { Container,Row , Input ,
          Divider , Menu, MenuText ,
          Separator , BottomDivider} from './styles';
 import {Ionicons , MaterialIcons , MaterialCommunityIcons} from '@expo/vector-icons';
 import Avatar from '../Avatar';

const ToolBar = () => {
  return (
  <>
  <Container>
      <Row>
        <Avatar source={require('../../assets/user1.jpg')} />
        <Input placeholder="what's on your  mind?" />
        <Divider />
      </Row>
      <Row>
        <Menu>
            <Ionicons
                name="ios-videocam"
                size={22}
                color="#F44337"
            
            />
            <MenuText>Live</MenuText>
        </Menu>
        <Separator />
        <Menu>
            <MaterialIcons
            
                name="photo-size-select-actual"
                size={20}
                color='#4CAF50'
            />
            <MenuText>Photo</MenuText>
        </Menu>
        <Separator />
        <Menu>
          <MaterialCommunityIcons
            name="video-plus"
            size={22}
            color="#E141FC"
          
          />
          <MenuText>Room</MenuText>
        </Menu>
      </Row>
  </Container>
  <BottomDivider />
  </>);
}

export default ToolBar;