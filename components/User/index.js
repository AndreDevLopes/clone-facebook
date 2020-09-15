import React from 'react';
import {ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import { Container , Room , Text , Users} from './styles';
import Avatar from '../Avatar';
const User = () => {
  return (<Container>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft:11}}
      
      >
          <Room>
              <MaterialCommunityIcons 
                name="video-plus"
                size={26}
                color="#E141FC"
              />
              <Text>{`Create\nRoom`}</Text>
          </Room>
          <Users>
            <Avatar
                source={require('../../assets/user2.jpg')}
                online={true}
            />
          </Users>
          <Users>
            <Avatar
                source={require('../../assets/user3.jpg')}
                online={true}
            />
          </Users>
          <Users>
            <Avatar
                source={require('../../assets/user4.jpg')}
                online={false}
            />
          </Users>
          <Users>
            <Avatar
                source={require('../../assets/user5.jpg')}
                online={false}
            />
          </Users>
      </ScrollView>
  </Container>);
}

export default User;