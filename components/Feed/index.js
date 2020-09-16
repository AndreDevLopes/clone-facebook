import React from 'react';


import { Container , Header , Row , User , Time , 
        Post , Photo , Footer , FooterCount ,
         IconCount , TextCount , Separator , FooterMenu , Text ,
        Icon, Button} from './styles';
import {View} from 'react-native';
import Avatar from '../Avatar';
import {Entypo , AntDesign , MaterialCommunityIcons} from '@expo/vector-icons';
import {BottomDivider} from '../ToolBar/styles';

const Feed = () => {
  return (
  <>
  <Container>
      <Header>
          <Row>
            <Avatar
                source={require('../../assets/user3.jpg')}
            />
            <View style={{paddingLeft: 10}}>
                <User>Regi P</User>
                <Row>
                    <Time>20m</Time>

                    <Entypo
                        name='dot-single'
                        size={12}
                        color="#747476"
                    />
                     <Entypo
                        name='globe'
                        size={10}
                        color="#747476"
                    />
                </Row>
               
            </View>

          </Row>
          <Entypo
                    name='dots-three-horizontal'
                    size={15}
                    color='#222121'
                />
      </Header>
      <Post>
          Crie na prática uma aplicação utilizando NextJS,
           ReactJS, React Native e Strap Api.
      </Post>
      <Photo
        source = {require('../../assets/post1.jpg')}
      />
      <Footer>
          <FooterCount>
              <Row>
                  <IconCount>
                    <AntDesign 
                        name="like1"
                        size={12}
                        color="#FFFFFF"

                    />
                    
                  </IconCount>
                  <TextCount>88 likes</TextCount>
              </Row>
              <TextCount>2k comments</TextCount>
          </FooterCount>
          <Separator />
          <FooterMenu>
              <Button>
                    <Icon>
                    <AntDesign 
                        name='like2'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text>Like</Text>  
              </Button>
              <Button>
                    <Icon>
                    <MaterialCommunityIcons
                        name='comment-outline'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text>Comment</Text>  
              </Button>
              <Button>
                    <Icon>
                    <MaterialCommunityIcons
                        name='share-outline'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text>Share</Text>  
              </Button>
              
          </FooterMenu>
      </Footer>
      <BottomDivider />
  </Container>
  <Container>
      <Header>
          <Row>
            <Avatar
                source={require('../../assets/user2.jpg')}
            />
            <View style={{paddingLeft: 10}}>
                <User>Wanessa J</User>
                <Row>
                    <Time>20m</Time>

                    <Entypo
                        name='dot-single'
                        size={12}
                        color="#747476"
                    />
                     <Entypo
                        name='globe'
                        size={10}
                        color="#747476"
                    />
                </Row>
               
            </View>

          </Row>
          <Entypo
                    name='dots-three-horizontal'
                    size={15}
                    color='#222121'
                />
      </Header>
      <Post>
        Post User.
      </Post>
      <Photo
        source = {require('../../assets/post2.jpg')}
      />
      <Footer>
          <FooterCount>
              <Row>
                  <IconCount>
                    <AntDesign 
                        name="like1"
                        size={12}
                        color="#FFFFFF"

                    />
                    
                  </IconCount>
                  <TextCount>88 likes</TextCount>
              </Row>
              <TextCount>2k comments</TextCount>
          </FooterCount>
          <Separator />
          <FooterMenu>
              <Button>
                    <Icon>
                    <AntDesign 
                        name='like2'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text>Like</Text>  
              </Button>
              <Button>
                    <Icon>
                    <MaterialCommunityIcons
                        name='comment-outline'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text>Comment</Text>  
              </Button>
              <Button>
                    <Icon>
                    <MaterialCommunityIcons
                        name='share-outline'
                        size={20}
                        color='#424040'
                    />
                </Icon>
                <Text>Share</Text>  
              </Button>
              
          </FooterMenu>
      </Footer>
      <BottomDivider />
  </Container>
  </>);
}

export default Feed;